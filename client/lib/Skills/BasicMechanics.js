const Skill = require('../Skill');

class BasicMechanics extends Skill {
    constructor() {
        super();
        this.name = `Basic Mechanics`;
        this.group = `Mechanical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The general familiarity and understanding of basic mechanics. This character can fix a toaster, repair a bicycle, replace a belt on a motor, repair or replace a switch, handle, or knob, replace a spark plug, change oil, assist in automobile repairs, maintain machinery, read a schematic, and similar fundamental tasks.`;
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

module.exports = BasicMechanics;