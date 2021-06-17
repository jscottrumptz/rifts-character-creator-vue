const Spell = require('../Spell');

class CloudOfSmoke extends Spell {
    constructor() {
        super();
        this.name = 'Cloud of Smoke';
        this.group = 'Invocation';
        this.level = 'One';
    }
}

module.exports = CloudOfSmoke;