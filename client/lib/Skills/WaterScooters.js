const Skill = require('../Skill');

class WaterScooters extends Skill {
    constructor() {
        super();
        this.name = `Water Scooters`;
        this.group = `Pilot`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `
The knowledge and skill of piloting all types of one- and two-man water sleds (underwater) and jet skis (surface sleds).`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `50`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = WaterScooters;