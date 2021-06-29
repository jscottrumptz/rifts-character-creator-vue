const Spell = require('../Spell');

class EnergyField extends Spell {
    constructor() {
        super();
        this.name = 'Energy Field   ';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `Self or others up to 60 feet (18.3 m) away.`;
        this.duration = `One minute (4 melees) per level of experience or until it is destroyed.`;
        this.cost = `10 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The magic creates a protective field of energy that can be placed around the mage, others, or an object. The maximum area of protection is about 8 feet (2.4 m), which means it can protect a small room full of people (about 6 to 8 individuals). The energy field appears as a semitransparent wall or bubble that shimmers with a blue-white light. The field normally provides a total protection of 60 M.D.C., but is doubled at ley lines and tripled at a Iey line nexus.`;
    }
}

module.exports = EnergyField;