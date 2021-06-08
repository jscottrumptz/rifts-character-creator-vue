const Skill = require('../Skill');

class WaterSkiingAndSurfing extends Skill {
    constructor() {
        super();
        this.name = `Water Skiing & Surfing`;
        this.group = `Pilot`;
        this.isSecondary = true;
        this.description = `All water skiing techniques,methods, and use of most types of recreational forms of 'riding the waves,' including skis, water jet scooters, water boards, surfboards, and sailboards.`;
        this.perLvl = 4;
        this.base = 40;
    }
}

module.exports = WaterSkiingAndSurfing;