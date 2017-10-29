import * as Utils from "./utils";
import Rgba from "./rgba";
import Star from "./star";

class StarManager {
    constructor(maxCount, maxDistLineConnection, maxDistMouseEffect) {
        this.maxCount = maxCount;
        this.maxDistLineConnection = maxDistLineConnection;
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
        this.stars.push(new Star(pos, new Rgba(255, 255, 230, 255)));
    }

    killStar(star) {
        let index = this.stars.indexOf(star);

        // If star exists (it should!) remove it
        if (index > -1) {
            this.stars.splice(index, 1);
        }

        this.addNewStar(false);
    }

    drawMouseConnection(context) {
        for (let star of this.stars) {
            let dist = Utils.distBetween(this.currentMousePos, star.position);

            if (dist <= this.maxDistMouseEffect) {
                let closeness = 1 - (dist / this.maxDistMouseEffect);
                let rgba = new Rgba(star.colour.red, 
                    star.colour.green,
                    star.colour.blue,
                    closeness);

                Utils.lineBetween(context, star.position, 
                    this.currentMousePos,
                    rgba.getRgbaPrint());	// Closer = more opaque
            }			
        }
    }

    drawLineConnections(context) {
        // TODO: this is pretty poorly performant (exponential time complexity),
        // need to implement quadtree to prune unnecessary checks
        for (let star of this.stars) {
            for (let other of this.stars) {
                let dist = Utils.distBetween(star.position, other.position);

                if (dist <= this.maxDistLineConnection && star != other) {
                    let closeness = 1 - (dist / this.maxDistLineConnection);

                    Utils.lineBetween(context, star.position,
                        other.position,
                        new Rgba(star.colour.red, 
                            star.colour.green,
                            star.colour.blue, 
                            closeness).getRgbaPrint());
                }
            }
        }
    }

    update(currentMousePos) {
        this.currentMousePos = currentMousePos;

        for (let star of this.stars) {
            star.update(currentMousePos, this.maxDistMouseEffect);

            if (Utils.isInsideWindow(star.position) == false) {
                this.killStar(star);
            }
        }
    }

    draw(context) {
        //this.drawMouseConnection(context);
        //this.drawLineConnections(context);

        for (let star of this.stars) {
            star.draw(context);
        }
    }
}

export default StarManager;
