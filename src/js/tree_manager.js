import Tree from "./tree";
import Vector2D from "./vector_2d";

class TreeManager {
    constructor(treeCount) {
        this.trees = [];
        this.framesBetweenGrow = 2;
        this.currentFrames = 0;

        const widthFillFactor = 1;
        const totalWidth = window.innerWidth * widthFillFactor;
        const treeWidth = totalWidth / treeCount;

        for (let i = 0; i < treeCount; i++) {
            let startX = window.innerWidth / 2 - (totalWidth / 2) + (i * treeWidth) + (treeWidth / 2);
            this.trees.push(new Tree(new Vector2D(startX, window.innerHeight)));
        }
    }

    update() {
        this.currentFrames++;

        if (this.currentFrames >= this.framesBetweenGrow) {
            for (let tree of this.trees) {
                tree.progress();
            }

            this.currentFrames = 0;
        }
    }

    draw(context) {
        for (let tree of this.trees) {
            tree.draw(context);
        }
    }
}

export default TreeManager;
