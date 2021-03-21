const Psionic = require('../Psionic');

class TelekineticPush extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinetic Push';
        this.group = 'Physical';
        this.range = 'By touch or one foot (0.3 m) per level of experience.';
        this.duration = 'Instant.';
        this.cost = '4 I.S.P.';
    }
}

module.exports = TelekineticPush;