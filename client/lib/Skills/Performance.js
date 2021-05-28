const Skill = require('../Skill');

class Performance extends Skill {
    constructor() {
        super();
        this.name = `Performance`;
        this.group = `Communication`;
        this.isSecondary = `true`;
        this.note = `Obvious lies, inconsistencies, and evidence to the contrary may ruin the effectiveness of the best performance (DM discretion).`;
        this.description = `The methods and fundamentals used by actors, entertainers, politicians, and other public figures to impress and sway the public. A character with this skill knows how to do things with flair. If a skill roll is successful, it works like an attempt to charm, captivate, impress, intimidate, or incense (or motivate) the audience.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% Undercover Ops.
+5% Impersonation.
+5% to this skill if Public Speaking is also attained`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Performance;