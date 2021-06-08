const Skill = require('../Skill');

class MilitaryCombatHelicopter extends Skill {
    constructor() {
        super();
        this.name = `Military: Combat Helicopter`;
        this.group = `Pilot`;
        this.isSecondary = false;
        this.description = `The specialized skill required to fly all types of helicopters including combat choppers, and the ability to operate their related weapon systems.`;
        this.perLvl = 3;
        this.base = 52;
    }
}

module.exports = MilitaryCombatHelicopter;