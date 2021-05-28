const Skill = require('../Skill');

class NbcWarfare extends Skill {
    constructor() {
        super();
        this.name = `NBC Warfare`;
        this.group = `Military`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The knowledge of safety precautions to protect oneself and others from the effects of nuclear, biological, or chemical warfare, waste, and contamination. The character is also knowledgeable in the safe handling and 'clean-up', as well as containment of such hazardous materials.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `35`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = NbcWarfare;