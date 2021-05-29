const Skill = require('../Skill');

class SingCommunication extends Skill {
    constructor() {
        super();
        this.name = `Sing`;
        this.group = `Communication`;
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
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = SingCommunication;