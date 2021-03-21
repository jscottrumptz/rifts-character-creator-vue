const Psionic = require('../Psionic');

class Exorcism extends Psionic {
    constructor() {
        super();
        this.name = 'Exorcism';
        this.group = 'Healing';
        this.range = 'Immediate area, touch or within 8 feet (2.4 m).';
        this.duration = 'Instant, if successful.';
        this.cost = '10 I.S.P.';
    }
}

module.exports = Exorcism;