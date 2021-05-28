const Skill = require('../Skill');

class PickLocks extends Skill {
    constructor() {
        super();
        this.name = `Pick Locks`;
        this.group = `Rogue`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The character knows the methods and tools for picking/opening key and tumbler type locks. This does not include sophisticated computer or electronic locks. It takes 1D6 melee rounds for each attempt to pick a lock. A failed roll means the lock holds: try again.`;
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

module.exports = PickLocks;cks;