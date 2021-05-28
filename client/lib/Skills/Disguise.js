const Skill = require('../Skill');

class Disguise extends Skill {
    constructor() {
        super();
        this.name = `Disguise`;
        this.group = `Espionage`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The character knows how to apply make-up, wigs, skin putty, dyes, and other special effects in order to alter their appearance or that of somebody else.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% Undercover Ops.
+5% Impersonation.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Disguise;