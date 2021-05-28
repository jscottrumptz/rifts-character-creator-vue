const Skill = require('../Skill');

class Biology extends Skill {
    constructor() {
        super();
        this.name = `Biology`;
        this.group = `Science`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The basic understanding of cells, anatomy, physiology, evolution, and genetics. The character will know how to use a microscope, cultivate bacteria, and how to dissect, study, evaluate, and classify new organisms.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Biology;