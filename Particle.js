class Particle {
    constructor(x, y, colour, size) {
        this.x = x;
        this.y = y;

        this.colour = colour;
        this.size = size;

        let operators = [-1, 1];
        this.velocity = { x: operators[Math.floor(Math.random())] * 0.001, y: operators[Math.floor(Math.random())] * 0.001 };
    }

    // since it's only for the camera, we disregard z
    draw(canvas, ctx) {
        console.log('drawing');
        const rectWidth = this.size; 
        const rectHeight = this.size;

        ctx.fillStyle = this.colour;
        ctx.fillRect(this.x, this.y, rectWidth, rectHeight);
    }
}