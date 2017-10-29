export function isInsideWindow(position) {
	return position.x <= window.innerWidth 
	    && position.y <= window.innerHeight 
	    && position.x >= 0
	    && position.y >= 0;
}

export function distBetween(a, b) {
	var deltaXSquared = Math.pow(b.x - a.x, 2);
	var deltaYSquared = Math.pow(b.y - a.y, 2);
	return Math.sqrt(deltaXSquared + deltaYSquared);
}

export function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

export function lineBetween(context, a, b, colour, thickness = 1) {
	context.beginPath();
	context.moveTo(a.x, a.y);
	context.lineTo(b.x, b.y);
	context.strokeStyle = colour;
	context.lineWidth = thickness;
	context.stroke();
}

export function clampInt(value, min, max) {
	return Math.min(Math.max(value, min), max);
}

export function randBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
