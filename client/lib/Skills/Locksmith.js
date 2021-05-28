const Skill = require('../Skill');

class Locksmith extends Skill {
    constructor() {
        super();
        this.name = `Locksmith`;
        this.group = `Mechanical`;
        this.isSecondary = `false`;
        this.note = `Time:
1D4 me lees to open an antiquated key type lock or simple tumbler/combination type.
1D4 minutes to open an elaborate tumbler type.
2D4 minutes to open a simple electronic lock (usually by patching in a bypass system).
1D4 hours to break a complex, state-of-the-art electronic lock system such as those used in high security and restricted areas.
3D4 hours to break a super high-tech system, such as those used by militaries and governments, and has a penalty of -20%.
After this time, the skill roll is made. If unsuccessful, the lock is not opened and the process must be repeated. If an attempt to open an electronic lock fails, roll again. A second failed roll means the lock is irreparably damaged and can not be opened.`;
        this.description = `The study of lock designs and the ability to repair, build, modify, and open locks. The methods, techniques, and tools of lock picking include the old-style key and tumbler, combination, and modern electrical locking systems.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `None for any non-electrical lock. Basic Electronics for electrical systems, with a -10% penalty to this skill when working on complex or high-tech locks, or Electrical Engineer with a +5% bonus.`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Locksmith;