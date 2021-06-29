const Spell = require('../Spell');

class Chameleon extends Spell {
    constructor() {
        super();
        this.name = 'Chameleon';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `Self or Others by touch.`;
        this.duration = `Four and a half minutes (18 melees) per level of spell caster.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This spell enables the enchanted character(s) to seemingly alter the color and pattern of his clothes and physical body, enabling him to blend into the surrounding environment and disappear from sight. Movement destroys the effectiveness of this magic. The character is 90% undetectable if unmoving. 70% undetectable if moving 2 feet (0.6 m) per melee round or slower. 20% undetectable if moving 6 feet (1.8 m) per melee round. Totally ineffective if moving any faster. This spell is effective against normal vision, see the invisible and most optic systems. A thermal-imager is likely to reveal the character, especially if he is hiding in a cold environment. However, if the air temperature or a machine he is hiding against is around the same temperature as his body temperature (within five degrees), the character is concealed even from it. Attacking someone automatically negates the effects of a Chameleon spell.`;
    }
}

module.exports = Chameleon;