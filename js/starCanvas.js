/**
 * Creates a star object.
 * 
 * @param position    initial x and y location
 */
function Star(position) {
	const BASE_COLOUR = '#595A52';

	const MAX_SPEED = 2;
	const MAX_RADIUS = 32;
	const MAX_DIST_MOUSE_EFFECT = 128;

	const MIN_RADIUS = 2;

	this.colour = BASE_COLOUR;
	this.radius = MIN_RADIUS;
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

		var dist = DistBetween(currentMousePos, this.position);

		if (dist <= MAX_DIST_MOUSE_EFFECT) {
			var closeness = 1 - (dist / MAX_DIST_MOUSE_EFFECT);
			this.radius = Math.max(closeness * MAX_RADIUS, MIN_RADIUS);			
		} else {
			this.radius = MIN_RADIUS;
		}
	}

	/**
	 * Draws this star to the canvas
	 */
	this.Draw = function() {
		const MIN_LINE_THICKNESS = 1;
		const MAX_LINE_THICKNESS = 8;

		context.beginPath();
		context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
		context.fillStyle = this.colour;
		context.fill();

		var dist = DistBetween(currentMousePos, this.position);
		
		if (dist <= MAX_DIST_MOUSE_EFFECT) {
			var closeness = 1 - (dist / MAX_DIST_MOUSE_EFFECT);
			LineBetween(this.position, 
									currentMousePos,
									this.colour, 
									Math.max(closeness * MAX_LINE_THICKNESS, MIN_LINE_THICKNESS));
		}
	}
}

/**
 * Any initialisation happens here
 */
function Init() {
	const MILLIS_BETWEEN_UPDATE = 16;

  canvas.addEventListener("mousemove", MouseMove, false);
	setInterval(Update, MILLIS_BETWEEN_UPDATE);
	Resize();
}

/**
 * Listener function for mouse movement.
 * 
 * @param e 	mouse location
 */
function MouseMove(e) {
    currentMousePos.x = e.layerX;
    currentMousePos.y = e.layerY;
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

    Resize();
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
	stars.push(new Star({ x: Math.random() * window.innerWidth, 
			               		y: randomY ? Math.random() * window.innerHeight 
			                          	 : 0 } ));
}

/**
 * Euclidean distance between two points.
 * 
 * @param a		first location
 * @param b		second location
 */
function DistBetween(a, b) {
	var deltaXSquared = Math.pow(b.x - a.x, 2);
	var deltaYSquared = Math.pow(b.y - a.y, 2);
	return Math.sqrt(deltaXSquared + deltaYSquared);
}

/**
 * Draw a line between two points.
 * 
 * @param a         first location
 * @param b         second location
 * @param colour    line colour
 * @param thickness line thickness (px)
 */
function LineBetween(a, b, colour, thickness) {
	context.beginPath();
	context.moveTo(a.x, a.y);
	context.lineTo(b.x, b.y);
	context.strokeStyle = colour;
	context.lineWidth = thickness;
	context.stroke();
}

/*************EXECUTION*************/

const MAX_STAR_COUNT = 256;

var canvas = document.getElementById("star-canvas");
var currentMousePos = {
  x: 0,
  y: 0
};

if (canvas && canvas.getContext) {
  Init();

  var context = canvas.getContext("2d");
	var stars = [];

	for (var i = 0; i < MAX_STAR_COUNT; i++) {
		AddNewStar();
	}
}