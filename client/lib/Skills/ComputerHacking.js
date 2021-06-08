const Skill = require('../Skill');

class ComputerHacking extends Skill {
    constructor() {
        super();
        this.name = `Computer Hacking`;
        this.group = `Rogue`;
        this.isSecondary = false;
        this.description = `This skill is similar to computer programming, however, the emphasis of this skill is breaking computer access codes to gain illegal access to other computer systems ans steal or sabotage its data. The character is an expert in tracing computer data, bypassing defense systems, and breaking ('hacking') codes.`;
        this.bonus = `+5% to this skill if Artificial Intelligence [Science] is also taken.`;
        this.required = `Computer Programming [Technical] and at least Mathematics: Basic [Science].`;
        this.perLvl = 5;
        this.base = 20;
        this.preq = ['computerProgramming', 'mathematics']
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'artificialIntelligence') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = ComputerHacking;