const Skill = require('../Skill');

class Fencing extends Skill {
    constructor() {
        super();
        this.name = `Fencing`;
        this.group = `Physical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The formal art of fighting with a sword and dagger. This includes mot only Olympic style fencing with a foil, epee, or sabre, but also kendo (the use of samurai katana) and other blades. Swordsmanship is practiced in many places and is also all the rage, especially among the nobility, for its flashy looks and for the amount of blood it can spill.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 Strike (with sword or dagger).
+1 Parry (with sword or dagger).
+1D6 damage (with sword).`;
        this.required = `W.P. Sword`;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['wPSword']
    }
}

module.exports = Fencing;