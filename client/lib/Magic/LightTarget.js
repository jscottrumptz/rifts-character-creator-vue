const Spell = require('../Spell');

class LightTarget extends Spell {
    constructor() {
        super();
        this.name = 'Light Target';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `One target up to 10 feet (3 m) away or two by touch.`;
        this.duration = `Two minutes per level of the spell caster.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `Standard.`;
        this.description = `    This spell may seem quite harmless but is designed for ill intent. The sorcerer can create a rather bright glow of light around any one victim (two if by touch). The glow is intended to mark the character and make him stand out in a crowd (as a thief, outsider, fool, troublemaker, enemy, or target); it is especially effective at night. Covering oneself with other clothes, blankets, rags or armor in an attempt to obscure the glow is fruitless, for the glow remains - it is the person, not his clothing that is "targeted" and the aura of light remains around him no matter what he wears (this magic does not work on inanimate objects). Hiding behind closed doors, in a closet or trunk, or inside a vehicle may conceal the character, provided that the radiating light can not be seen through cracks, keyholes, windows or other openings through which light can be seen. A simple yet potentially nasty`;
    }
}

module.exports = LightTarget;