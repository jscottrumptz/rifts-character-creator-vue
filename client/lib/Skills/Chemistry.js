const Skill = require('../Skill');

class Chemistry extends Skill {
    constructor() {
        super();
        this.name = `Chemistry`;
        this.group = `Science`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The basic understanding of chemical principles and formulae. Characters know enough chemical laboratory procedures for analyzing and synthesizing chemical compounds to act as competent assistants.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Chemistry;