const Psionic = require('../Psionic');

class MindBlockPhysical extends Psionic {
    constructor() {
        super();
        this.name = 'Mind Block';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = '10 minutes per level of experience.';
        this.cost = '4 I.S.P. (per each duration period).';
    }
}

module.exports = MindBlockPhysical;