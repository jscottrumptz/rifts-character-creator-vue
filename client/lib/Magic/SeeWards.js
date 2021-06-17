const Spell = require('../Spell');

class SeeWards extends Spell {
    constructor() {
        super();
        this.name = 'See Wards';
        this.group = 'Invocation';
        this.level = 'Seven';
    }
}

module.exports = SeeWards;