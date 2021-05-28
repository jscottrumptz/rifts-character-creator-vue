const Skill = require('../Skill');

class DemolitionsDisposal extends Skill {
    constructor() {
        super();
        this.name = `Demolitions Disposal`;
        this.group = `Military`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The skill to safely defuse unexploded mines,bombs, explosive traps, dud artillery rounds, dud explosive charges, or any other type of explosive device.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `3`;
        this.baseTwo = ``;
        this.base = `60`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = DemolitionsDisposal;