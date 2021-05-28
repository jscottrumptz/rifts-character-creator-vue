const Skill = require('../Skill');

class ComputerHacking extends Skill {
    constructor() {
        super();
        this.name = `Computer Hacking`;
        this.group = `Rogue`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `This skill is similar to computer programming, however, the emphasis of this skill is breaking computer access codes to gain illegal access to other computer systems ans steal or sabotage its data. The character is an expert in tracing computer data, bypassing defense systems, and breaking ('hacking') codes.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Literacy, Computer Operation, Computer Programming, and at least Mathematics: Basic.`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `20`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = ComputerHacking;