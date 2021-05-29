const Skill = require('../Skill');

class Pathology extends Skill {
    constructor() {
        super();
        this.name = `Pathology`;
        this.group = `Medical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The branch of medicine that deals with the nature of diseases, their causes, and symptoms, and the functional and structural changes caused by disease. Training includes anatomy, physiology, cell biology, manifestation of disease, tissue injury and repair, abnormal cell structure, metabolism, diagnosis of human diseases, tissue culture methods and applications, analysis of drugs in biological samples and laboratory research, investigative methods, and use of instruments and equipment.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5 Forensics skill.`;
        this.required = `Biology, Chemistry, and Literacy.`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Pathology;