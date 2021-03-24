const Psionic = require('../Psionic');

class Telepathy extends Psionic {
    constructor() {
        super();
        this.name = 'Telepathy';
        this.group = 'Sensitive';
        this.range = 'Read surface thoughts up to 60 feet ( 18.3 m) away or two-way telepathic communication up to 140 feet (42.7 m) +40 feet (12.2 m) per level of experience.';
        this.duration = '2 minutes per level of experience.';
        this.cost = '4 I.S.P.';
        this.savingThrow = `Conditional. When a character suspects he is being telepathically probed he can resist getting the standard saving throw. Mind Blocks will completely prevent telepathic probes or communications as long as the block is up.`;
        this.description = `    The power of Telepathy allows the psychic to eavesdrop on what another person is thinking at a particular moment. This is done by focusing on that one individual and picking up on his or her surface thoughts. Surface thoughts arc those thoughts and musings uppermost in a target's mind. A deep probe into memory is not possible. Although the psychic can read the thoughts of several people, he can only do so by focusing on one person at a time. Simultaneous, multiple mind reading is impossible for the character. 
    Limited telepathic communication is also possible. The telepath can send a directed thought message to one person at a time. The message must be as brief and clear as possible. Like, ''John, I need you immediately. Hurry!" or ''Stop1 Don't do that." ''Come here," ''Look out" or "Press the green button." However. two-way telepathic communication is not possible except between two characters both with telepathic abilities.`;
    }
}

module.exports = Telepathy;