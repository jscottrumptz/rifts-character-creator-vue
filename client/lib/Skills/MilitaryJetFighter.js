const Skill = require('../Skill');

class MilitaryJetFighter extends Skill {
    constructor() {
        super();
        this.name = `Military: Jet Fighter`;
        this.group = `Pilot`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The training includes flying, manoeuvering, aerial combat strategies, and typical fighter jet weapon systems.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = MilitaryJetFighter;