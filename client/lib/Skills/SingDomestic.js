const Skill = require('../Skill');

class SingDomestic extends Skill {
    constructor() {
        super();
        this.name = `Sing`;
        this.group = `Domestic`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The simple ability to read music and carry a pleasant tune.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Seduction [Rogue] is taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `35`;
        this.takeTwiceBonus = `+10%`;
        this.takeTwice = `true`;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'seduction') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
        if (this.takenTwice) {
            this.skillBonus = this.skillBonus + 10;
        }
    }
}

module.exports = SingDomestic;