const Skill = require('../Skill');

class Surveillance extends Skill {
    constructor() {
        super();
        this.name = `Surveillance`;
        this.group = `Communication`;
        this.isSecondary = false;
        this.note = `Tailing, or following someone without their knowledge,is another form of surveillance. This also includes stakeout procedures. A failed surveillance roll indicates that the subject has spotted the 'tail' and is aware that they are being followed/observed.`;
        this.description = `This is the study and understanding of the operation, methods, and techniques in the use of surveillance systems. Includes motion detectors, simple and complex alarm systems, audio/visual recording and display equipment, recording methods, amplified sound systems, miniature listening devices (bugs, line-taps), and some optical enhancement systems (specifically as they relate to camera lenses).`;
        this.bonus = `+5% to this skill if Mechanical Engineer [Mechanical] is also taken.`;
        this.required = `Basic Electronics [Electronics] or Electrical Engineer [Electronics] and Computer Operation [Technical] and Literacy [Communication] (the latter two are needed only for complex, high-tech systems).`;
        this.perLvl = 5;
        this.base = 30;
        this.preq = ['lectr'];
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'mechanicalEngineer') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = Surveillance;