class Particle {
    constructor(x, y, colour, size) {
        this.x = x;
        this.y = y;

        this.colour = colour;
        this.size = size;
    }

    // since it's only for the camera, we disregard z
    draw(canvas, ctx) {
        console.log('drawing');
        const scaleX = canvas.width / 20000;
        const scaleY = canvas.height / 20000;

        const canvasX = this.x * scaleX;
        const canvasY = this.y * scaleY;

        const rectWidth = this.size; 
        const rectHeight = this.size;

        ctx.fillStyle = this.colour;
        ctx.fillRect(canvasX, canvasY, rectWidth, rectHeight);
    }
}