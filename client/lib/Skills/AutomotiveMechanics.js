const Skill = require('../Skill');

class AutomotiveMechanics extends Skill {
    constructor() {
        super();
        this.name = `Automotive Mechanics`;
        this.group = `Mechanical`;
        this.isSecondary = true;
        this.description = `The ability to repair, rebuild, modify, and redesign conventional vehicles with internal combustion (gas/petrol) engines. It also includes body work, turbine engines, methanol, ethanol, and diesel truck engines. Working on hover jet systems for ground vehicles is possible but at a -20% skill penalty;-40% working on reactor engines and advanced power supplies.`;
        this.perLvl = 5;
        this.base = 25;
    }
}

module.exports = AutomotiveMechanics;