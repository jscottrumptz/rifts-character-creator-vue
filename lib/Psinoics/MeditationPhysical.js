const Psionic = require('../Psionic');

class MeditationPhysical extends Psionic {
    constructor() {
        super();
        this.name = 'Meditation';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = 'As needed; at least one hour of meditation is required.';
        this.cost = 'None.';
    }
}

module.exports = MeditationPhysical;