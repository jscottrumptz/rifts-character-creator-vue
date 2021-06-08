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
        this.bonus = `+5% to the Cardsharp [Rogue] skill if this skill is taken.
+5% to this skill if Seduction [Rogue] is taken.
+5% to the Concealment skill [Rogue] skill if this skill is taken.
+5% to the Pick Pockets skill [Rogue] skill if this skill is taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `20`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'seduction') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = Palming;