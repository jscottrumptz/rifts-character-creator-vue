const Skill = require('../Skill');

class Art extends Skill {
    constructor() {
        super();
        this.name = `Art`;
        this.group = `Technical`;
        this.isSecondary = true;
        this.description = `The ability to draw, paint and/or sculpt or do craft work. Selection as an occupation related skill indicates a professional quality, while selection as a secondary skill indicates a talented amateur.`;
        this.bonus = `+10% to Forgery [Espionage] skill if this skill is taken.`;
        this.perLvl = 5;
        this.base = 35;
    }
}

module.exports = Art;