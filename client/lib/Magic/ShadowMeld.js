const Spell = require('../Spell');

class ShadowMeld extends Spell {
    constructor() {
        super();
        this.name = 'Shadow Meld   ';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `Self.`;
        this.duration = `Two minutes (8 melees) per level of experience.`;
        this.cost = `10 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This unique magic enables the spell caster to step into shadows, be-coming totally invisible, even to a "See the Invisible" spell. The shadow must be at least five feet (1.5 m) tall or long to become an effective hiding place. The shadow serves as a superior means of hiding or moving unseen. The mage can move, walk, or run through the length of a shadow or from shadow to shadow. While in shadow/darkness, the character prowls at a 60% proficiency ( or at + 15% to normal skill, whichever is higher). 
    Intense light will dispel the shadow, leaving the mage revealed. Of course, sanctuary can be found by fleeing into another shadow. Feeble light, less than 10 torches or 300 watts, will only create more shadows.
    While hidden in shadow, the character is still susceptible to magic, psionic and physical attacks, although attackers are -5 to strike him (because they can not see him). Area affect magic does not suffer any penalty. Infrared/thermal-optics are the only means that can be used to see somebody in a shadow.`;
    }
}

module.exports = ShadowMeld;