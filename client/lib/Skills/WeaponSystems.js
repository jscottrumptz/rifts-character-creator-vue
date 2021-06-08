const Skill = require('../Skill');

class WeaponSystems extends Skill {
    constructor() {
        super();
        this.name = `Weapon Systems`;
        this.group = `Pilot Related`;
        this.isSecondary = false;
        this.description = `The complete understanding of weapon units and systems incorporated into military vehicles, power armour, and robot vehicles. It includes lasers, particle beams, rail guns, missile and grenade launchers, turrets, and vehicle/robot weapon systems. Does not include hand held weapons.`;
        this.bonus = `+1 to strike when using these types of weapons.`;
        this.perLvl = 5;
        this.base = 40;
    }
}

module.exports = WeaponSystems;