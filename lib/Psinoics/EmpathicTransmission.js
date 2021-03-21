const Psionic = require('../Psionic');

class EmpathicTransmission extends Psionic {
    constructor() {
        super();
        this.name = 'Empathic Transmission';
        this.group = 'Super';
        this.range = '60 feet ( 18.3 m).';
        this.duration = '2D6 minutes. ';
        this.cost = '6 I.S.P.';
    }
}

module.exports = EmpathicTransmission;