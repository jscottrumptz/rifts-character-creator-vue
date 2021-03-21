const Psionic = require('../Psionic');

class SeeTheInvisible extends Psionic {
    constructor() {
        super();
        this.name = 'See the Invisible';
        this.group = 'Sensitive';
        this.range = '120 feet (36.6 m); double on a ley line.';
        this.duration = 'One minute per each level of experience.';
        this.cost = '4 I.S.P.';
    }
}

module.exports = SeeTheInvisible;