const Spell = require('../Spell');

class CurseOfTheWorldBizarre extends Spell {
    constructor() {
        super();
        this.name = 'Curse of the World Bizarre   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = CurseOfTheWorldBizarre;