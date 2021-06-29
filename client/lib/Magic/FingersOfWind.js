const Spell = require('../Spell');

class FingersOfWind extends Spell {
    constructor() {
        super();
        this.name = 'Fingers of Wind';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `90 feet (27.4 m).`;
        this.duration = `Three melees per level of experience.`;
        this.cost = `5 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The spell caster can conjure a wind and manipulate it to touch, tap, bump, or press against a person or object. It can also put out candles, slam doors shut, or move or knock over papers, books, and small items weighing less than 10 lbs ( 4.5 kg).`;
    }
}

module.exports = FingersOfWind;