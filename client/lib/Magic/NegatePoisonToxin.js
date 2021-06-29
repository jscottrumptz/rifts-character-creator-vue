const Spell = require('../Spell');

class NegatePoisonToxin extends Spell {
    constructor() {
        super();
        this.name = 'Negate Poison/Toxin';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `Self or by touch.`;
        this.duration = `Instant.`;
        this.cost = `5 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The spell caster can magically turn a poisonous substance inert, rendering it harmless. The magic can also be used to instantly negate poison in the bloodstream, preventing further damage by the foul substance. However, any damage caused by the poison before the magic is used can not be reversed.`;
    }
}

module.exports = NegatePoisonToxin;