const Skill = require('../Skill');

class BoatsSailTypes extends Skill {
    constructor() {
        super();
        this.name = `Boats: Sail Types`;
        this.group = `Pilot`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The skill with small sail boats and medium-sized sailing yachts, and fishing boats.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `60`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = BoatsSailTypes;