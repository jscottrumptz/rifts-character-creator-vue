const Skill = require('../Skill');

class ComputerRepair extends Skill {
    constructor() {
        super();
        this.name = `Computer Repair`;
        this.group = `Electrical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The knowledge of the internal electronics of computers and related devices (terminals, printers, modems, monitors, circuit boards, etc.). The character can attempt to repair or sabotage computers. Note that figuring out the repair or sabotage procedure counts as one roll, and the actual repair is a second roll (the second roll is done by the DM). A failed roll means the repair is faulty and does not work (try again?). No Computer Operation or Programming skills are included nor required to fix computers. Many computer repair personnel don't even know how to turn a computer on!`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Artificial Intelligence [Science] is also taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'artificialIntelligence') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = ComputerRepair;