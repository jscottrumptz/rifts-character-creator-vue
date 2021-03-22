const Psionic = require('../Psionic');

class DeadenPain extends Psionic {
    constructor() {
        super();
        this.name = 'Deaden Pain';
        this.group = 'Healing'
        this.description = `    The ability to deaden pain can be used as a painkiller which temporarily negates existing pain or as an anesthetic to be used for surgery.`
        this.range = 'Immediate proximity, touch or within 3 feet (0.9 m).';
        this.duration = 'One hour per level of experience.';
        this.cost = '4 I.S.P';
        this.lengthOfTrance = 'Two minutes (8 melee rounds).';
    }
}

module.exports = DeadenPain;