const Skill = require('../Skill');

class ZoologySpecialized extends Skill {
    constructor() {
        super();
        this.name = `Zoology: Specialized`;
        this.group = `Science`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The specialized knowledge of a specific type/species of animal: apes, snakes, bovines, etc.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Zoology [Science]`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `50`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['zoology']
    }
}

module.exports = ZoologySpecialized;