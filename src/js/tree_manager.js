import Tree from "./tree";
import Vector2D from "./vector_2d";

class TreeManager {
    constructor(treeCount) {
        this.trees = [];

        for (let i = 0; i < treeCount; i++) {
            this.trees.push(new Tree(new Vector2D(window.innerWidth / 2, window.innerHeight)));
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
