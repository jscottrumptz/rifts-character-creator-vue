const StatValue = require('./StatValue')

class Skills {
    constructor
        (
        bonus = new StatValue,
        known = {},
        choices = false,
        selected = false,
        secondary = false
        ) {
        this.bonus = bonus;
        this.known = known;
        this.choices = choices;
        this.selected = selected;
        this.secondary = secondary;
    }
}

module.exports = Skills;