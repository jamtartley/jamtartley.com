import Tree from "./tree";
import Vector2D from "./vector_2d";

class TreeManager {
    constructor(treeCount) {
        this.trees = [];

        const widthFillFactor = 0.75;
        const totalWidth = window.innerWidth * widthFillFactor;
        const treeWidth = totalWidth / treeCount;

        for (let i = 0; i < treeCount; i++) {
            let startX = window.innerWidth / 2 - (totalWidth / 2) + (i * treeWidth) + (treeWidth / 2);
            this.trees.push(new Tree(new Vector2D(startX, window.innerHeight)));
        }
    }

    update() {
        for (let tree of this.trees) {
            tree.progress();
        }
    }

    draw(context) {
        for (let tree of this.trees) {
            tree.draw(context);
        }
    }
}

export default TreeManager;
