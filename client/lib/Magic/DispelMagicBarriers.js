const Spell = require('../Spell');

class DispelMagicBarriers extends Spell {
    constructor() {
        super();
        this.name = 'Dispel Magic Barriers';
        this.group = 'Invocation';
        this.level = 'Seven';
        this.range = `100 feet (30.5 m).`;
        this.duration = `Instant.`;
        this.cost = `20 P.P.E.`;
        this.savingThrow = `The magic spell being attacked automatically gets a standard saving throw (12) as if it were a person. If a successful save is made, the negation spell has no effect; the barrier remains.`;
        this.description = `    The Dispel Magic Barriers invocation negates/dispels all magic barriers of any kind, including the Sorcerer's Seal, Carpet of Adhesion, Magic wall spells, ward spells, etc `;
    }
}

module.exports = DispelMagicBarriers;