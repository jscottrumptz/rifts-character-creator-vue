const Psionic = require('../Psionic');

class ImperviousToCold extends Psionic {
    constructor() {
        super();
        this.name = 'Impervious to Cold';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = '20 minutes per level of experience.';
        this.cost = '2 I.S.P.';
        this.lengthOfTrance = '1D4 melees for preparatory meditation.';
        this.description = `    A mind over matter discipline which enables the character to suffer absolutely no ill effects or discomfort from exposure to even extreme sub-zero freezing conditions.`;
    }
}

module.exports = ImperviousToCold;