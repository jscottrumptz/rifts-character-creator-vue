const Spell = require('../Spell');

class MysticAlarm extends Spell {
    constructor() {
        super();
        this.name = 'Mystic Alarm';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = MysticAlarm;