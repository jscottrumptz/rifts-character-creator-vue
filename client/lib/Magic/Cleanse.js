const Spell = require('../Spell');

class Cleanse extends Spell {
    constructor() {
        super();
        this.name = 'Cleanse';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `Self, one person and the clothes he's wearing up to 10 feet (3 m) away, or two people by touch.`;
        this.duration = `Instant.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This is a simple but useful spell designed to remove dirt and grime from the body of a living being and the clothes he wears. Magic energy flows over the person and magically removes dirt, grime, stains, and just about anything that the spell caster considers "unclean." The recipient of this magic instantly becomes spotless, from head to toe. The hair and body look as if right out of the shower (only dry) and the clothes as 1f freshly washed and dried. The spell cannot be used on body armor, buildings, vehicles, streets, or anything else, only living creatures and clothes/fabric. One pile of clothes, weighing no more than 25 pounds (11.25 kg; no living person) can also be washed in place of a specific character's clothes. Note: This spell only cleans off the surface of the target and will not rid them of diseases or poison, although it will kill most surface parasites, such as ticks and fleas.`;
    }
}

module.exports = Cleanse;