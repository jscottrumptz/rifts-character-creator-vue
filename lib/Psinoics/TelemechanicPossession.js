const Psionic = require('../Psionic');

class TelemechanicPossession extends Psionic {
    constructor() {
        super();
        this.name = 'Telemechanic Possession';
        this.group = 'Super';
        this.range = 'Touch or 10 feet (3 m) per level of experience.';
        this.duration = 'Two minutes (8 melees) per level of experience.';
        this.cost = '50 I.S.P.';
    }
}

module.exports = TelemechanicPossession;