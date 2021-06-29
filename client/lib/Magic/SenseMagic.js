const Spell = require('../Spell');

class SenseMagic extends Spell {
    constructor() {
        super();
        this.name = 'Sense Magic';
        this.group = 'Invocation';
        this.level = 'One';
        this.range = `120 foot (36 m) area.`;
        this.duration = `Two minutes (8 melees) per level of experience.`;
        this.cost = `4 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This magic ability enables the character to sense or feel the presence of magic. Like a Geiger counter, the individual can tell if he is near (within 20 feet/6 m) or far (toward the limit of the range). The ability can also indicate whether a person or object is enchanted/under a magic spell, is in the process of invoking magic, or if magic is being used in the range area.`;
        this.note = `Men of Magic and most supernatural beings do NOT register as magic except when they are actually casting a spell/using magic. Psychic powers can not be detected with this spell.`;
    }
}

module.exports = SenseMagic;