const Spell = require('../Spell');

class LeyLineFade extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Fade';
        this.group = 'Invocation';
        this.level = 'Seven';
        this.range = ``;
        this.duration = ``;
        this.cost = ` P.P.E.`;
        this.savingThrow = ``;
        this.description = ``;
        this.note = ``;
    }
}

module.exports = LeyLineFade;