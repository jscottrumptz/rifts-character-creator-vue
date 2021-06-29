const Spell = require('../Spell');

class RepelAnimals extends Spell {
    constructor() {
        super();
        this.name = 'Repel Animals';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `30 feet (9.1 m).`;
        this.duration = `Immediate.`;
        this.cost = `7 P.P.E.`;
        this.savingThrow = `Standard for animals.`;
        this.description = `    The character can invoke an enchantment that will make even a hos-tile predatory animal stop, turn, and leave the area without harming the mage or anybody near him. The animal will not return for hours. The enchantment can affect six animals simultaneously.`;
    }
}

module.exports = RepelAnimals;