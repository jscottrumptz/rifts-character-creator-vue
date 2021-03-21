const Psionic = require('../Psionic');

class TotalRecall extends Psionic {
    constructor() {
        super();
        this.name = 'Total Recall';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = 'Permanent.';
        this.cost = '2 I.S.P.';
    }
}

module.exports = TotalRecall;