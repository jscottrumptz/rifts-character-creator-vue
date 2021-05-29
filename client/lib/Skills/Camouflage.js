const Skill = require('../Skill');

class Camouflage extends Skill {
    constructor() {
        super();
        this.name = `Camouflage`;
        this.group = `Military`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The skill of concealing a fixed base position, vehicle, equipment, or individual, using natural and/or artificial materials. A fair amount of time is involved in the preparation of a larger position. Large cargo nets, cut branches or underbrush are used most often in camouflage. This skills also used to conceal traps.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `20`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Camouflage;