const Skill = require('../Skill');

class MilitaryTanksAndApcs extends Skill {
    constructor() {
        super();
        this.name = `Military: Tanks & APCs`;
        this.group = `Pilot`;
        this.isSecondary = `false`;
        this.note = `Those with this skill can also pilot other types of 'tracked' vehicles.`;
        this.description = `Military vehicles often have unconventional controls and handle differently from conventional vehicles, especially the many ton, armoured combat vehicles such as tanks and armoured personnel carriers (APCs). Thus, special training is required to pilot them.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `36`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = MilitaryTanksAndApcs;