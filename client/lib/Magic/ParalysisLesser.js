const Spell = require('../Spell');

class ParalysisLesser extends Spell {
    constructor() {
        super();
        this.name = 'Paralysis: Lesser';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = ParalysisLesser;