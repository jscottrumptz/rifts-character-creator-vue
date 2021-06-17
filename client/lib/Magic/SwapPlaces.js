const Spell = require('../Spell');

class SwapPlaces extends Spell {
    constructor() {
        super();
        this.name = 'Swap Places';
        this.group = 'Invocation';
        this.level = 'Thirteen';
    }
}

module.exports = SwapPlaces;