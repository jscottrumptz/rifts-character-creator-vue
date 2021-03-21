const Psionic = require('../Psionic');

class MindBlockAutoDefense extends Psionic {
    constructor() {
        super();
        this.name = 'Mind Block Auto-Defense';
        this.group = 'Super';
        this.range = 'Self.';
        this.duration = 'Special.';
        this.cost = 'Special.';
    }
}

module.exports = MindBlockAutoDefense;