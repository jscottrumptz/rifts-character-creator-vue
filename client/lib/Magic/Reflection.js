const Spell = require('../Spell');

class Reflection extends Spell {
    constructor() {
        super();
        this.name = 'Reflection';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = Reflection;