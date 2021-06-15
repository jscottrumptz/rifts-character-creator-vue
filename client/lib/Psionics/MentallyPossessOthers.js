const Psionic = require('../Psionic');

class MentallyPossessOthers extends Psionic {
    constructor() {
        super();
        this.name = 'Mentally Possess Others';
        this.group = 'Super';
        this.range = 'Touch.';
        this.duration = '5 minutes per level of experience.';
        this.cost = '30 I.S.P.';
        this.savingThrow = `Standard. Note that a body without its life essence/soul has NO defenses against any type of possession, and the takeover is automatic (no save applicable). That is why the empty body must be protected and/or hidden during Astral Projection. `;
        this.description = `    The psychic can completely take over and controls another person. The psychic essence of the controlling mind is transferred into the body of another individual. While in the victim's body/mind, the psionic retains all his own knowledge and identity. He can not read the mind of the person he now possesses, nor access any knowledge from the victim's memory. Only the physical body can be controlled, like a living robot. 
    During the period that the victim is possessed, the individual goes into a trance state and remembers nothing about the things that happen while he is possessed. Meanwhile, the psychic's natural body falls into a coma-like state and is vulnerable to attack unless protected by others. 
    The possessing character can return to his own body at any time regardless of distance. When his essence leaves the body of the possessed, the victim suddenly becomes conscious again, as if suddenly being woken up.`;
    }
}

module.exports = MentallyPossessOthers;