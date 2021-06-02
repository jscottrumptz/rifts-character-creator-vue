const StatValue = require('./StatValue')

class Skills {
    constructor
        (
        bonus = new StatValue,
        known = {},
        selected = false,
        ) {
        this.bonus = bonus;
        this.known = known;
        this.selected = selected;
    }
}

module.exports = Skills;