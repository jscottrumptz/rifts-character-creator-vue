const Skill = require('../Skill');

class CyberneticsBasic extends Skill {
    constructor() {
        super();
        this.name = `Cybernetics: Basic`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = `A popular skill with City Rats and Headhunters.`;
        this.description = `The understanding of the purpose, capabilities and use of cybernetics and implants (not military grade bionics). Knowledge is sufficient to make minor adjustments and repairs of cybernetic implants and mechanisms before they are implanted in a living being. Can not perform surgery, implant or remove cybernetics, but knows where they are located in the body, what they do, and how they work. Could consult with a surgeon to remove them.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = CyberneticsBasic;