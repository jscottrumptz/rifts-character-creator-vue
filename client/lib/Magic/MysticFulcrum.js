const Spell = require('../Spell');

class MysticFulcrum extends Spell {
    constructor() {
        super();
        this.name = 'Mystic Fulcrum';
        this.group = 'Invocation';
        this.level = 'Three';
    }
}

module.exports = MysticFulcrum;