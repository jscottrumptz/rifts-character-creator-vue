const Spell = require('../Spell');

class CloakOfDarkness extends Spell {
    constructor() {
        super();
        this.name = 'Cloak of Darkness';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `Self plus a 5 foot (1.5 m) radius around the character.`;
        this.duration = `Four minutes per level of experience.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This magic cloaks the spell caster in a field of darkness that follows him or her everywhere. The mage can see perfectly from within the darkness, but those outside the radius of magic cannot see in. At night, it renders the cloaked individual virtually invisible, although he can still be detected by infrared and/or heat sensors, thermo-imaging optics, motion detectors and similar sensor systems. Furthermore, the aura of darkness may noticeably obscure a particular part of the background/area around him, making it obvious to visual detection, especially in daylight or when bathed in light - the magic darkness cannot be dispelled by ordinary light. Consequently, this cloaking spell is ideal in darkness for hiding, escape and setting up an ambush. 
    In combat, opponents who attack a character cloaked in darkness from any distance (beyond the 5 foot/1.5 m area of magic) are -3 to strike, unless guided by thermal-optics or similar heat based optic systems, and even then are -I to strike. Those who step into the darkness for hand to hand combat will see their quarry without difficulty; no penalty unless they step outside the 5 foot (1.5 m) radius of effect.`;
    }
}

module.exports = CloakOfDarkness;