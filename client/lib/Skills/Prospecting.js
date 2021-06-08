const Skill = require('../Skill');

class Prospecting extends Skill {
    constructor() {
        super();
        this.name = `Prospecting`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The character can recognize and evaluate precious and semi-precious metals (gold, fool's gold, silver, bronze, copper, etc.) in their natural ore appearance and as refined and polished jewelry. In addition, the character has a good idea of where to look for such mineral deposits, and the fundamentals of 'panning' for gold and the general knowledge of mining and how to use various types of simple mining equipment.

Furthermore, the character can identify and appraise the value of precious metals (silver, gold, etc.) and stones (diamonds, rubies, etc.) and to identify fakes, but at a penalty of -10%. A failed roll (by the DM) means the character can not tell whether or not the item is fake or real, or they grossly under or overestimates its value.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Gemology [Technical] is also taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `20`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'gemology') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = Prospecting;