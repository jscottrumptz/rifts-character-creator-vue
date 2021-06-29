const Spell = require('../Spell');

class ImperviousToPoison extends Spell {
    constructor() {
        super();
        this.name = 'Impervious to Poison';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `Self or others by touch.`;
        this.duration = `Five minutes (20 melees) per level of experience.`;
        this.cost = `5 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This enchantment makes the person temporarily impervious to poisons, venom, deadly toxins, pollution and poison gases.`;
    }
}

module.exports = ImperviousToPoison;