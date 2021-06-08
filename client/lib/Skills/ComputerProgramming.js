const Skill = require('../Skill');

class ComputerProgramming extends Skill {
    constructor() {
        super();
        this.name = `Computer Programming`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The advanced computer knowledge that includes designing, programming, debugging, and testing computer programs and software.

Hacking is possible but at a penalty of -40% (unless the character has the Computer Hacking skill)`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Artificial Intelligence [Science] is also taken.`;
        this.required = `Computer Operation [Technical] and Literacy [Communication].`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['computerOperation', 'literacy']
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'artificialIntelligence') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = ComputerProgramming;