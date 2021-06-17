const Spell = require('../Spell');

class CallLightning extends Spell {
    constructor() {
        super();
        this.name = 'Call Lightning   ';
        this.group = 'Invocation';
        this.level = 'Six';
    }
}

module.exports = CallLightning;