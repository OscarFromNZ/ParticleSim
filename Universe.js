class Universe {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;

        this.particles = [];

        this.neutronCount = 10;
        this.electronsCount = 10;
        this.protonsCount = 10;

        // +-
        this.maxX = 10000;
        this.maxY = 10000;

        this.timeTick = 500;

        this.fakeBigBang()
    }

    // not the real Big Bang as that's pretty complex and would require quark shenanigans
    fakeBigBang() {
        // init neutrons
        for (let i = 0; i < this.neutronCount; i++) {
            let operators = [1, -1];

            this.particles.push(new Neutron((Math.random() * this.maxX * operators[Math.floor(Math.random() * operators.length)]), (Math.random() * this.maxY * operators[Math.floor(Math.random() * operators.length)])));
        }

        // init electrons
        for (let i = 0; i < this.electronsCount; i++) {
            let operators = [1, -1];

            this.particles.push(new Electron((Math.random() * this.maxX * operators[Math.floor(Math.random() * operators.length)]), (Math.random() * this.maxY * operators[Math.floor(Math.random() * operators.length)])));
        }

        // init protons
        for (let i = 0; i < this.protonsCount; i++) {
            let operators = [1, -1];

            this.particles.push(new Proton((Math.random() * this.maxX * operators[Math.floor(Math.random() * operators.length)]), (Math.random() * this.maxY * operators[Math.floor(Math.random() * operators.length)])));
        }

        this.gameLoop(this.canvas, this.context);
    }

    // "game"
    gameLoop(canvas, context) {
        console.log('loop');
        console.log(this.particles.length); 
        context.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].draw(canvas, context);

            // uh oh, loop de oop
            for (let j = 0; j < this.particles.length; j++) {
                if (j !== i) {
                    let distance = this.calcDistance(this.particles[i], this.particles[j]);
                    // f = ma
                    // a = f/m

                    let k = 8.9875e9;
                    let force = (k * this.particles[i].charge * this.particles[j].charge) / (distance * distance);

                }
            }
        }

        let intervalId = setInterval(() => {
            this.gameLoop(canvas, context);
        }, 500);
    }

    calcDistance(point1, point2) {
        let dx = point2.x - point1.x;
        let dy = point2.y - point1.y;
    
        return Math.sqrt(dx * dx + dy * dy);
    }    
}