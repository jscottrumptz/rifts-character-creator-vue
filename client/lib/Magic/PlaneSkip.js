const Spell = require('../Spell');

class PlaneSkip extends Spell {
    constructor() {
        super();
        this.name = 'Plane Skip';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = PlaneSkip;