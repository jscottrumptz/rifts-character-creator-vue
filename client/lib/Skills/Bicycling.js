const Skill = require('../Skill');

class Bicycling extends Skill {
    constructor() {
        super();
        this.name = `Bicycling`;
        this.group = `Pilot`;
        this.isSecondary = true;
        this.description = `The skill means the character can ride over rough terrain, reach twice normal running speed and travel cross-country at normal running speed, and perform tricks and jumps (roll skill level: failed roll means a crash) on a bike. Maximum speed can be maintained for a time equal to the P.E.x5 minutes. Skill also includes basic maintenance/repairs.`;
        this.perLvl = 4;
        this.base = 44;
    }
}

module.exports = Bicycling;