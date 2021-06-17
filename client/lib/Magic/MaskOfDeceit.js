const Spell = require('../Spell');

class MaskOfDeceit extends Spell {
    constructor() {
        super();
        this.name = 'Mask of Deceit   ';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = MaskOfDeceit;