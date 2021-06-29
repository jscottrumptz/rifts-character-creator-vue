const Spell = require('../Spell');

class TimeSlip extends Spell {
    constructor() {
        super();
        this.name = 'Time Slip';
        this.group = 'Invocation';
        this.level = 'Six';
        this.range = `Self.`;
        this.duration = `Half a melee round (7 seconds).`;
        this.cost = `20 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The invocation momentarily suspends time, enabling the spell caster to slip seven seconds into the future. The mage can move forward seven seconds while all around him are caught in the past. The magic is such that the character can not physically hurt any living creature, but can move about the physical environment, open doors, grab an item, run, etc. The effect will appear, to others, as if the character disappears for an instant and then suddenly reappears a few seconds later. All around him lose two attacks that melee round, but the mystic retains all of his. The time slip is ideal for a quick escape.`;
        this.note = `Whatever actions the sorcerer takes within the seven seconds are unseen and unknown to the other characters.`;
    }
}

module.exports = TimeSlip;