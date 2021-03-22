const Psionic = require('../Psionic');

class MeditationHealing extends Psionic {
    constructor() {
        super();
        this.name = 'Meditation';
        this.group = 'Healing';
        this.range = 'Self.';
        this.duration = 'As needed; at least one hour of meditation is required.';
        this.cost = 'None.';
    }
}

module.exports = MeditationHealing;