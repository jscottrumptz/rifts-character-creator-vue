const Psionic = require('../Psionic');

class SenseEvil extends Psionic {
    constructor() {
        super();
        this.name = 'Sense Evil';
        this.group = 'Sensitive';
        this.range = '140 feet (42.7 m) area.';
        this.duration = '2 minutes (8 melees) per level of experience.';
        this.cost = '2 I.S.P.';
    }
}

module.exports = SenseEvil;