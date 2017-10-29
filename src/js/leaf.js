import * as Utils from "./utils";

class Leaf {
    constructor(position) {
        this.position = position;
        this.radius = Utils.getRandInt(2, 16);
    }

    draw(context) {
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = "rgba(190, 130, 130, 0.9)";
        context.fill();
    }
}

export default Leaf;
