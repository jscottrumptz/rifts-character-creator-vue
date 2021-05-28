const Skill = require('../Skill');

class ComputerProgramming extends Skill {
    constructor() {
        super();
        this.name = `Computer Programming`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The advanced computer knowledge that includes designing, programming, debugging, and testing computer programs and software.

Hacking is possible but at a penalty of -40% (unless the character has the Computer Hacking skill)`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Computer Operation and Literacy.`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = ComputerProgramming;