const Spell = require('../Spell');

class SpeedOfTheSnail extends Spell {
    constructor() {
        super();
        this.name = 'Speed of the Snail';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = SpeedOfTheSnail;