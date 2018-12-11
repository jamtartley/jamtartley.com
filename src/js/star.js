import * as Utils from "./utils";
import Rgba from "./rgba";

const MIN_SIZE = 1;

class Star {
    constructor(position, colour, imageNumber) {
        const MIN_SPEED = 0.2;
        const MAX_SPEED = 0.4;
        const MIN_FULL_SIZE = 4;
        const MAX_FULL_SIZE = 128;

        this.colour = colour;
        this.size = MIN_SIZE;
        this.fullSize = Utils.getRandInt(MIN_FULL_SIZE, MAX_FULL_SIZE);
        this.position = position;
        this.speed = Utils.getRandInt(MIN_SPEED, MAX_SPEED);
        this.imageNumber = imageNumber;
    }

    update(currentMousePos, maxDistMouseEffect) {
        this.position.y += this.speed;

        let dist = Utils.distBetween(currentMousePos, this.position);

        if (dist <= maxDistMouseEffect) {
            let closeness = 1 - (dist / maxDistMouseEffect);
            this.size = Utils.lerp(MIN_SIZE, this.fullSize, closeness);
        } else {
            this.size = MIN_SIZE;
        }
    }

    draw(context) {
        let img = new Image();
        img.src = "images/tiles/tile_" + this.imageNumber + ".png";

        let x = this.position.x - (this.size / 2);
        let y = this.position.y - (this.size / 2);
        context.drawImage(img, x, y, this.size, this.size);
    }
}

export default Star;
