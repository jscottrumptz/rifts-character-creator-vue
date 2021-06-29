const Spell = require('../Spell');

class Escape extends Spell {
    constructor() {
        super();
        this.name = 'Escape';
        this.group = 'Invocation';
        this.level = 'Five';
        this.range = `Self, touch or 5 feet (1.5 m).`;
        this.duration = `Instant.`;
        this.cost = `8 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The escape invocation enables the mage to magically escape any bonds, or open any locking mechanism that bars his way. This includes being tied with rope, handcuffs, prison cells, doors, trunks, locks, straitjackets, etc. One restraint or lock can be undone per each invocation (one per melee round is possible). Only gagging the mage will pre-vent the use of this magic.`;
    }
}

module.exports = Escape;