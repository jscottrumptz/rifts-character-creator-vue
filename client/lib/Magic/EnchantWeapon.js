const Spell = require('../Spell');

class EnchantWeapon extends Spell {
    constructor() {
        super();
        this.name = 'Enchant Weapon';
        this.group = 'Invocation';
        this.level = 'Fifteen';
    }
}

module.exports = EnchantWeapon;