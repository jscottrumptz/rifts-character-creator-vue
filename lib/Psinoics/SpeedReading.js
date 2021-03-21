const Psionic = require('../Psionic');

class SpeedReading extends Psionic {
    constructor() {
        super();
        this.name = 'Speed Reading';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '3 minutes per level of experience.';
        this.cost = '2 I.S.P.';
    }
}

module.exports = SpeedReading;