const Psionic = require('../Psionic');

class MindBolt extends Psionic {
    constructor() {
        super();
        this.name = 'Mind Bolt';
        this.group = 'Super';
        this.range = '100 feet (30.5 m) per level of experience.';
        this.duration = 'Instant.';
        this.cost = 'Varies.';
    }
}

module.exports = MindBolt;