const Spell = require('../Spell');

class FireBall extends Spell {
    constructor() {
        super();
        this.name = 'Fire Ball   ';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = FireBall;