/**
 * Creates a star object.
 * 
 * @param position    initial x and y location
 */
function Star(position) {
	//const BASE_COLOUR = '#595A52';
	const BASE_COLOUR = GetRandomHexColour();

	const MAX_SPEED = 2;
	const MAX_RADIUS = 32;

	const MIN_RADIUS = 2;
	const MIN_SPEED = 1.5;

	this.colour = BASE_COLOUR;
	this.radius = MIN_RADIUS;
	this.position = position;
	this.speed = RandBetween(MIN_SPEED, MAX_SPEED);

	/**
	 * Updates this star's position on the canvas.
	 * Adds a random drift so that movement seems more natural.
	 */
	this.Update = function() {
		const MAX_Y_DRIFT = 1;
		const MAX_X_DRIFT = 1;
		
		this.position.y += this.speed;

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
		context.beginPath();
		context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
		context.fillStyle = this.colour;
		context.fill();
	}
}

/**
 * A Star Manager object handles the creation and killing of Star objects.
 * Also tells each individual Star to update/draw.
 * 
 * @param maxCount 	maximum number of stars to display at once
 */
function StarManager(maxCount) {
	this.maxCount = maxCount;
	this.stars = [];

	/**
	 * Initialise set of stars
	 */
	this.Init = function() {
		for (var i = 0; i < this.maxCount; i++) {
			this.AddNewStar();
		}
	}

	/**
	 * Adds a new star to the set.
	 * 
	 * @param randomY    should this star have a random starting y or start at the bottom of the screen?
	 */
	this.AddNewStar = function(randomY = true) {
		this.stars.push(new Star({ x: Math.random() * window.innerWidth, 
				               				 y: randomY ? Math.random() * window.innerHeight 
				                          	      : 0 } ));
	}

	/**
	 * Kills a star that has moved off-screen
	 * and replaces with a new one.
	 * 
	 * @param star    star to kill
	 */
	this.KillStar = function(star) {
		var index = this.stars.indexOf(star);

		// If star exists (it should!) remove it
		if (index > -1) {
			this.stars.splice(index, 1);
		}

		this.AddNewStar(false);
	}

	/**
	 * Draw connecting lines between nearby stars and mouse position
	 */
	this.DrawConnections = function() {
		const MIN_LINE_THICKNESS = 1;
		const MAX_LINE_THICKNESS = 4;

		this.stars.forEach(function(star) {
			var dist = DistBetween(currentMousePos, star.position);
			
			if (dist <= MAX_DIST_MOUSE_EFFECT) {
				var closeness = 1 - (dist / MAX_DIST_MOUSE_EFFECT);
				LineBetween(star.position, 
										currentMousePos,
										HexToRgba(star.colour, 1 - (dist / MAX_DIST_MOUSE_EFFECT)), 		// Closer = more opaque
										Math.max(closeness * MAX_LINE_THICKNESS, MIN_LINE_THICKNESS));	// Closer = thicker
			}			
		});
	}
	
	/**
	 * Update all Star functionality
	 */
	this.Update = function() {
		var manager = this;

		this.stars.forEach(function(star) {
			star.Update();
			if (IsInsideWindow(star.position) == false) {
				manager.KillStar(star);
			}
		});
	}

	/**
	 * Draw all stars to the canvas
	 */
	this.Draw = function() {
		this.DrawConnections();

		this.stars.forEach(function(star) {
			star.Draw();
		});
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
	starManager.Update();
}

/**
 * Draw all objects to the canvas
 */
function DrawCanvas() {
	starManager.Draw();
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

/**
 * Converts a given hex colour and alpha channel (0-1) 
 * to an equivalent RGBA colour.
 * 
 * @param hex   hex colour to convert
 * @param alpha alpha channel, 0-1
 */
function HexToRgba(hex, alpha = 1) {
	hex = hex.replace("#", "");
	alpha = ClampInt(alpha, 0, 1);

	// Convert the base-16 colour values into the 
	// equivalent base 10 counterparts.
	var red = parseInt(hex.substring(0, 2), 16); 
	var green = parseInt(hex.substring(2, 4), 16); 
	var blue = parseInt(hex.substring(4, 6), 16); 

	return "rgba(" + red 
								 + ","
								 + green
								 + ","
								 + blue
								 + ","
								 + alpha
								 + ")"; 
}

/**
 * Clamp a given integer between two numbers, inclusive.
 * 
 * @param value 	number to clamp
 * @param min   	minimum value
 * @param max   	maximum value
 */
function ClampInt(value, min, max) {
	return Math.min(Math.max(value, min), max);
}

/**
 * Generate a random number between two values, inclusive.
 * 
 * @param min 	minimum value
 * @param max 	maximum value
 */
function RandBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random hex colour
 */
function GetRandomHexColour() {
	var red = RandBetween(0, 255);
	var green = RandBetween(0, 255);
	var blue = RandBetween(0, 255);

	return '#' + red.toString(16)
						 + green.toString(16)
						 + blue.toString(16);
}

/*************EXECUTION*************/

const MAX_STAR_COUNT = 256;
const MAX_DIST_MOUSE_EFFECT = 128;

var canvas = document.getElementById("star-canvas");
var context; 
var currentMousePos = {
  x: 0,
  y: 0
};
var starManager = new StarManager(MAX_STAR_COUNT);

if (canvas && canvas.getContext) {
  Init();
  context = canvas.getContext("2d");
	starManager.Init();
}