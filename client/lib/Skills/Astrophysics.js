const Skill = require('../Skill');

class Astrophysics extends Skill {
    constructor() {
        super();
        this.name = `Astrophysics`;
        this.group = `Science`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The knowledge of stellar astronomy and how it relates to nuclear physics, quantum mechanics, relativity, and other explanations for the creation of deep space phenomena, like quasars and black holes.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Mathematics: Advanced [Science].`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['mathematicsAdvanced']
    }
}

module.exports = Astrophysics;