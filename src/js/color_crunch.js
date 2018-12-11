import Rgba from "./rgba";
import Star from "./star";
import StarManager from "./star_manager";
import * as Utils from "./utils";

function init() {
    canvas.addEventListener("mousemove", mouseMove, false);
    window.requestAnimationFrame(update);
    resize();
}

function mouseMove(e) {
    currentMousePos.x = e.x;
    currentMousePos.y = e.y;
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (canvas.width != prevWidth || canvas.height != prevHeight) {
        starManager = new StarManager(MAX_STAR_COUNT, MAX_DIST_MOUSE_EFFECT);
    }
}

function update() {
    deltaTime = Date.now() - previousFrameTime;

    if (Utils.isInsideViewport($("#color-crunch-container"))) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        resize();
        updateCanvas();
        drawCanvas();

        prevWidth = canvas.width;
        prevHeight = canvas.height;
    }

    previousFrameTime = Date.now();
    window.requestAnimationFrame(update);
}

function updateCanvas() {
    starManager.update(currentMousePos);
}

function drawCanvas() {
    starManager.draw(context);
}

const MAX_STAR_COUNT = 64;
const MAX_DIST_MOUSE_EFFECT = 256;

let canvas = document.getElementById("color-crunch-canvas");
let context; 
let currentMousePos = {
  x: 0,
  y: 0
};
let prevWidth;
let prevHeight;
let deltaTime;
let previousFrameTime;
let starManager;

if (canvas && canvas.getContext) {
    init();
    context = canvas.getContext("2d");
}
