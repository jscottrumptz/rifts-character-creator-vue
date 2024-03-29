const Skill = require('../Skill');

class MathematicsBasic extends Skill {
    constructor() {
        super();
        this.name = `Mathematics: Basic`;
        this.group = `Science`;
        this.isSecondary = true;
        this.description = `The knowledge of basic math, including the ability to count, addition, subtraction, multiplication, division, and fractions.`;
        this.bonus = `+5% to this skill if Gambling: Standard [Rogue] is also taken.`;
        this.perLvl = 5;
        this.base = 45;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'gamblingStandard') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = MathematicsBasic;