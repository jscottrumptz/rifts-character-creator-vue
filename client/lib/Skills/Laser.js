const Skill = require('../Skill');

class Laser extends Skill {
    constructor() {
        super();
        this.name = `Laser`;
        this.group = `Communication`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `This skill provides the character with an in depth knowledge of advanced electronics, laser communication systems and fiber optic communications.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Radio: Basic, Electrical Engineer, Computer Operation`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Laser;