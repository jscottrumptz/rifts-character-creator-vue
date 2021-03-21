const Psionic = require('../Psionic');

class Telemechanics extends Psionic {
    constructor() {
        super();
        this.name = 'Telemechanics';
        this.group = 'Super';
        this.range = 'By touch or up to 5 feet ( 1.5 m) away.';
        this.duration = '10 minutes plus 2 minutes per level of psionic.';
        this.cost = '10 I.S.P.';
    }
}

module.exports = Telemechanics;