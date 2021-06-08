const Skill = require('../Skill');

class FieldArmorerAndMunitions extends Skill {
    constructor() {
        super();
        this.name = `Field Armourer & Munitions`;
        this.group = `Military`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `This is a somewhat simplistic and basic version of the Weapons Engineer as it applies to infantry weapons. The character can maintain, unjam, modify, mount, reload ammunition, recharge E-Clips, and figure out most small arms (conventional and energy pistols and rifles). The armourer can repair all types of pistols and rifles, repair minor damage to body armour (20 M.D.C. maximum), adjust targeting sights, use and repair optical enhancements, reload missiles and ammo drums, install/mount machineguns and rocket launchers on a vehicle, as well as sharpen blades, make arrows and arrowheads, make horseshoes, and basic metal items (nails, spikes, chain links, etc.). A major overhaul is not possible.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `Automatically gains the Basic Mechanics skill at 30%, +5% per level as part of this skill (if at creation, the player may repick a selection if Basic Mechanics was already chosen and the starting percentiles were not higher, for that skill selection).`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = FieldArmorerAndMunitions;