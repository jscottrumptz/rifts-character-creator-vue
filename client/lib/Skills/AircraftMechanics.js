const Skill = require('../Skill');

class AircraftMechanics extends Skill {
    constructor() {
        super();
        this.name = `Aircraft Mechanics`;
        this.group = `Mechanical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The understanding of aerodynamics and the training to repair, rebuild, modify, and redesign conventional aircraft, including propeller types, jets, helicopters, hovercycles, rocket bikes, and hovercraft. Work on military aircraft is limited to body work unless the character also has the Weapon Systems skill. Experimental aircraft and spacecraft are not included. Working on the wings and flight systems of power armour and robots is very different from true aircraft and suffers a -40% skill penalty. However, the character can assist an engineer or robotics specialist by following their instructions with only a -15% skill penalty.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = AircraftMechanics;