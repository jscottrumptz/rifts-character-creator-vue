const Psionic = require('../Psionic');

class TelemechanicParalysis extends Psionic {
    constructor() {
        super();
        this.name = 'Telemechanic Paralysis';
        this.group = 'Super';
        this.description = `    This is a form of techno-manipulation whereby the psychic is able to psychically bond with the machine and momentarily prevent it from functioning. The psychic blocks the transmission of signals along the machine ' s "nervous system," effectively incapacitating it. This means the power is only effective against machines that require an energy source. Simple devices like wind-up toys, scissors, old revolvers and pistols, swords, knives, crossbows, and similar items cannot be affected. The paralyzed machine freezes in place and does not respond to any of its controls until the psionic influence comes to an end. 
    The psychic can use other psionic powers and engage in other activities, but must maintain some level of mental concentration and contact to keep the machine inactive. During this period, he is - 1 melee attack/ action and -5% on skill performance. He must also stay within range (40 feet/ 12.2 m). If he steps out of range or loses concentration, the machine returns to normal in 1D4 seconds.`;
        this.range = 'Touch or 40 feet ( 12.2 m).';
        this.duration = 'One minute per level of experience.';
        this.cost = '20 I.S.P.';
        this.savingThrow = `Special. Regular, non-intelligent machines cannot save vs Telemechanic Paralysis. Cybernetics and bionics attached to living flesh, sentient machines and magic items and devices are impervious.`;
    }
}

module.exports = TelemechanicParalysis;