const Skill = require('../Skill');

class Firefighting extends Skill {
    constructor() {
        super();
        this.name = `Firefighting`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The basic understanding of fire and how it works, breathes, and travels, as well as firefighting methods and techniques, rescue procedures, and the practiced use of firefighting tools, equipment, and gear.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Firefighting;