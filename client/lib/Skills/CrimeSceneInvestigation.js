const Skill = require('../Skill');

class CrimeSceneInvestigation extends Skill {
    constructor() {
        super();
        this.name = `Crime Scene Investigation`;
        this.group = `Medical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The procedures, methods, and techniques in police crime scene investigation, including protecting the integrity of a crime scene, gathering and preserving evidence, finger-printing, recognizing and preserving DNA evidence, ballistics (matching bullets to weapons and angles of impact), and finding, processing and analyzing clues and evidence.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to Perception rolls.`;
        this.required = `Biology, Chemistry, Chemistry: Analytical, Mathematics: Advanced, and Literacy.`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `35`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = CrimeSceneInvestigation;