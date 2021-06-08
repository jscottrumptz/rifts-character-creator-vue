const Skill = require('../Skill');

class HerdingCattle extends Skill {
    constructor() {
        super();
        this.name = `Herding Cattle`;
        this.group = `Cowboy`;
        this.isSecondary = false;
        this.description = `The techniques and methods of leading, directing and controlling cattle in a contained and orderly herd. Also includes keeping animals calm, basic care and feeding, how to tend cattle, recognize disease and illness, give birth to young, how to survive and regain control of a stampede, gather strays, how best to pen ad corral livestock, mend fences, etc.`;
        this.bonus = `+5% to this skill if Zoology [Science] is also taken.`;
        this.perLvl = 5;
        this.base = 30;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'zoology') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = HerdingCattle;