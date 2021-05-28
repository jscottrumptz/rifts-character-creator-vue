const Skill = require('../Skill');

class BasicElectronics extends Skill {
    constructor() {
        super();
        this.name = `Basic Electronics`;
        this.group = `Electrical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `This is a rudimentary understanding of the principles of electricity, simple circuits, wiring, and so on. This character can do basic wiring, repair appliances, and read schematics, as well as assist electrical engineers.

The character can attempt to hot-wire a commercial vehicle (not military) using Basic Electronics but with a -20% skill penalty and it takes 1D4+2 melee rounds (45-90 seconds) to do so.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = BasicElectronics;