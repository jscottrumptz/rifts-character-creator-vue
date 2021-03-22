const Psionic = require('../Psionic');

class MeditationSensitive extends Psionic {
    constructor() {
        super();
        this.name = 'Meditation';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = 'As needed; at least one hour of meditation is required.';
        this.cost = 'None.';
    }
}

module.exports = MeditationSensitive;