const Skill = require('../Skill');

class Dance extends Skill {
    constructor() {
        super();
        this.name = `Dance`;
        this.group = `Domestic`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The practiced skill in the art of dancing, the character is especially smooth and graceful, a joy to dance with. Can learn new dance steps/moves much more quickly than somebody who can not dance.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = `10`;
        this.takeTwice = `true`;
    }
}

module.exports = Dance;