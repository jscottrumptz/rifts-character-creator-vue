const Skill = require('../Skill');

class Automobile extends Skill {
    constructor() {
        super();
        this.name = `Automobile`;
        this.group = `Pilot`;
        this.isSecondary = true;
        this.description = `The skill in automatic and manual transmission; includes dune buggies, jeeps, and small trucks.`;
        this.perLvl = 2;
        this.base = 60;
    }
}

module.exports = Automobile;