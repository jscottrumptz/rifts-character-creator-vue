const Skill = require('../Skill');

class Truck extends Skill {
    constructor() {
        super();
        this.name = `Truck`;
        this.group = `Pilot`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `This skill specifically applies to driving large cargo and transport vehicles like eight- to sixteen-wheeled commercial trucks and multi-ton transports.`;
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

module.exports = Truck;