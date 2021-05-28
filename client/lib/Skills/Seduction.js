const Skill = require('../Skill');

class Seduction extends Skill {
    constructor() {
        super();
        this.name = `Seduction`;
        this.group = `Rogue`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The ability to make the opposite sex melt with desire. This skill is somewhat similar to the Interrogation skill in that the seducer knows how to ask the right questions to get information without being obvious. The seducer usually seems attentive, sympathetic, alluring and sexy. Men and women who are seduced tend to have loose lips and will spill secrets. They also lose track of time, spend big money to impress and please their seducer, and lavish her or him with their affection, time, and attention while oblivious to everything else around them.

Anyone who has been successfully seduced is distracted, skill performance is halved and takes twice as long to perform, the character does not notice people and events around him/her, and is easily caught off guard(no initiative and all bonuses are at half when attacked by a character other than the seducer. The seducer always gets the first attack/strike/action and the victim loses one attack/action from surprise or horror.

Characters with high M.S. and/or P.B. gains bonuses as indicated below. [Example: a character with a M.S. of 24 (+4) and a P.B. of 23 (+3%) would be +7% to successfully seduce.]`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if target is intoxicated or drugged.
+1% for each M.S. point over 20.
+1% for each two P.B. points over 17 (round up).
+5 to Pick Pockets/Palming/plant things on victim.
+5% to Cardsharp.
+5% to Sing.
+5% to Dance.
+1 additional target of seduction every 3 levels of experience.`;
        this.required = ``;
        this.perLvl = `3`;
        this.baseTwo = ``;
        this.base = `20`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Seduction;