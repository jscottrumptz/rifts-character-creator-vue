const Skill = require('../Skill');

class FirstAid extends Skill {
    constructor() {
        super();
        this.name = `First Aid`;
        this.group = `Medical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The rudimentary medical treatment which includes how to bandage wounds, stop bleeding, splint broken limbs, administer artificial respiration (CPR), as well as use antiseptics and common anti-inflammatory drugs and painkillers.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `45`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = FirstAid;