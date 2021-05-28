const Skill = require('../Skill');

class AerobicAthletics extends Skill {
    constructor() {
        super();
        this.name = `Aerobic Athletics`;
        this.group = `Physical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The type of aerobic exercise which builds the body, develops reflexes and grace, and teaches a very few basic self-defense moves.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 Disarm.
+1 Pull Punch.
+2D4 S.D.C.
+2 Kick damage.
Sense of Balance - 30%, +5% per level of experience.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = AerobicAthletics;