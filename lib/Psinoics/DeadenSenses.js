const Psionic = require('../Psionic');

class DeadenSenses extends Psionic {
    constructor() {
        super();
        this.name = 'Deaden Senses';
        this.group = 'Physical';
        this.range = '160 feet (48.8 m); line of sight.';
        this.duration = '2D6 minutes; roll for random determination of duration.';
        this.cost = '4 I.S.P.';
    }
}

module.exports = DeadenSenses;