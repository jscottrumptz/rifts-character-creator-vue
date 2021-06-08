const Skill = require('../Skill');

class MilitaryJetFighter extends Skill {
    constructor() {
        super();
        this.name = `Military: Jet Fighter`;
        this.group = `Pilot`;
        this.isSecondary = false;
        this.description = `The training includes flying, manoeuvring, aerial combat strategies, and typical fighter jet weapon systems.`;
        this.perLvl = 4;
        this.base = 40;
    }
}

module.exports = MilitaryJetFighter;