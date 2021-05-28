const Skill = require('../Skill');

class BoatsMotorandHydrofoils extends Skill {
    constructor() {
        super();
        this.name = `Boats: Motor & Hydrofoils`;
        this.group = `Pilot`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `These include all types of small motor-driven boats, racing craft, and yachts.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `55`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = BoatsMotorandHydrofoils;