const Skill = require('../Skill');

class ElectricalEngineer extends Skill {
    constructor() {
        super();
        this.name = `Electrical Engineer`;
        this.group = `Electrical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The knowledge of electricity. The character can diagnose and locate electrical problems, repair complex electrical devices, wire entire buildings or vehicles, and build electrical equipment.

The character can also attempt to bypass security systems, alarms, and surveillance systems, but at a penalty of -20% for simple systems and -50% for complex systems (reduce these penalties by half if the character has the Surveillance skill).

The character can hot-wire any vehicle without penalty but it takes 1D4 melee rounds (15-60 seconds) to do so.

`;
        this.reqOCCGroup = ``;
        this.penalty = `There is a -30% penalty when working on alien or extremely unfamiliar electronics including Techno-Wizard and Bio-Wizard devices. The electrician may be able to puzzle out some basic aspects of such a device, and may be able to figure out how to operate the machine, but is unable to completely fathom how it works or how to repair it.`;
        this.bonus = ``;
        this.required = `Mathematics: Advanced and Literacy.`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `35`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = ElectricalEngineer;