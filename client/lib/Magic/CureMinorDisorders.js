const Spell = require('../Spell');

class CureMinorDisorders extends Spell {
    constructor() {
        super();
        this.name = 'Cure Minor Disorders   ';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `Touch or 10 feet (3 m).`;
        this.duration = `Instant.`;
        this.cost = `10 P.P.E.`;
        this.savingThrow = `Standard (if unwanted).`;
        this.description = `    A unique bit of curative magic that will instantly relieve minor physical disorders and illnesses such as headaches, indigestion, gas, heartburn, nausea, hiccups, muscle stiffness, low fever (under 101 degrees) and similar. This invocation will also negate simple curses that inflict Minor Disorders.`;
    }
}

module.exports = CureMinorDisorders;