class Universe {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;

        this.particles = [];

        this.neutronCount = 2;
        this.electronsCount = 2;
        this.protonsCount = 2;

        this.timeTick = 500; // how fast the engine should run (500 is real time)

        this.fakeBigBang()
    }

    // not the real Big Bang as that's pretty complex and would require quark shenanigans
    fakeBigBang() {
        // init neutrons
        for (let i = 0; i < this.neutronCount; i++) {
            this.particles.push(new Neutron((Math.random() * this.canvas.width), Math.random() * this.canvas.height));
        }

        // init electrons
        for (let i = 0; i < this.electronsCount; i++) {
            this.particles.push(new Electron((Math.random() * this.canvas.width), Math.random() * this.canvas.height));
        }

        // init protons
        for (let i = 0; i < this.protonsCount; i++) {
            this.particles.push(new Proton((Math.random() * this.canvas.width), Math.random() * this.canvas.height));
        }

        this.gameLoop(this.canvas, this.context);
    }

    // "game"
    gameLoop(canvas, context) {
        console.log('loop');

        // canvas stuffs and resets
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].draw(canvas, context);

            // prevent from escaping box
            if (this.particles[i].x > canvas.width ) {
                this.particles[i].x = 0;
            }

            if (this.particles[i].x < 0) {
                this.particles[i].x = canvas.width - 1;
            }

            if (this.particles[i].y > canvas.height) {
                this.particles[i].y = 0;
            }

            if (this.particles[i].y < 0) {
                this.particles[i].y = canvas.height - 1;
            }

            for (let j = 0; j < this.particles.length; j++) {
                if (j !== i) {

                    let dx = this.particles[j].x - this.particles[i].x;
                    let dy = this.particles[j].y - this.particles[i].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < this.canvas.width / 1.5 && distance > 10) {
                        let force = this.calcForce(this.particles[i], this.particles[j], distance);

                        let direction = {
                            x: dx / distance,
                            y: dy / distance
                        };

                        // Calculate acceleration (a = F/m)
                        let acceleration = {
                            x: direction.x * force / this.particles[i].mass,
                            y: direction.y * force / this.particles[i].mass
                        };

                        console.log('updating x and y');

                        // pdate velocity with acceleration
                        this.particles[i].velocity.x += acceleration.x * this.timeTick;
                        this.particles[i].velocity.y += acceleration.y * this.timeTick;

                        // update position with velocity
                        this.particles[i].x += this.particles[i].velocity.x * this.timeTick;
                        this.particles[i].y += this.particles[i].velocity.y * this.timeTick;

                        // save direction idk why, prob no reason
                        this.particles[i].direction = direction;
                    }
                }
            }
        }

        let intervalId = setInterval(() => {
            this.gameLoop(canvas, context);
        }, 500);
    }

    calcAngle(point1, point2) {
        let dx = point2.x - point1.x;
        let dy = point2.y - point1.y;

        return Math.atan2(dy, dx);
    }

    calcForce(particle1, particle2, distance) {
        let k = 8.9875e9;
        let force = -1 * (k * particle1.charge * particle2.charge) / (distance * distance);

        return force;
    }
}