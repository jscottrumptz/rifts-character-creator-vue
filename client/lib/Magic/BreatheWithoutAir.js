const Spell = require('../Spell');

class BreatheWithoutAir extends Spell {
    constructor() {
        super();
        this.name = 'Breathe Without Air';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `Self or others by touch.`;
        this.duration = `12 melees (3 minutes) per level of experience.`;
        this.cost = `5 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This invocation enables the character to function normally without air, whether it be underwater or in a vacuum, or in an area with little or no oxygen. Unfortunately, the magic does not protect the character from magic toxins or other types of magic, but does protect against natural and man-made gases. Two characters can be given this enchantment simultaneously provided the mage is touching each at the time the spell is invoked.`;
    }
}

module.exports = BreatheWithoutAir;