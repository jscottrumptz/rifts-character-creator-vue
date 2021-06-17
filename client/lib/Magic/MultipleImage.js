const Spell = require('../Spell');

class MultipleImage extends Spell {
    constructor() {
        super();
        this.name = 'Multiple Image';
        this.group = 'Invocation';
        this.level = 'Four';
    }
}

module.exports = MultipleImage;