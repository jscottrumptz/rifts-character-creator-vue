const Skill = require('../Skill');

class Pathology extends Skill {
    constructor() {
        super();
        this.name = `Pathology`;
        this.group = `Medical`;
        this.isSecondary = false;
        this.description = `The branch of medicine that deals with the nature of diseases, their causes, and symptoms, and the functional and structural changes caused by disease. Training includes anatomy, physiology, cell biology, manifestation of disease, tissue injury and repair, abnormal cell structure, metabolism, diagnosis of human diseases, tissue culture methods and applications, analysis of drugs in biological samples and laboratory research, investigative methods, and use of instruments and equipment.`;
        this.bonus = `+5% to the Forensics [Medical] skill if this skill is taken.`;
        this.required = `Biology [Science], Chemistry [Science], and Literacy [Communication].`;
        this.perLvl = 5;
        this.base = 40;
        this.preq = ['biology', 'chemistry', 'literacy'];
        this.penalty = `Without Xenology [Science], any attempts to use a medical skill on an alien species has a -20% penalty.`;
    }
}

module.exports = Pathology;