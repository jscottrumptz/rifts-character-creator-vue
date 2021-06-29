const Spell = require('../Spell');

class FloatInAir extends Spell {
    constructor() {
        super();
        this.name = 'Float in Air';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `Self or others within 30 feet (9.1 m).`;
        this.duration = `10 melees per level of experience.`;
        this.cost = `5 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This spell creates air currents which hold a person or object aloft, hovering about one or two feet (0.3-0.6 m) above the ground. It can be used to slow someone's descent from a fall or used to float on top of water. Movement is awkward and slow while in the air. The floating in-dividual suffers the following penalties: All attacks, strikes, parries and dodges are at -1; normal speed/movement is reduced by half.`;
    }
}

module.exports = FloatInAir;