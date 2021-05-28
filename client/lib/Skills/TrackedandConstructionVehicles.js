const Skill = require('../Skill');

class TrackedandConstructionVehicles extends Skill {
    constructor() {
        super();
        this.name = `Tracked & Construction Vehicles`;
        this.group = `Pilot`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `This skill includes landcrawlers, half-tracks, light tanks, and big-wheeled heavy construction vehicles and earthmovers like bulldozers, steam shovels/excavators, scrapers, graders, tractors, loaders, backhoes, dump trucks, haulers, etc.

Can pilot tanks and APC's but at -15% penalty and -1 attack per melee round.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = TrackedandConstructionVehicles;