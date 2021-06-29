const Spell = require('../Spell');

class Fear extends Spell {
    constructor() {
        super();
        this.name = 'Fear';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `20 feet (6.1 m) diameter, up to 100 feet (30.5 m) away.`;
        this.duration = `One minute (4 melee rounds) per level of experience.`;
        this.cost = `5 P.P.E.`;
        this.savingThrow = `Special; save vs Horror Factor (16)`;
        this.description = `    The invocation creates a sensation of fear over a particular area (20 feet/6.1 m maximum area of affect). The spell caster can place the enchantment on an area occupied with people, or an area that is not presently occupied. Anybody entering the area of enchantment must roll to save vs Horror Factor 16. A failed roll means the character is suddenly washed with terror and will be momentarily stunned, loses initiative and one melee attack/action, is the last character to attack, and can not defend against an opponent's first strike each melee the individual is in the area of fear. Also see the "Horror Factor" explanation in the combat section of this book.`;
    }
}

module.exports = Fear;