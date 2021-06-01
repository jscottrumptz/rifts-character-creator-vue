const Skill = require('../Skill');

class JuryRig extends Skill {
    constructor() {
        super();
        this.name = `Jury-Rig`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The character with this skill can repair almost anything and even build something out of scrap components. There is no guarantee that the jury-rig will hold for very long (4D6 hours or 2D4 days, whichever is most appropriate), or will even work in the way intended (roll again, a failed roll means the system is only 50% functional/works at half its normal speed or power level), but it may well save a character's life until they can acquire the proper parts, buy a new unit, or get a skilled mechanic to do the right job.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+10% if Electrical Engineer, Mechanical Engineer, or Field Armourer & Munitions.`;
        this.required = `At least Basic Mechanics and Basic Electronics, although Engineering skills are better.`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['mechan', 'lectr']
    }
}

module.exports = JuryRig;