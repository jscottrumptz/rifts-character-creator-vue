const Psionic = require('../Psionic');

class SenseTime extends Psionic {
    constructor() {
        super();
        this.name = 'Sense Time';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '15 minutes per level of experience.';
        this.cost = '2 I.S.P.';
    }
}

module.exports = SenseTime;