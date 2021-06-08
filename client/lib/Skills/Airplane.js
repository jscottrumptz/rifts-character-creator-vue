const Skill = require('../Skill');

class Airplane extends Skill {
    constructor() {
        super();
        this.name = `Airplane`;
        this.group = `Pilot`;
        this.isSecondary = false;
        this.description = `The skill includes old propeller, single and twin engine types.`;
        this.perLvl = 4;
        this.base = 50;
    }
}

module.exports = Airplane;