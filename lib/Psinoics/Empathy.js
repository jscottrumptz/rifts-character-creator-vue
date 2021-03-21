const Psionic = require('../Psionic');

class Empathy extends Psionic {
    constructor() {
        super();
        this.name = 'Empathy';
        this.group = 'Sensitive';
        this.range = '100 foot (30.5 m) area.';
        this.duration = '2 minutes (8 melees) per level of experience.';
        this.cost = '4 I.S.P.';
    }
}

module.exports = Empathy;