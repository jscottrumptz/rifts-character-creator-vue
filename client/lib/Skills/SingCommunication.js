const Skill = require('../Skill');

class SingCommunication extends Skill {
    constructor() {
        super();
        this.name = `Sing`;
        this.group = `Communication`;
        this.isSecondary = true;
        this.description = `The simple ability to read music and carry a pleasant tune.`;
        this.bonus = `+5% to this skill if Seduction [Rogue] is taken.`;
        this.perLvl = 5;
        this.base = 35;
        this.takeTwiceBonus = `+10%`;
        this.takeTwice = true;
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

module.exports = SingCommunication;