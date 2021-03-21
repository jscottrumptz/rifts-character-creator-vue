const Psionic = require('../Psionic');

class PresenceSense extends Psionic {
    constructor() {
        super();
        this.name = 'Presence Sense';
        this.group = 'Sensitive';
        this.range = '120 feet (36.6 m) area.';
        this.duration = '2 minutes ( 8 me lees) per level of experience.';
        this.cost = '4 I.S.P.';
    }
}

module.exports = PresenceSense;