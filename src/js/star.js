import * as Utils from "./utils";
import Rgba from "./rgba";

class Star {
    constructor(position) {
        const BASE_COLOUR = Rgba.getRandomPastel();
        const MAX_SPEED = 2;
        const MAX_RADIUS = 32;
        const MIN_RADIUS = 1;
        const MIN_SPEED = 1;

        this.colour = BASE_COLOUR;
        this.minRadius = MIN_RADIUS;
        this.maxRadius = MAX_RADIUS;
        this.radius = MIN_RADIUS;
        this.position = position;
        this.speed = Utils.randBetween(MIN_SPEED, MAX_SPEED);
    }

    update(currentMousePos, maxDistMouseEffect) {
        this.position.y += this.speed;

        let dist = Utils.distBetween(currentMousePos, this.position);

        if (dist <= maxDistMouseEffect) {
            let closeness = 1 - (dist / maxDistMouseEffect);
            this.radius = Math.max(closeness * this.maxRadius, this.minRadius);			
        } else {
            this.radius = this.minRadius;
        }
    }

    draw(context) {
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = this.colour.getRgbPrint();
        context.fill();
    }
}

export default Star;
