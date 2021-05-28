const Skill = require('../Skill');

class Outdoormanship extends Skill {
    constructor() {
        super();
        this.name = `Outdoormanship`;
        this.group = `Physical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `Being an avid outdoors man and survivalist, this character has spent a significant portion of their life living off the land or in the wild. As a result, the character is hardened to the rigours of outdoor life.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to P.E.
+2D6 to S.D.C.
+5% to Dowsing.
+5% to Fasting.
+5% to Identify Plants & Fruit
+5% to Wilderness Survival.`;
        this.required = `Wilderness Survival.`;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Outdoormanship;