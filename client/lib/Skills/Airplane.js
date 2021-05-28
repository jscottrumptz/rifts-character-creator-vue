const Skill = require('../Skill');

class Airplane extends Skill {
    constructor() {
        super();
        this.name = `Airplane`;
        this.group = `Pilot`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The skill includes old propeller, single and twin engine types.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `50`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Airplane;