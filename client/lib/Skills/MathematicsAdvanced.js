const Skill = require('../Skill');

class MathematicsAdvanced extends Skill {
    constructor() {
        super();
        this.name = `Mathematics: Advanced`;
        this.group = `Science`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The knowledge of all basic and advanced mathematics, including algebra, geometry, trigonometry, calculus, and techniques for using advanced mathematical formulae.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Mathematics: Basic.`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `45`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['mathematicsBasic']
    }
}

module.exports = MathematicsAdvanced;