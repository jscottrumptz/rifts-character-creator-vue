const Skill = require('../Skill');

class Forensics extends Skill {
    constructor() {
        super();
        this.name = `Forensics`;
        this.group = `Medical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The proper medical procedure of performing an autopsy on a corpse, finding evidence regarding the time of death, cause of death, age and sex of the victim, identifying physical trauma, internal injury, the presence of toxins, and other details related to the condition of the body and cause of death.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Pathology [Medical] is also taken.`;
        this.required = `Biology [Science] and Chemistry [Science].`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `35`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['biology', 'chemistry']
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'pathology') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = Forensics;