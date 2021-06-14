const Psionic = require('../Psionic');

class TelemechanicMentalOperation extends Psionic {
    constructor() {
        super();
        this.name = 'Telemechanic Mental Operation';
        this.group = 'Super';
        this.range = '20 feet (6.1 m) +5 feet (1.5 m) per level of experience.';
        this.duration = '2 melee rounds per level of the psychic.';
        this.cost = '12 I.S.P.';
        this.savingThrow = `Special. Regular, non-intelligent machines cannot save vs Telemechanic Operation. Cybernetics and bionics attached to living flesh, sentient machines and magic items and devices are impervious.`
        this.description = `    This power is a step beyond the mere understanding of machines granted by Telemechanics, it allows the psychic to telepathically operate machines with his mind! As long as the machine functions, he knows how to use it, and it is turned "on," the psychic can manipulate it with his mind as if his fingers were on the controls! This means he can operate computers, key pads, set/program an alarm clock, change the radio station, operate a VCR or television, drive a hover car (even if there is already a driver, but at -30% when usurping the pilot), cook something in a microwave, tum off (or on) a surveillance video camera, and so on.
    The Telemechanic Mental Operation power will only work on machines that have an electronic or other power source. This power does not work on artificially intelligent machines (i.e. intelligent computers, robots, etc.), nor on cybernetics, bionics, Techno-Wizard devices, rune weapons or magic items. Note: Also see Machine Ghost and Telemechanic Possession.
    The psychic can use other psionic powers and engage in other activities, but must maintain some level of mental concentration and contact to keep control of the machine. During this period he is - I melee attack/ action and -5% on skill performance. He must also stay within range. If he steps out of range or loses concentration, the machine returns to normal in 1D4 seconds.`;
    }
}

module.exports = TelemechanicMentalOperation;