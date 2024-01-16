// since electron is an elementary particle I don't know if it can fall into the same thing as neutron and protons but we'll see
class Electron extends Particle {
    constructor(x, y, z) {
        super(x, y, z, 'blue', 3); // the number is the size to be rendered
        this.realSize = 3; // not really but for sake of this it is;
    }
}