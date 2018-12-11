import Rgba from "./rgba";
import TreeManager from "./tree_manager";
import * as Utils from "./utils";

function init() {
    window.requestAnimationFrame(update);
    resize();
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (canvas.width != prevWidth || canvas.height != prevHeight) treeManager = new TreeManager(TREE_COUNT);
}

function update() {
    deltaTime = Date.now() - previousFrameTime;

    let isInViewport = Utils.isInsideViewport($("#homepage-container"));

    if (wasInViewport === false && isInViewport) treeManager = new TreeManager(TREE_COUNT);

    if (isInViewport) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        resize();
        updateCanvas();
        drawCanvas();

        prevWidth = canvas.width;
        prevHeight = canvas.height;
    }

    wasInViewport = isInViewport;
    previousFrameTime = Date.now();
    window.requestAnimationFrame(update);
}

function updateCanvas() {
    treeManager.update();
}

function drawCanvas() {
    treeManager.draw(context);
}

const TREE_COUNT = 2;

let canvas = document.getElementById("homepage-canvas");
let context;
let currentMousePos = {
  x: 0,
  y: 0
};
let prevWidth;
let prevHeight;
let deltaTime;
let previousFrameTime;
let wasInViewport = false;
let treeManager = new TreeManager(TREE_COUNT);

if (canvas && canvas.getContext) {
    init();
    context = canvas.getContext("2d");
}
