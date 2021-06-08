const Skill = require('../Skill');

class MotorcyclesAndSnowmobiles extends Skill {
    constructor() {
        super();
        this.name = `Motorcycles & Snowmobiles`;
        this.group = `Pilot`;
        this.isSecondary = true;
        this.description = `The skill includes the piloting of all two- and three-wheeled vehicles such as motorcycles of all types, dirt bikes, and mopeds, as well as snowmobiles, jet sleds, miniature-ATVs, and other scaled-down vehicles.`;
        this.perLvl = 4;
        this.base = 60;
    }
}

module.exports = MotorcyclesAndSnowmobiles;