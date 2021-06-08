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
        this.bonus = `+5% to Undercover Ops [Espionage] if this skill is taken.
+5% to Impersonation [Espionage] if this skill is taken.
+5% to this skill if Public Speaking [Communication] is also taken.
+2% to this skill if Wardrobe & Grooming [Domestic] is also taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'publicSpeaking') {
                this.skillBonus = this.skillBonus + 5;
            }
            if(skill === 'wardrobeAndGrooming') {
                this.skillBonus = this.skillBonus + 2;
            }
        })
    }
}

module.exports = Performance;