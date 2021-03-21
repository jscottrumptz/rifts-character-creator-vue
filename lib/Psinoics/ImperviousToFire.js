const Psionic = require('../Psionic');

class ImperviousToFire extends Psionic {
    constructor() {
        super();
        this.name = 'Impervious to Fire';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = '3 minutes per level of experience.';
        this.cost = '4 I.S.P.';
    }
}

module.exports = ImperviousToFire;