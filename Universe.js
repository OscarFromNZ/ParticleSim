class Universe {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;

        this.particles = [];

        this.neutronCount = 1000;
        this.electronsCount = 1000;
        this.protonsCount = 1000;

        // +-
        this.maxX = 10000;
        this.maxY = 10000;
        this.maxZ = 10000;

        this.fakeBigBang()
    }

    // not the real Big Bang as that's pretty complex and would require quark shenanigans
    fakeBigBang() {
        // init neutrons
        for (let i = 0; i < this.neutronCount; i++) {
            let operators = [1, -1];

            this.particles.push(new Neutron((Math.random() * this.maxX * operators[Math.floor(Math.random() * operators.length)]), (Math.random() * this.maxY * operators[Math.floor(Math.random() * operators.length)]), (Math.random() * this.maxZ) * operators[Math.floor(Math.random() * operators.length)]));
        }

        // init electrons
        for (let i = 0; i < this.electronsCount; i++) {
            let operators = [1, -1];

            this.particles.push(new Electron((Math.random() * this.maxX * operators[Math.floor(Math.random() * operators.length)]), (Math.random() * this.maxY * operators[Math.floor(Math.random() * operators.length)]), (Math.random() * this.maxZ) * operators[Math.floor(Math.random() * operators.length)]));
        }

        // init protons
        for (let i = 0; i < this.protonsCount; i++) {
            let operators = [1, -1];

            this.particles.push(new Proton((Math.random() * this.maxX * operators[Math.floor(Math.random() * operators.length)]), (Math.random() * this.maxY * operators[Math.floor(Math.random() * operators.length)]), (Math.random() * this.maxZ) * operators[Math.floor(Math.random() * operators.length)]));
        }

        this.gameLoop(this.canvas, this.context);
    }

    // "game"
    gameLoop(canvas, context) {
        console.log('loop');
        context.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].draw(canvas, context)
        }

        requestAnimationFrame(() => this.gameLoop(canvas, context));
    }
}