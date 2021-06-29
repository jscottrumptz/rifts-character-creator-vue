const Spell = require('../Spell');

class InvisibilitySimple extends Spell {
    constructor() {
        super();
        this.name = 'Invisibility: Simple';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `Self only (includes clothes and articles on one's person).`;
        this.duration = `Three minutes (12 melees) per level of experience.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The spell caster and anything he is wearing or carrying at the time of the invocation are turned completely invisible. Any object picked up after the character has become invisible remains visible. Likewise, any item on his person that is dropped becomes visible. Neither normal nor nightvision can detect invisibility; only beings who can naturally, psionically or magically "see the invisible" are able to see an invisible person. Infrared and heat detectors can also detect and pinpoint an in-visible character. 
    Although the invisible character is imperceptible to the eye, he still retains physical mass. This means he can not go through walls nor can weapons pass harmlessly through him. The character still makes noise, leaves footprints, and physical and magical contact/attacks still affect him as usual. 
    While invisible, the mage can talk, weave spells, walk, climb, run, open doors, carry objects, and perform other acts of physical exertion, including combat, and remain invisible. The invisibility is terminated when the magic's duration time elapses or the mage cancels the spell. Invisible characters are -9 to be hit. If the character is cut and blood is drawn, then the penalty is reduced to -3. If cut, only the blood is visible, and so is anything sprayed on the character.`;
        this.note = `Beings that turn invisible as a natural and/or magical ability have Simple Invisibility, not superior, and may be heard, smelled, register on motion detectors, etc. Aggressive action (including combat) will NOT terminate an Invisibility: Simple spell. Characters who can See the Invisible see both Simple and Superior Invisibility.`;
    }
}

module.exports = InvisibilitySimple;