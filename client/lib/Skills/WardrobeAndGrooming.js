const Skill = require('../Skill');

class WardrobeAndGrooming extends Skill {
    constructor() {
        super();
        this.name = `Wardrobe & Grooming`;
        this.group = `Domestic`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `This skill represents a knowledge of clothing, make-up, hair style, perfume, walking, talking, and how one carries oneself to create a particular 'look' for themselves. In short, this is how to dress to kill or make the correct impression. Keeps an eye on fashion and trends.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 P.B. (when dressed to impress).
+2% to Disguise [Espionage] if this skill is taken.
+2% to Impersonation [Espionage] if this skill is taken.
+2% to Performance [Communication] if this skill is taken.
+2% to Undercover Ops [Espionage] if this skill is taken.
+2% to Seduction [Rogue] if this skill is taken.`;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `50`;
        this.takeTwiceBonus = `+10%`;
        this.takeTwice = `true`;
    }

    rollSecondary() {
        if (this.takenTwice) {
            this.skillBonus = this.skillBonus + 10;
        }
    }
}

module.exports = WardrobeAndGrooming;