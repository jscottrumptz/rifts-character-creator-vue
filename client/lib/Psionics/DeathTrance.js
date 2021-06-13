const Psionic = require('../Psionic');

class DeathTrance extends Psionic {
    constructor() {
        super();
        this.name = 'Death Trance';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = 'As long as the psychic senses he must feign death, up to a maximum of four days.';
        this.cost = '1 I.S.P.';
        this.description = `    A state of mind over matter that slows the metabolism to such a degree that it creates a temporary state of suspended animation, simulating death. Without hospital facilities, even a medical doctor is likely to believe the character is dead (1-89% likelihood). The effects of drugs, toxins and chemicals are slowed to a crawl, doing minimal damage or effect, but will take full effect the instant the death trance is stopped (unless treatment is administered first). While in the death-like state, the psychic cannot be roused or respond to any type of stimulation, including psychic probes. This means he is incapable of attacking or de-fending himself in any way until the trance is broken.`;
    }
}

module.exports = DeathTrance;