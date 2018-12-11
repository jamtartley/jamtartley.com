import * as Utils from "./utils";
import Branch from "./branch";

class Tree {
    constructor(pos) {
        const minRootSize = 96;
        const maxRootSize = 128;

        this.branches = [];
        this.branches.push(new Branch(pos, Utils.getRandInt(minRootSize, maxRootSize), 0));
    }

    progress() {
        for (let i = this.branches.length - 1; i >= 0; i--) {
            let branch = this.branches[i];

            if (branch.isFinished === true) {
                continue;
            }

            let newBranches = branch.getChildren(Utils.getRandInt(2, 3));

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
