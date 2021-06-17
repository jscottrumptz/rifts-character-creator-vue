const Spell = require('../Spell');

class InfluenceTheBeast extends Spell {
    constructor() {
        super();
        this.name = 'Influence the Beast   ';
        this.group = 'Invocation';
        this.level = 'Five';
    }
}

module.exports = InfluenceTheBeast;