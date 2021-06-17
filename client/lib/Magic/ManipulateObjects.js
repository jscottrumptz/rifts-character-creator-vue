const Spell = require('../Spell');

class ManipulateObjects extends Spell {
    constructor() {
        super();
        this.name = 'Manipulate Objects';
        this.group = 'Invocation';
        this.level = 'Two';
    }
}

module.exports = ManipulateObjects;