const Psionic = require('../Psionic');

class MindWipe extends Psionic {
    constructor() {
        super();
        this.name = 'Mind Wipe';
        this.group = 'Super';
        this.range = 'Touch.';
        this.duration = 'Special.';
        this.cost = 'Special.';
        this.savingThrow = `Standard; a successful save means the person is unaffected and still retains his memory.`;
        this.description = `    To Mind Wipe an intelligent creature, the psionic must make physical contact, touching his victim's temples to erase whatever he desires. This is done by verbal suggestion and can erase any past event, knowledge, skill, and so on. The process takes about three minutes to complete. 
    The loss of memory is temporary, lasting 1D4 days for every 10 I.S.P. expended. The memory can be permanently erased if the psychic exerts 50 l.S.P. at once. A psychic can also permanently wipe a mind completely blank by expending 50 l.S.P. and four Mental Endurance (M.E.) points. This is an extremely grueling process for the psychic, and the loss of the four M.E. points is permanent, even if the opponent successfully saves against the wipe and is not affected.`;
    }
}

module.exports = MindWipe;