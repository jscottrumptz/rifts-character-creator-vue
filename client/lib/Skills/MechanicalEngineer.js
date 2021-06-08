const Skill = require('../Skill');

class MechanicalEngineer extends Skill {
    constructor() {
        super();
        this.name = `Mechanical Engineer`;
        this.group = `Mechanical`;
        this.isSecondary = `false`;
        this.note = `There is a -30% penalty when working on alien or extremely unfamiliar mechanics. The mechanic may be able to puzzle out some of the basic aspects of an alien or magical device, and may be able to figure out how to operate the machine, but will not be able to completely fathom how it works or how to repair it.`;
        this.description = `The training, understanding, and knowledge of how machinery is designed, operated, built, and maintained. Characters can attempt to redesign, modify, repair, construct, or sabotage mechanical devices (includes fusion driven turbines and advanced power supplies). The player must first roll to see if their character can figure out how to operate, analyze, and design the machine. First, a successful diagnostic roll must be made. Roll again to determine whether the character can fix/change/build the required mechanism, and then (the DM) rolls again to see if the repair, modification, or construction was properly done/made and the machine works.`;
        this.reqOCCGroup = ``;
        this.penalty = `There is a -30% penalty when working on alien or extremely unfamiliar mechanics.`;
        this.bonus = `+5% bonus to Locksmith [Mechanical] skill if this skill is taken.
+5% bonus to Surveillance [Communication] skill if this skill is taken.`;
        this.required = `Mathematics: Basic [Science] or Mathematics: Advanced [Science], and Basic Electronics [Electronics] (or better), and Literacy [Communication].`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['mathematics', 'lectr', 'literacy']
    }
}

module.exports = MechanicalEngineer;