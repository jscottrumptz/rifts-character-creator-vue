const Skill = require('../Skill');

class WardrobeandGrooming extends Skill {
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
+2% Disguise.
+2% Impersonation.
+2% Performance.
+2% Undercover Ops
+2% Seduction.`;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `50`;
        this.takeTwiceBonus = `10`;
        this.takeTwice = `true`;
    }
}

module.exports = WardrobeandGrooming;