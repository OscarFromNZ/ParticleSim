class Neutron extends Particle {
    constructor(x, y) {
        super(x, y, 'grey', 10);
        this.charge = 0;  // coulombs
        this.mass = 1.67e-27 + 9.11e-31; //kg
    }
}