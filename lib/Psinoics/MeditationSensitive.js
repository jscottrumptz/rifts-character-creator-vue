const Psionic = require('../Psionic');

class MeditationSensitive extends Psionic {
    constructor() {
        super();
        this.name = 'Meditation';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = 'As needed; at least one hour of meditation is required.';
        this.cost = 'None.';
        this.description = `    Meditation is a trance state of consciousness in which the individual can calm his emotions and focus on relaxation of mind and body. In a meditative state, the psychic finds peace and harmony between mind, body and spirit, and it is in this state of being that he can regenerate his Inner Strength (I.S.P.). Recovers Base I.S.P. at a rate as indicated under each psychic O.C.C., otherwise 6 I.S.P. per hour of meditation.`;
    }
}

module.exports = MeditationSensitive;