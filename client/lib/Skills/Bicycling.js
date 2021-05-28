const Skill = require('../Skill');

class Bicycling extends Skill {
    constructor() {
        super();
        this.name = `Bicycling`;
        this.group = `Pilot`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The skill means the character can ride over rough terrain, reach twice normal running speed and travel cross-country at normal running speed, and perform tricks and jumps (roll skill level: failed roll means a crash) on a bike. Maximum speed can be maintained for a time equal to the P.E.x5 minutes. Skill also includes basic maintenance/repairs.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `44`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Bicycling;