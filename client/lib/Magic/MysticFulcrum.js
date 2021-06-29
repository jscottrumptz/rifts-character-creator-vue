const Spell = require('../Spell');

class MysticFulcrum extends Spell {
    constructor() {
        super();
        this.name = 'Mystic Fulcrum';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `Self or two others by touch.`;
        this.duration = `Five minutes per level of experience.`;
        this.cost = `5 P.P.E.`;
        this.savingThrow = `Not applicable.`;
        this.description = `    Mystic Fulcrum is another spell that defies or tweaks the laws of physics. Those enchanted by the magic can pick up and move objects that they would otherwise not have the leverage and ability to do with-out a lever and support. Those enchanted by Mystic Fulcrum can lift 50% more weight than usual and carry 10% more.`;
    }
}

module.exports = MysticFulcrum;