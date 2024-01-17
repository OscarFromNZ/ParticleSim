class Neutron extends Particle {
    constructor(x, y, z) {
        super(x, y, z, 'grey', 10);
        this.charge = 0;  // coulombs
        this.mass = 1.67e-27 + 9.11e-31; //kg
    }
}