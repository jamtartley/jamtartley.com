import Rgba from "./rgba";
import Star from "./star";
import StarManager from "./star_manager";

function init() {
    const MILLIS_BETWEEN_UPDATE = 16;

    canvas.addEventListener("mousemove", mouseMove, false);
    setInterval(update, MILLIS_BETWEEN_UPDATE);
    resize();
}

function mouseMove(e) {
    currentMousePos.x = e.layerX;
    currentMousePos.y = e.layerY;
}

function resize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function update() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    resize();
    updateCanvas();
    drawCanvas();
}

function updateCanvas() {
	starManager.update(currentMousePos);
}

function drawCanvas() {
	starManager.draw(context);
}

const MAX_STAR_COUNT = 64;
const MAX_DIST_MOUSE_EFFECT = 128;
const MAX_DIST_LINE_CONNECTION = 128;

var canvas = document.getElementById("star-canvas");
var context; 
var currentMousePos = {
  x: 0,
  y: 0
};
var starManager = new StarManager(MAX_STAR_COUNT, MAX_DIST_LINE_CONNECTION, MAX_DIST_MOUSE_EFFECT);

if (canvas && canvas.getContext) {
    init();
    context = canvas.getContext("2d");
    starManager.init();
}
