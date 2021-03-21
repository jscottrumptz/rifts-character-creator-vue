const Psionic = require('../Psionic');

class Nightvision extends Psionic {
    constructor() {
        super();
        this.name = 'Nightvision';
        this.group = 'Physical';
        this.range = 'Self. Visual range about 600 feet ( 183 m).';
        this.duration = '10 minutes per level of experience.';
        this.cost = '4 I.S.P.';
    }
}

module.exports = Nightvision;