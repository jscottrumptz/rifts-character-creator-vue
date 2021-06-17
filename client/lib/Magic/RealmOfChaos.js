const Spell = require('../Spell');

class RealmOfChaos extends Spell {
    constructor() {
        super();
        this.name = 'Realm of Chaos';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = RealmOfChaos;