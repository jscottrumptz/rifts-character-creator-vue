const Spell = require('../Spell');

class ExtinguishFire extends Spell {
    constructor() {
        super();
        this.name = 'Extinguish Fire';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `20 foot (6.1 m) radius. The spell can be cast a distance of up to 80 feet (24.4 m) away +1O feet (3 m) per level of experience.`;
        this.duration = `One minute (4 melee rounds) per level of experience.`;
        this.cost = `4 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The spell caster can instantly put out up to a 20 foot (6.1 m) radius of fire up to 80 feet (24.4 m) away. A total of 40 feet (12.2 m) can be extinguished every 15 seconds (one melee round).`;
    }
}

module.exports = ExtinguishFire;