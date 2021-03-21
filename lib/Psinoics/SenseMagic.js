const Psionic = require('../Psionic');

class SenseMagic extends Psionic {
    constructor() {
        super();
        this.name = 'Sense Magic';
        this.group = 'Sensitive';
        this.range = '120 feet (36.6 m) area.';
        this.duration = '2 minutes per level of experience.';
        this.cost = '3 I.S.P.';
    }
}

module.exports = SenseMagic;