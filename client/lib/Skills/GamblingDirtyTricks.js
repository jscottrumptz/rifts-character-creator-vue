const Skill = require('../Skill');

class GamblingDirtyTricks extends Skill {
    constructor() {
        super();
        this.name = `Gambling: Dirty Tricks`;
        this.group = `Rogue`;
        this.isSecondary = false;
        this.description = `The other side of gambling in which the character is skilled at cheating in games of chance. This includes knowledge of dirty tricks such as counting cards, how to use marked cards, using trick/loaded dice, stacking the deck (in one's favour), slight of hand tricks to hide cards up sleeves or in the palm of the hand, dealing from the bottom of the deck, and other cheats (must have the Palming skill for the latter two).`;
        this.bonus = `+6% to the Cardsharp [Rogue] skill if this skill is taken.`;
        this.perLvl = 4;
        this.base = 20;
    }
}

module.exports = GamblingDirtyTricks;