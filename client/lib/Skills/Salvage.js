const Skill = require('../Skill');

class Salvage extends Skill {
    constructor() {
        super();
        this.name = `Salvage`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The skill allows characters to find, identify, pick up, strip down, evaluate, and possibly sell, any debris, wreckage and junk that they can locate. They can also strip a piece of wrecked machinery for spare parts and may even be able to make something work again, given time, enough parts and the right skills.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `35`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Salvage;