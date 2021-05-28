const Skill = require('../Skill');

class Boxing extends Skill {
    constructor() {
        super();
        this.name = `Boxing`;
        this.group = `Physical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The classic art of fighting with fists. Training helps build the body and reflexes.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 additional attack per melee round.
+2 Parry.
+2 Dodge.
+1 Roll with Punch/Impact.
+2 P.S.
+3D6 S.D.C.
Natural 20 punch (even undeclared) automatically causes knockout on opponent. (victim unconscious for 1D6 melees).`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Boxing;