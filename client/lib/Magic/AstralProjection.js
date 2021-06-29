const Spell = require('../Spell');

class AstralProjection extends Spell {
    constructor() {
        super();
        this.name = 'Astral Projection   ';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `Self.`;
        this.duration = `Five minutes per level of experience.`;
        this.cost = `10 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The incantation sends the spell caster' s Astral body into the Astral Plane, another dimension. This magic functions exactly like the Psychic Sensitive ability of the same name.`;
    }
}

module.exports = AstralProjection;