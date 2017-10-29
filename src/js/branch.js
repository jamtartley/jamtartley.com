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

    progress(count) {
        if (this.len <= 2) {
            return [];
        }

        this.isFinished = true;

        return [new Branch(this.end, this.len * (2 / 3), this.angle - Math.PI / 6), new Branch(this.end, this.len * (2 / 3), this.angle + Math.PI / 6)];
    }

    draw(context) {
        Utils.lineBetween(context, this.start, this.end, "white", 1);
    }
}

export default Branch;
