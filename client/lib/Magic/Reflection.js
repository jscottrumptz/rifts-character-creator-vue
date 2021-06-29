const Spell = require('../Spell');

class Reflection extends Spell {
    constructor() {
        super();
        this.name = 'Reflection';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `Up to 20 feet (6. 1 m) away.`;
        this.duration = `Two minutes (8 melee rounds) per level of experience.`;
        this.cost = `7 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This spell has two features, both of which can be used to entertain or confuse.
1. The sorcerer can magically "freeze" his current reflection in a mirror or any reflective surface. This is typically done to preserve visual evidence (a temporary visual snapshot of events and or people reflected in the mirror), to leave a clue, or as a warning ("I" or some enemy "was here").
2. The spell caster can make his reflected image appear in any or all reflective surfaces (mirrors, chrome, polished metal, china, etc.) within a 20 foot (6 m) radius. This is usually done to surprise/startle, threaten or confuse others. In this case, the mage must have a mirror of his own or access to a reflective surface to create the reflected image that is transmitted to the others. Furthermore, this image is not frozen, so the mage can move and gesture. This is a transmitted reflection from the mirror available to the sorcerer, consequently, other images may be deliberately or accidentally caught in the reflection and transmitted to appear in the mirrors as well (other people and background images that may indicate his location, comrades, etc.). The reflections are just an image, there is no sound, so communication can only be done through sign language, pantomime, or writing (which appears backwards).`;
    }
}

module.exports = Reflection;