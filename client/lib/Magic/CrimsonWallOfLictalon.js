const Spell = require('../Spell');

class CrimsonWallOfLictalon extends Spell {
    constructor() {
        super();
        this.name = 'Crimson Wall of Lictalon';
        this.group = 'Invocation';
        this.level = 'Spells of Legend';
    }
}

module.exports = CrimsonWallOfLictalon;