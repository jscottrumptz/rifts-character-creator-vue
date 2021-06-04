const StatValue = require('./StatValue')

class Skills {
    constructor
        (
        bonus = new StatValue,
        known = {},
        choices = false,
        selected = false,
        ) {
        this.bonus = bonus;
        this.known = known;
        this.choices = choices;
        this.selected = selected;
    }
}

module.exports = Skills;