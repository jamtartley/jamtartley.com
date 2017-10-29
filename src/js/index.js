import Rgba from "./rgba";
import Star from "./star";
import StarManager from "./star_manager";
import TreeManager from "./tree_manager";

function init() {
    const MILLIS_BETWEEN_UPDATE = 16;

    canvas.addEventListener("mousemove", mouseMove, false);
    canvas.addEventListener("mousedown", mouseDown, false);
    setInterval(update, MILLIS_BETWEEN_UPDATE);
    resize();
}

function mouseMove(e) {
    currentMousePos.x = e.layerX;
    currentMousePos.y = e.layerY;
}

function mouseDown(e) {
    treeManager.update();
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
	//starManager.update(currentMousePos);
    //treeManager.update();
}

function drawCanvas() {
	//starManager.draw(context);
    treeManager.draw(context);
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
var treeManager = new TreeManager(4);

if (canvas && canvas.getContext) {
    init();
    context = canvas.getContext("2d");
    starManager.init();
}
