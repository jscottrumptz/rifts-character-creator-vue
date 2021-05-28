const Skill = require('../Skill');

class ComputerOperation extends Skill {
    constructor() {
        super();
        this.name = `Computer Operation`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The knowledge of how computers work, along with the skills to operate peripherals like keyboards, printers, and modems. The character can follow computer directions, enter and retrieve information, install programs, games, and software, use the web/internet and similar basic computer operations. Does not include repair, programming, or hacking.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Literacy.`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = ComputerOperation;