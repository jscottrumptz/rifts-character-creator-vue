const Spell = require('../Spell');

class SpeedWeapon extends Spell {
    constructor() {
        super();
        this.name = 'Speed Weapon   ';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = SpeedWeapon;