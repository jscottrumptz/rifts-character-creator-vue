const Skill = require('../Skill');

class Cook extends Skill {
    constructor() {
        super();
        this.name = `Cook`;
        this.group = `Domestic`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The skill in selecting, planning, and preparing meals. A cooking roll failure means that the food is not properly prepared. It is edible but tastes lousy (greasy, too spicy, sickeningly sweet, sour, burnt, leaves a bad aftertaste in the mouth, etc.).`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `35`;
        this.takeTwiceBonus = `10`;
        this.takeTwice = `true`;
    }
}

module.exports = Cook;