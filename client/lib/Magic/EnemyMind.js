const Spell = require('../Spell');

class EnemyMind extends Spell {
    constructor() {
        super();
        this.name = 'Enemy Mind   ';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = EnemyMind;