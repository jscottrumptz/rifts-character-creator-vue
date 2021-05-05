const Psionic = require('../Psionic');

class SenseTime extends Psionic {
    constructor() {
        super();
        this.name = 'Sense Time';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '15 minutes per level of experience.';
        this.cost = '2 I.S.P.';
        this.description = `    The psychic is able to accurately measure the passage of time, down to within 1D4 seconds. This can be useful when in an environment where the passage of time can be lost, and especially when the character must meet with or do something at a precise moment in time, like gauging exactly when a bomb will detonate, when a switch must be turned on or off, and so on.`;
    }
}

module.exports = SenseTime;