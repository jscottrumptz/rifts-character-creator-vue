const Spell = require('../Spell');

class Wards extends Spell {
    constructor() {
        super();
        this.name = 'Wards';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = Wards;