const Skill = require('../Skill');

class WPQuickDraw extends Skill {
    constructor() {
        super();
        this.name = `W.P. Quick Draw`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = true;
        this.description = `This is a practiced move in which the character gets an initiative bonus to draw and fire or throw their weapons much faster at the first sign of danger. Note that characters with a high P.P. benefit most from this skill.`;
        this.bonus = `P.P.  ≤ 17 = +1 initiative.
P.P. 18-23 = +2 initiative.
P.P. 24-30 = +3 initiative.
P.P.  ≥ 31 = +4 initiative.`;
    }
}

module.exports = WPQuickDraw;