const Spell = require('../Spell');

class FuelFlame extends Spell {
    constructor() {
        super();
        this.name = 'Fuel Flame';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `120 feet (36.6 m).`;
        this.duration = `Instant.`;
        this.cost = `5 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The magic feeds any existing fire, doubling it in size. It can affect a 100 foot area (30.5 m) up to 100 feet (30.5 m) away.`;
    }
}

module.exports = FuelFlame;