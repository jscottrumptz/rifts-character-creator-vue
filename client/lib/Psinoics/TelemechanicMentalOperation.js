const Psionic = require('../Psionic');

class TelemechanicMentalOperation extends Psionic {
    constructor() {
        super();
        this.name = 'Telemechanic Mental Operation';
        this.group = 'Super';
        this.range = '20 feet (6.1 m) +5 feet (1.5 m) per level of experience.';
        this.duration = '2 melee rounds per level of the psychic.';
        this.cost = '12 I.S.P.';
    }
}

module.exports = TelemechanicMentalOperation;