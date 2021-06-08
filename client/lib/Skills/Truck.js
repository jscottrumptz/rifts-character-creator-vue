const Skill = require('../Skill');

class Truck extends Skill {
    constructor() {
        super();
        this.name = `Truck`;
        this.group = `Pilot`;
        this.isSecondary = false;
        this.description = `This skill specifically applies to driving large cargo and transport vehicles like eight- to sixteen-wheeled commercial trucks and multi-ton transports.`;
        this.perLvl = 4;
        this.base = 40;
    }
}

module.exports = Truck;