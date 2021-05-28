const Skill = require('../Skill');

class Gemology extends Skill {
    constructor() {
        super();
        this.name = `Gemology`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The skill in identifying and appraising the value of precious metals (silver, gold, etc.) and stones (jade, emerald, ruby, sapphire, diamond, etc.). This ability also enables the person to identify fakes, but at a penalty of -10%. A failed roll (by the DM) means the character can not tell whether the item is genuine or not, or its value is grossly under or overestimated.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to Prospecting`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Gemology;