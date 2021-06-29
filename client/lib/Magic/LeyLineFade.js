const Spell = require('../Spell');

class LeyLineFade extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Fade';
        this.group = 'Invocation';
        this.level = 'Seven';
        this.range = `Self and as many as two others by touch.`;
        this.duration = `10 minutes per level of the spell caster.`;
        this.cost = `20 P.P.E. (half for Ley Line Walkers and Shifters).`;
        this.description = `    The spell caster seems to disappear, completely melding with the faint blue energy of the ley line. While in this state of invisibility, the character is completely undetectable by sensors, optics and all forms of magic and psionic sensing. He is gone! This spell is used for reconnaissance, to spy upon others undetected and to hide.
    While in this state the Ley Line Faded character(s) can not move. He is planted where he once stood, although he can turn his head and see what is transpiring in front of him (normal line of vision). The senses of the "faded" character are distorted, he hears only bits and pieces of conversions, can not smell odors, speak, cast spells, use psionics, heal, recover P.P.E., I.S.P., Hit Points or S.D.C. This limbo state can be cancelled whenever the mage desires, and those affected instantly reappear. While "one with the ley line" the character can sense if a Rift is opening or about to be opened or closed anywhere on the line and any connecting lines, as well as sense the presence of a ley line storm (exactly where it is, how far it is, and what direction it is traveling), and sense the presence of entities and alien intelligences on the ley line.
    Danger: 
If caught in a ley line storm while faded, the character will be unable to become corporeal again until the storm ends, is carried away by the storm loses half his Hit Points (or M.D.C. if a Mega-Damage being), and there is a 0 1 -50% chance of suffering from amnesia (has no idea who he is or what his abilities are) for 1D4 days. If a dimensional Rift opens up there is a good chance the character will be thrown into it and Rifted to another place, time, world or dimension. Getting back home may be a difficult task.
    Also this spell should be used before the enemy notices the character, otherwise, those who have seen a Ley Line Fade used before will know that sooner or later, the spell caster will reappear right where he vanished.`;
    }
}

module.exports = LeyLineFade;