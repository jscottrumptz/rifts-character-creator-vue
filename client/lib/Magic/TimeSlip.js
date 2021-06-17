const Spell = require('../Spell');

class TimeSlip extends Spell {
    constructor() {
        super();
        this.name = 'Time Slip';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = TimeSlip;