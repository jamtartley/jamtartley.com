import * as Utils from "./utils";
import Rgba from "./rgba";
import Star from "./star";

class StarManager {
    constructor(maxCount, maxDistMouseEffect) {
        this.maxCount = maxCount;
        this.maxDistMouseEffect = maxDistMouseEffect;
        this.stars = [];

        for (let i = 0; i < this.maxCount; i++) {
            this.addNewStar();
        }
    }

    addNewStar(randomY = true) {
        let pos = {
            x: Math.random() * window.innerWidth,
            y: randomY ? Math.random() * window.innerHeight : 0
        };

        this.stars.push(new Star(pos, new Rgba(255, 255, 230, 255), Math.floor(Math.random() * 5) + 1));
    }

    killStar(star) {
        let index = this.stars.indexOf(star);

        // If star exists (it should!) remove it
        if (index > -1) this.stars.splice(index, 1);

        this.addNewStar(false);
    }

    update(currentMousePos) {
        this.currentMousePos = currentMousePos;

        for (let star of this.stars) {
            star.update(currentMousePos, this.maxDistMouseEffect);

            if (Utils.isInsideWindow(star.position) == false) this.killStar(star);
        }
    }

    draw(context) {
        for (let star of this.stars) {
            star.draw(context);
        }
    }
}

export default StarManager;
