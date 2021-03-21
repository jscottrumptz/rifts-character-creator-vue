const Psionic = require('../Psionic');

class ImperviousToCold extends Psionic {
    constructor() {
        super();
        this.name = 'Impervious to Cold';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = '20 minutes per level of experience.';
        this.cost = '2 I.S.P.';
    }
}

module.exports = ImperviousToCold;