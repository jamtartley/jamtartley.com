import * as Utils from "./utils";
import Vector2D from "./vector_2d";

class Branch {
    constructor(start, len, angle) {
        this.start = start;
        this.len = len;
        this.angle = angle;
        this.isFinished = false;

        let endX = start.x - (len * Math.sin(angle));
        let endY = start.y - (len * Math.cos(angle));
        this.end = new Vector2D(endX, endY);
    }

    getChildren(spawnCount) {
        const minLenToSpawn = 32;

        if (this.len <= minLenToSpawn) {
            // We are an end branch
            this.isFinished = true;
            return [];
        }

        this.isFinished = true;

        const minAngle = this.angle - Math.PI / 3;
        const maxAngle = this.angle + Math.PI / 3;
        const minLength = this.len / 2.5;
        const maxLength = this.len;

        let branches = [];

        for (let i = 0; i < spawnCount; i++) {
            let angle = Utils.getRandFloat(minAngle, maxAngle);
            let length = Utils.getRandFloat(minLength, maxLength);
            branches.push(new Branch(this.end, length, angle));
        }

        return branches;
    }

    draw(context) {
        Utils.lineBetween(context, this.start, this.end, "white", this.len / 20);
    }
}

export default Branch;
