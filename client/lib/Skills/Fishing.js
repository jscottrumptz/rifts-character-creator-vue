const Skill = require('../Skill');

class Fishing extends Skill {
    constructor() {
        super();
        this.name = `Fishing`;
        this.group = `Domestic`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The fundamental methods and enjoyment of the relaxing sport of fishing. Areas of knowledge include the use of lures,bait, poles, hooks, lines, and the cleaning and preparation of fish for eating. Also includes a basic knowledge of freshwater fish, their habits, behaviour, and what they taste like prepared for eating.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `40`;
        this.takeTwiceBonus = `+10%`;
        this.takeTwice = `true`;
    }

    rollSecondary() {
        if (this.takenTwice) {
            this.skillBonus = this.skillBonus + 10;
        }
    }
}

module.exports = Fishing;