const Skill = require('../Skill');

class WeaponsEngineer extends Skill {
    constructor() {
        super();
        this.name = `Weapons Engineer`;
        this.group = `Mechanical`;
        this.isSecondary = `false`;
        this.note = ` -30% when working on alien or experimental weapon systems or vehicles.`;
        this.description = `The complete understanding of military class weapon systems, cannons, recoilless rifles, launch systems, missiles, rockets, heavy energy weapons, and their incorporation into military vehicles. The character can handle, maintain, repair, unjam, clean, modify, mount, and figure our most weapon systems and power supplies, and recharge batteries and E-Clips. They can repair an assault rifle, handle heavy weapons and install a missile system into a vehicle or a suitcase launcher. The engineer can also add and repair armour and is an expert welder.

This skill is usually reserved for Operators, military engineers, and military contractors.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 Strike (when using heavy weapons or vehicular weapon systems).`;
        this.required = `Mechanical Engineering.`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WeaponsEngineer;