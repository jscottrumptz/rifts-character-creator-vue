const Skill = require('../Skill');

class Begging extends Skill {
    constructor() {
        super();
        this.name = `Begging`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `Though usually learned out of necessity in the school of hard knocks and poverty, this skill can be particularly useful to collect food, money, and clothing when down on one's luck, especially in the 'Burbs, independent kingdoms, trade centers, and low-tech communities.

The base skill determines the chance of collecting a donation from one in every ten passersby, and on a crowded street that could be pretty lucrative. The amount of money, food, or goods depends on the local economy, the generosity of the individual (typically small) and where the begging is taking place, but is typically in the 1D4 credits range. Note that begging may be outlawed in some communities and the character may be arrested for vagrancy, shooed away, or mugged by bandits or City Rats.

Many characters are likely to consider this skill to be beneath them, most common among Vagabonds.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `3`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Begging;