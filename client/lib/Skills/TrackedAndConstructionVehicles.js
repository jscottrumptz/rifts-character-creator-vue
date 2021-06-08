const Skill = require('../Skill');

class TrackedAndConstructionVehicles extends Skill {
    constructor() {
        super();
        this.name = `Tracked & Construction Vehicles`;
        this.group = `Pilot`;
        this.isSecondary = false;
        this.description = `This skill includes landcrawlers, half-tracks, light tanks, and big-wheeled heavy construction vehicles and earthmovers like bulldozers, steam shovels/excavators, scrapers, graders, tractors, loaders, backhoes, dump trucks, haulers, etc.

Can pilot tanks and APC's but at -15% penalty and -1 attack per melee round.`;
        this.perLvl = 4;
        this.base = 40;
    }
}

module.exports = TrackedAndConstructionVehicles;