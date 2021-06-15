const Psionic = require('../Psionic');

class MindBlockAutoDefense extends Psionic {
    constructor() {
        super();
        this.name = 'Mind Block Auto-Defense';
        this.group = 'Super';
        this.range = 'Self.';
        this.duration = 'Special.';
        this.cost = 'Special.';
        this.description = `    The moment the psychic is mind probed, a personal Mind Block automatically snaps into place. It also alerts the character to the fact that he or she is being probed or attacked by Empathy or Telepathy. The character must consciously and willingly lower the mind shield and open himself to the psi-probes in order to receive them. Otherwise, the automatic defense Mind Block will stay in effect until the probe/attack is over. Engages automatically. 
    The I.S.P. cost is different in that the character must permanently give up 14 I.S.P. when this power is selected. However, the Mind Block will automatically take place whenever under Telepathic and Empathic probes or mind control attacks at no additional I.S.P. cost.`;
    }
}

module.exports = MindBlockAutoDefense;