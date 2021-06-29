const Spell = require('../Spell');

class LeyLineTransmission extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Transmission';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = ` Limited by the length of the ley line.`;
        this.duration = `Instant.`;
        this.cost = `30 P.P.E.`;
        this.savingThrow = `A psionic Mind Block will block and destroy the message.`;
        this.description = `    The spell caster can send a verbal and/or audio message directly along a ley line to another person so long as that person is located somewhere on the line. The best messages are brief ones of under a hundred words to avoid overwhelming the recipient. Unfortunately, the message is a one-way transmission unless the other person is a Ley Line Walker or other mage with the Ley Line Transmission spell or O.C.C. power. Range is limited only by the length of the ley line and the people's position on the line. The time lapse between sending and receiving a Iey line transmission is only a matter of seconds. The same message can be sent to several people (one person per level of experience) at different locations, as long as they are all on the ley line. 
    The only danger is that a telepath (psionic or magic) may be able to listen in on the message. There is a 01-20% chance that any psionic or magic character with the Telepathy power will sense a Ley Line Transmission coming through, and there is a 01-31 % chance that they too will automatically receive the message. There is no way for the sender to know if others have eavesdropped, nor is there any way to scramble the message.`;
    }
}

module.exports = LeyLineTransmission;