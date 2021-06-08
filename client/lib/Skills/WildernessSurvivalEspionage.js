const Skill = require('../Skill');

class WildernessSurvivalEspionage extends Skill {
    constructor() {
        super();
        this.name = `Wilderness Survival`;
        this.group = `Espionage`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `Techniques for living off the land, getting water, food, shelter, and help when stranded in wild forests, deserts, or mountains. Characters without this skill will not be able to stay healthy for more than a few days in the wilderness once their supplies run out.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Outdoorsmanship [Physical] is also taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'outdoorsmanship') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = WildernessSurvivalEspionage;