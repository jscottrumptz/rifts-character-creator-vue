const Spell = require('../Spell');

class RiftToLimbo extends Spell {
    constructor() {
        super();
        this.name = 'Rift to Limbo   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
        this.range = ``;
        this.duration = ``;
        this.cost = ` P.P.E.`;
        this.savingThrow = ``;
        this.description = ``;
        this.note = ``;
    }
}

module.exports = RiftToLimbo;