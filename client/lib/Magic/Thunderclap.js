const Spell = require('../Spell');

class Thunderclap extends Spell {
    constructor() {
        super();
        this.name = 'Thunderclap';
        this.group = 'Invocation';
        this.level = 'One';
        this.range = `Directly affects the immediate area (30 feet/9.1 m) around the magic weaver, but can be heard up to one mile (1.6 km) away.`;
        this.duration = `Instant.`;
        this.cost = `4 P.P.E.`;
        this.savingThrow = `Save vs Horror Factor.`;
        this.description = `    The invocation produces a booming clap of thunder that is so loud that it seems to make the air vibrate. A thunderclap is an excellent means of alerting or signaling allies, as well as a means of intimidation. As an intimidation device, it will momentarily startle and distract everyone other than the spell caster. This provides the creator of the thunder with a bonus of +5 on his initiative, + 1 to strike, parry and dodge, and creates a Horror Factor of 8 (all characters within 30 feet/9.1 m must roll to save vs Horror Factor, except the mage who made the thunder).`;
    }
}

module.exports = Thunderclap;