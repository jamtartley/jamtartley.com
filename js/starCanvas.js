/**
 * Creates a star object
 * @param {object} position    x and y locations
 */
function Star(position) {
	const MAX_SPEED = 3;

	this.position = position;
	this.speed = Math.random() * MAX_SPEED;

	/**
	 * Updates this star's position on the canvas.
	 * Adds a random drift so that movement seems more natural.
	 */
	this.Update = function() {
		const MAX_Y_DRIFT = 1;
		const MAX_X_DRIFT = 1;
		
		this.position.y += this.speed;

		if (IsInsideWindow(this.position) == false) {
			KillStar(this);
		}
	}

	/**
	 * Draws this star to the canvas
	 */
	this.Draw = function() {
		const RADIUS = 1;

		context.beginPath();
		context.arc(this.position.x, this.position.y, RADIUS, 0, 2 * Math.PI, false);
		context.fillStyle = '#DFD58F';
		context.fill();
	}
}

/**
 * Any initialisation happens here
 */
function Init() {
	setInterval(Update, 10);
	Resize();
}

/**
 * Resize canvas to fit window size
 */
function Resize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

/**
 * Logic timer has ticked
 */
function Update() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    UpdateCanvas();
    DrawCanvas();
}

/**
 * Update all objects to draw on the canvas
 */
function UpdateCanvas() {
	stars.forEach(function(star) {
		star.Update();
	})
}

/**
 * Draw all objects to the canvas
 */
function DrawCanvas() {
	stars.forEach(function(star) {
		star.Draw();
	})
}

/**
 * Returns true iff position is within the bounds
 * of the window
 * 
 * @param position    location to check
 */
function IsInsideWindow(position) {
	return position.x <= window.innerWidth 
	    && position.y <= window.innerHeight 
	    && position.x >= 0
	    && position.y >= 0;
}

/**
 * Kills a star that has moved off-screen
 * and replaces with a new one.
 * 
 * @param star    star to kill
 */
function KillStar(star) {
	var index = stars.indexOf(star);

	// If star exists (it should!) remove it
	if (index > -1) {
		stars.splice(index, 1);
	}

	AddNewStar(false);
}

/**
 * Adds a new star to the set.
 * 
 * @param randomY    should this star have a random starting y or start at the bottom of the screen?
 */
function AddNewStar(randomY = true) {
	stars.push(new Star( { x: Math.random() * window.innerWidth, 
			               y: randomY ? Math.random() * window.innerHeight 
			                          : 0 } ));
}

/*************EXEXUTION*************/

const MAX_STAR_COUNT = 500;

var canvas = document.getElementById("star-canvas");

if (canvas && canvas.getContext) {
    Init();

    var context = canvas.getContext("2d");
	var stars = [];

	for (var i = 0; i < MAX_STAR_COUNT; i++) {
		AddNewStar();
	}
}