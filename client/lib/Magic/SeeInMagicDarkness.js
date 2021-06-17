const Spell = require('../Spell');

class SeeInMagicDarkness extends Spell {
    constructor() {
        super();
        this.name = 'See in Magic Darkness   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = SeeInMagicDarkness;