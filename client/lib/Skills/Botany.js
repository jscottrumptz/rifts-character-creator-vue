const Skill = require('../Skill');

class Botany extends Skill {
    constructor() {
        super();
        this.name = `Botany`;
        this.group = `Science`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The plants, their categories and functions, are studied extensively. Characters will know the basics of cross-fertilization and germination, as well as growing experimental plants.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Botany;