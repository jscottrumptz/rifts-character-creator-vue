const Spell = require('../Spell');

class PhantomMount extends Spell {
    constructor() {
        super();
        this.name = 'Phantom Mount';
        this.group = 'Invocation';
        this.level = 'Nine';
    }
}

module.exports = PhantomMount;