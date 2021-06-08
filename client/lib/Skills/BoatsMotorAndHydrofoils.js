const Skill = require('../Skill');

class BoatsMotorAndHydrofoils extends Skill {
    constructor() {
        super();
        this.name = `Boats: Motor & Hydrofoils`;
        this.group = `Pilot`;
        this.isSecondary = true;
        this.description = `These include all types of small motor-driven boats, racing craft, and yachts.`;
        this.perLvl = 5;
        this.base = 55;
    }
}

module.exports = BoatsMotorAndHydrofoils;