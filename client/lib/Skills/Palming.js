const Skill = require('../Skill');

class Palming extends Skill {
    constructor() {
        super();
        this.name = `Palming`;
        this.group = `Rogue`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `This is simply the ability to pick up and seemingly make a small object, such as a coin, key, dagger, or playing card, vanish by concealing it in one's hand.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to Cardsharp skill.
+5% to Concealment skill.
+5% to Pick Pockets skill.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `20`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Palming;