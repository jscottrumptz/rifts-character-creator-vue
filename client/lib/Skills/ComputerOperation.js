const Skill = require('../Skill');

class ComputerOperation extends Skill {
    constructor() {
        super();
        this.name = `Computer Operation`;
        this.group = `Technical`;
        this.isSecondary = true;
        this.description = `The knowledge of how computers work, along with the skills to operate peripherals like keyboards, printers, and modems. The character can follow computer directions, enter and retrieve information, install programs, games, and software, use the web/internet and similar basic computer operations. Does not include repair, programming, or hacking.`;
        this.bonus = `+5% to this skill if Artificial Intelligence [Science] is also taken.`;
        this.required = `Literacy [Communication].`;
        this.perLvl = 5;
        this.base = 40;
        this.preq = ['literacy']
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'artificialIntelligence') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = ComputerOperation;