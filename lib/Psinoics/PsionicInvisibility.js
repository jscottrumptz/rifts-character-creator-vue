const Psionic = require('../Psionic');

class PsionicInvisibility extends Psionic {
    constructor() {
        super();
        this.name = 'Psionic Invisibility';
        this.group = 'Super';
        this.range = 'Line of sight or 100 foot (30.5 m) radius.';
        this.duration = 'One minute per level of experience.';
        this.cost = '10 I.S.P.';
    }
}

module.exports = PsionicInvisibility;