const Skill = require('../Skill');

class MathematicsBasic extends Skill {
    constructor() {
        super();
        this.name = `Mathematics: Basic`;
        this.group = `Science`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The knowledge of basic math, including the ability to count, addition, subtraction, multiplication, division, and fractions.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `45`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = MathematicsBasic;