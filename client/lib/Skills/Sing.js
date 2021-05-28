const Skill = require('../Skill');

class Sing extends Skill {
    constructor() {
        super();
        this.name = `Sing`;
        this.group = `Domestic`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The simple ability to read music and carry a pleasant tune.`;
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

module.exports = Sing;