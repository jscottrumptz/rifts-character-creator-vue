const Skill = require('../Skill');

class Dance extends Skill {
    constructor() {
        super();
        this.name = `Dance`;
        this.group = `Domestic`;
        this.isSecondary = true;
        this.description = `The practiced skill in the art of dancing, the character is especially smooth and graceful, a joy to dance with. Can learn new dance steps/moves much more quickly than somebody who can not dance.`;
        this.bonus = `+5% to this skill if Seduction [Rogue] is taken.`;
        this.perLvl = 5;
        this.base = 30;
        this.takeTwiceBonus = `+10%`;
        this.takeTwice = true;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'seduction') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = Dance;