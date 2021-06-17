const Spell = require('../Spell');

class PowerWeapon extends Spell {
    constructor() {
        super();
        this.name = 'Power Weapon';
        this.group = 'Invocation';
        this.level = 'Eight';
    }
}

module.exports = PowerWeapon;