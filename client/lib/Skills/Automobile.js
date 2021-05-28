const Skill = require('../Skill');

class Automobile extends Skill {
    constructor() {
        super();
        this.name = `Automobile`;
        this.group = `Pilot`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The skill in automatic and manual transmission; includes dune buggies, jeeps, and small trucks.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `2`;
        this.baseTwo = ``;
        this.base = `60`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Automobile;