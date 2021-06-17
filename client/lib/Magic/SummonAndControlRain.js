const Spell = require('../Spell');

class SummonAndControlRain extends Spell {
    constructor() {
        super();
        this.name = 'Summon & Control Rain';
        this.group = 'Invocation';
        this.level = 'Twelve';
    }
}

module.exports = SummonAndControlRain;