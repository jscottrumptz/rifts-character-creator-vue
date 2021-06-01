const Skill = require('../Skill');

class Surveillance extends Skill {
    constructor() {
        super();
        this.name = `Surveillance`;
        this.group = `Communication`;
        this.isSecondary = `false`;
        this.note = `Tailing, or following someone without their knowledge,is another form of surveillance. This also includes stakeout procedures. A failed surveillance roll indicates that the subject has spotted the 'tail' and is aware that they are being followed/observed.`;
        this.description = `This is the study and understanding of the operation, methods, and techniques in the use of surveillance systems. Includes motion detectors, simple and complex alarm systems, audio/visual recording and display equipment, recording methods, amplified sound systems, miniature listening devices (bugs, line-taps), and some optical enhancement systems (specifically as they relate to camera lenses).`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Basic Electronics or Electrical Engineer and Computer Operation and Literacy (the latter two are needed only for complex, high-tech systems).`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['lectr'];
    }
}

module.exports = Surveillance;