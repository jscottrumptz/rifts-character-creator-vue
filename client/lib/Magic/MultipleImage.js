const Spell = require('../Spell');

class MultipleImage extends Spell {
    constructor() {
        super();
        this.name = 'Multiple Image';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `Self.`;
        this.duration = `One minute (4 melees) per level of experience.`;
        this.cost = `7 P.P.E.`;
        this.savingThrow = `-4 to save. Viewers may be able to see through the illusion and identify the true person, but must roll to save vs magic at -4.`;
        this.description = `    An illusion that creates three identical images of the mage, each of which mimics his every movement exactly. Only piercing the false im-age with iron will dispel that particular image. This is a great way to confuse, scare and distract an opponent. Provides the mage with a bonus of +2 on initiative, +2 to dodge, and +1 to strike.`;
    }
}

module.exports = MultipleImage;