const Psionic = require('../Psionic');

class StopBleeding extends Psionic {
    constructor() {
        super();
        this.name = 'Stop Bleeding';
        this.group = 'Healing';
        this.range = 'Self or other by touch.';
        this.duration = 'Indefinitely, as long as the healer keeps his hand on or near the injury and concentrates on stopping the bleeding. Four minutes per experience level of the psi-healer if the character uses this temporary tourniquet and leaves his patient to do other things.';
        this.cost = '2 for self, 4 for others.';
    }
}

module.exports = StopBleeding;