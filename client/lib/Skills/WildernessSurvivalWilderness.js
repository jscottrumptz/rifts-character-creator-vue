const Skill = require('../Skill');

class WildernessSurvivalWilderness extends Skill {
    constructor() {
        super();
        this.name = `Wilderness Survival`;
        this.group = `Wilderness`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `Techniques for living off the land, getting water, food, shelter, and help when stranded in wild forests, deserts, or mountains. Characters without this skill will not be able to stay healthy for more than a few days in the wilderness once their supplies run out.`;
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

module.exports = WildernessSurvivalWilderness;