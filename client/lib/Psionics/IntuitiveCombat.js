const Psionic = require('../Psionic');

class IntuitiveCombat extends Psionic {
    constructor() {
        super();
        this.name = 'Intuitive Combat';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '2 melee rounds per level of experience.';
        this.cost = '10 I.S.P.';
        this.note = `The psychic is unable to use any other psionic power, including Mind Block, while this power is in use. He can cancel it with a thought.`;
        this.bonuses = `+ 3 on initiative, +1 to strike, +1 to parry, +4 to dodge, +4 to pull punch, +2 to roll with punch, fall or impact, and +2 to disarm.
    • Cannot be caught by surprise. even by attacks from behind or from long-range, which means he can try to parry or dodge all attacks leveled at him. 
    • + 10% to abilities (balance, etc.) provided by the Acrobatics and/or Gymnastic skills, as well as+ 10% to Climb and Swim skills.`;
        this.description = `    This is a form of telepathy geared to give the psychic an advantage in melee combat. To put this ability in place, the psychic must concentrate for one melee round ( I 5 seconds), putting himself in a Zen-like state of awareness. For the next two melee rounds, the Intuitive Combat sense makes the character one with his body and weapon, reacting quickly and efficiently with amazing reflex action, balance and grace.`;
    }
}

module.exports = IntuitiveCombat;