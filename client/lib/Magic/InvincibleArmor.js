const Spell = require('../Spell');

class InvincibleArmor extends Spell {
    constructor() {
        super();
        this.name = 'Invincible Armor';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = InvincibleArmor;