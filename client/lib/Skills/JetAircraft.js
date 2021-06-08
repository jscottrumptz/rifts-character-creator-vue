const Skill = require('../Skill');

class JetAircraft extends Skill {
    constructor() {
        super();
        this.name = `Jet Aircraft`;
        this.group = `Pilot`;
        this.isSecondary = false;
        this.description = `The skill includes large and small commercial transport jets.`;
        this.perLvl = 4;
        this.base = 40;
    }
}

module.exports = JetAircraft;