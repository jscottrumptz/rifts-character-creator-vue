const Skill = require('../Skill');

class WaterScooters extends Skill {
    constructor() {
        super();
        this.name = `Water Scooters`;
        this.group = `Pilot`;
        this.isSecondary = false;
        this.description = `The knowledge and skill of piloting all types of one- and two-man water sleds (underwater) and jet skis (surface sleds).`;
        this.perLvl = 5;
        this.base = 50;
    }
}

module.exports = WaterScooters;