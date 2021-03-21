const Psionic = require('../Psionic');

class EctoplasmicDisguise extends Psionic {
    constructor() {
        super();
        this.name = 'Ectoplasmic Disguise';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = '10 minutes per level of experience.';
        this.cost = '12 I.S.P.';
    }
}

module.exports = EctoplasmicDisguise;