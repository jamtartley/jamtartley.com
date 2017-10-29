import * as Utils from "./utils";
import Branch from "./branch";

class Tree {
    constructor(pos) {
        const minRootSize = 50;
        const maxRootSize = 100;

        this.branches = [];
        this.branches.push(new Branch(pos, Utils.randBetween(minRootSize, maxRootSize), 0));
    }

    progress() {
        for (let i = this.branches.length - 1; i >= 0; i--) {
            let branch = this.branches[i];

            if (branch.isFinished === true) {
                continue;
            }

            let newBranches = branch.progress(2);

            for (let newBranch of newBranches) {
                this.branches.push(newBranch);
            }
        }
    }

    draw(context) {
        for (let branch of this.branches) {
            branch.draw(context);
        }
    }
}

export default Tree;
