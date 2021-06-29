const Spell = require('../Spell');

class SecondSight extends Spell {
    constructor() {
        super();
        this.name = 'Second Sight';
        this.group = 'Invocation';
        this.level = 'Seven';
        this.range = `5 miles (8 Ian) per level of experience.`;
        this.duration = `Two melees (30 seconds).`;
        this.cost = `20 P.P.E.`;
        this.savingThrow = `None; Mind Block will temporarily prevent the use of Second Sight.`;
        this.description = `    A unique use of magic that enables a mage to see and hear what another person is doing at that very moment. To use Second Sight, the spell caster must have previously encountered/met the individual targeted. The mage just has to think about that person and he will get a clairvoyant-like vision showing what that character is doing and saying, and who he/she is with. The vision is what one might expect to see in a crystal ball except that the mage sees it in his mind. The vision lasts only 30 seconds each time the magic is invoked.
    A mage can also use second sight to transmit his present activity to another person. This is a great way to show somebody that the character is in trouble. Note: The image always consists of true events showing exactly what is happening when it is happening. The vision can not be altered or doctored in any way. Only a Mind Block will prevent a character from being seen through Second Sight. Those being spied upon have no knowledge of it.`;
    }
}

module.exports = SecondSight;