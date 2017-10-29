class Rgba {
    constructor(red, green, blue, alpha) {
        this.red = Math.floor(red);
        this.green = Math.floor(green);
        this.blue = Math.floor(blue);
        this.alpha = alpha;
    }

    toHex() {
        return '#' + this.red.toString(16)
            + this.green.toString(16)
            + this.blue.toString(16);
    }

    getRgbaPrint() {
        return "rgba(" + this.red 
            + "," + this.green 
            + "," + this.blue 
            + "," + this.alpha + ")";
    }

    getRgbPrint() {
        return "rgb(" + this.red 
            + "," + this.green 
            + "," + this.blue + ")";
    }

    static getMixedColour(original, mixer) {
        return new Rgba((original.red + mixer.red) / 2,
            (original.green + mixer.green) / 2,
            (original.blue + mixer.blue) / 2,
            (original.alpha + mixer.alpha) / 2);
    }

    static getRandomColour(alpha = 1) {
        return new Rgba(Math.random() * 255,
            Math.random() * 255,
            Math.random() * 255,
            alpha);
    }

    static getRandomPastel() {
        var white = new Rgba(255, 255, 255, 1);
        return Rgba.getMixedColour(Rgba.getRandomColour(), white);
    }
}

export default Rgba;
