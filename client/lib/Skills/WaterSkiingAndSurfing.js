const Skill = require('../Skill');

class WaterSkiingAndSurfing extends Skill {
    constructor() {
        super();
        this.name = `Water Skiing & Surfing`;
        this.group = `Pilot`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `All water skiing techniques,methods, and use of most types of recreational forms of 'riding the waves,' including skis, water jet scooters, water boards, surfboards, and sailboards.`;
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

module.exports = WaterSkiingAndSurfing;