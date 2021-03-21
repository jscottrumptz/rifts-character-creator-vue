const Psionic = require('../Psionic');

class MindBond extends Psionic {
    constructor() {
        super();
        this.name = 'Mind Bond';
        this.group = 'Super';
        this.range = 'Touch.';
        this.duration = 'Special.';
        this.cost = '10 I.S.P.';
    }
}

module.exports = MindBond;