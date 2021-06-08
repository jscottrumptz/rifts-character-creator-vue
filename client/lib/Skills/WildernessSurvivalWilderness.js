const Skill = require('../Skill');

class WildernessSurvivalWilderness extends Skill {
    constructor() {
        super();
        this.name = `Wilderness Survival`;
        this.group = `Wilderness`;
        this.isSecondary = true;
        this.description = `Techniques for living off the land, getting water, food, shelter, and help when stranded in wild forests, deserts, or mountains. Characters without this skill will not be able to stay healthy for more than a few days in the wilderness once their supplies run out.`;
        this.bonus = `+5% to this skill if Outdoorsmanship [Physical] is also taken.`;
        this.perLvl = 5;
        this.base = 30;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'outdoorsmanship') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = WildernessSurvivalWilderness;