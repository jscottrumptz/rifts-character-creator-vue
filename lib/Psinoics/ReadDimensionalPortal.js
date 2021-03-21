const Psionic = require('../Psionic');

class ReadDimensionalPortal extends Psionic {
    constructor() {
        super();
        this.name = 'Read Dimensional Portal';
        this.group = 'Sensitive';
        this.range = 'Touch or one foot (0.3 m) per level of experience.';
        this.duration = 'One melee round per level of experience.';
        this.cost = '6 I.S.P.';
    }
}

module.exports = ReadDimensionalPortal;