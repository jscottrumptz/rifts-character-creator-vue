const Spell = require('../Spell');

class NegateMagic extends Spell {
    constructor() {
        super();
        this.name = 'Negate Magic';
        this.group = 'Invocation';
        this.level = 'Eight';
        this.range = `Touch or 60 feet (18.3 m).`;
        this.duration = `Instant.`;
        this.cost = `30 P.P.E.`;
        this.savingThrow = `Special (Ritual magic has a greater chance of success).`;
        this.description = `    This incantation will instantly cancel the effects or influence of most magic. To determine whether the negation is successful or not roll a saving throw. If the roll is a successful save against the magic in place, its influence is immediately destroyed, negated, canceled. 12, 13, 14, or 15 is needed for spell magic depending on the experience level of the mage (usually 12 or 13 is needed), meanwhile 16 or higher to save vs ritual magic. A failed save means the negation attempt did not work. Try again if sufficient P.P.E. is available. 
    Negation will not work against possession, Exorcism, Constrain Being, Banishment, Talisman, Amulet, Enchanted objects, Symbols/Circles of protection (or magically drawn circles of any kind), wards, summoning magic, Zombies, Golems, Restoration, magical healings or cures. Negation can be attempted to cancel a spell curse, but only has a 01-25% possibility of succeeding. Of course, it has no effect against psychic abilities or Techno-Wizard or Bio-Wizard/rune devices. `;
    }
}

module.exports = NegateMagic;