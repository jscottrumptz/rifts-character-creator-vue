const Spell = require('../Spell');

class ImperviousToFire extends Spell {
    constructor() {
        super();
        this.name = 'Impervious to Fire';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `Self or others up to 60 feet (18.3 m) away.`;
        this.duration = `Five minutes (20 melees) per level of experience.`;
        this.cost = `5 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    A magic invocation that makes the individual temporarily impervious to fire. Normal, magical and Mega-Damage fires do no damage to the enchanted individual or to anything he is wearing or is on his person.`;
    }
}

module.exports = ImperviousToFire;