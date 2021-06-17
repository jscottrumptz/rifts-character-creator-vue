const Spell = require('../Spell');

class Meteor extends Spell {
    constructor() {
        super();
        this.name = 'Meteor';
        this.group = 'Invocation';
        this.level = 'Ten';
    }
}

module.exports = Meteor;