const Skill = require('../Skill');

class WeaponSystems extends Skill {
    constructor() {
        super();
        this.name = `Weapon Systems`;
        this.group = `Pilot Related`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The complete understanding of weapon units and systems incorporated into military vehicles, power armour, and robot vehicles. It includes lasers, particle beams, rail guns, missile and grenade launchers, turrets, and vehicle/robot weapon systems. Does not include hand held weapons.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to strike when using these types of weapons.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WeaponSystems;