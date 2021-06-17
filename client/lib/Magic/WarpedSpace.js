const Spell = require('../Spell');

class WarpedSpace extends Spell {
    constructor() {
        super();
        this.name = 'Warped Space';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = WarpedSpace;