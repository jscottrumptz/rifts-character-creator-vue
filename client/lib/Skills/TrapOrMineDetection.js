const Skill = require('../Skill');

class TrapOrMineDetection extends Skill {
    constructor() {
        super();
        this.name = `Trap or Mine Detection`;
        this.group = `Military`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The knowledge of the strategic placement of booby traps and mines, the telltale trademarks and indications of traps and mines, how to avoid them, and the use of mine and explosive detection equipment. The character has been trained to watch for suspicious objects, dirt mounds, trip wires, and camouflaging materials that denote the presence of a trap. Simple snare traps and trip wires can easily be disarmed by the character, but the Demolitions Disposal skill is required to disarm mines, explosives, or complex traps. Base skill is visual detection only, see bonuses for when using special detection equipment.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+50% to locate mines/explosives using special equipment.
+10% to locate other types of traps with special equipment.
+10% to Dog Boys and other non-humans with a keen sense of smell to locate explosives.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `20`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = TrapOrMineDetection;