const Spell = require('../Spell');

class BeatInsurmountableOdds extends Spell {
    constructor() {
        super();
        this.name = 'Beat Insurmountable Odds';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = BeatInsurmountableOdds;