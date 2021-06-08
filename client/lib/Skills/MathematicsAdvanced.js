const Skill = require('../Skill');

class MathematicsAdvanced extends Skill {
    constructor() {
        super();
        this.name = `Mathematics: Advanced`;
        this.group = `Science`;
        this.isSecondary = true;
        this.description = `The knowledge of all basic and advanced mathematics, including algebra, geometry, trigonometry, calculus, and techniques for using advanced mathematical formulae.`;
        this.bonus = `+10% to the Astronomy & Navigation [Science] skill if this skill is taken.`;
        this.required = `Mathematics: Basic [Science].`;
        this.perLvl = 5;
        this.base = 45;
        this.preq = ['mathematicsBasic']
    }
}

module.exports = MathematicsAdvanced;