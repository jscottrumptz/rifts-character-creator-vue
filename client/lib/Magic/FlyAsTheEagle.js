const Spell = require('../Spell');

class FlyAsTheEagle extends Spell {
    constructor() {
        super();
        this.name = 'Fly as the Eagle';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = FlyAsTheEagle;