const Psionic = require('../Psionic');

class SuppressFear extends Psionic {
    constructor() {
        super();
        this.name = 'Suppress Fear';
        this.group = 'Healing';
        this.range = 'Self or others by touch.';
        this.duration = 'One minute per level of experience.';
        this.cost = '8 I.S.P.';
    }
}

module.exports = SuppressFear;