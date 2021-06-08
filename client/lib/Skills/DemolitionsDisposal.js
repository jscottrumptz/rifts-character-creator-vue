const Skill = require('../Skill');

class DemolitionsDisposal extends Skill {
    constructor() {
        super();
        this.name = `Demolitions Disposal`;
        this.group = `Military`;
        this.isSecondary = false;
        this.description = `The skill to safely defuse unexploded mines,bombs, explosive traps, dud artillery rounds, dud explosive charges, or any other type of explosive device.`;
        this.perLvl = 3;
        this.base = 60;
    }
}

module.exports = DemolitionsDisposal;