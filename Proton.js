class Proton extends Particle {
    constructor(x, y, z) {
        super(x, y, z, 'red', 10);
        this.charge = 1.6e-19;  // coulombs
        this.mass = 1.67e-27; //kg
    }
}