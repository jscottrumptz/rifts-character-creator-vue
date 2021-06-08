const Skill = require('../Skill');

class Forgery extends Skill {
    constructor() {
        super();
        this.name = `Forgery`;
        this.group = `Espionage`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The techniques of making false copies of official documents, signatures, passports, I.D. cards, and other printed material. The forger must have an original or photocopy to work from in order to make an accurate copy.`;
        this.reqOCCGroup = ``;
        this.penalty = `Skilled forgers can recognize other counterfeits, but with a skill penalty of -10%.`;
        this.bonus = `+10% to this skill if Art [Technical] is also taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `20`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'art') {
                this.skillBonus = this.skillBonus + 10;
            }
        })

    }
}

module.exports = Forgery;