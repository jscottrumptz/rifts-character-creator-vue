const Psionic = require('../Psionic');

class TelemechanicParalysis extends Psionic {
    constructor() {
        super();
        this.name = 'Telemechanic Paralysis';
        this.group = 'Super';
        this.range = 'Touch or 40 feet ( 12.2 m).';
        this.duration = 'One minute per level of experience.';
        this.cost = '20 I.S.P.';
    }
}

module.exports = TelemechanicParalysis;