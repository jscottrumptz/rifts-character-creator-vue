const Spell = require('../Spell');

class Seal extends Spell {
    constructor() {
        super();
        this.name = 'Seal';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `100 feet (30.5 m).`;
        this.duration = `Two minutes (8 melees) per level of experience.`;
        this.cost = `7 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The spell caster can magically seal shut a door, gate, window, drawer, lid, container, or any inanimate object. There is no sign of force, the lock can be unlatched, but the door, lid or whatever, will not yield/open regardless of the character's physical strength. The only way to get in or out or to open it is to smash or chop through the obstacle or the use of a Dispel Magic Barrier will open/unseal any ONE magically sealed door or lid, provided the spell is successful.
    At early levels, the mystic can only seal one item per incantation. However, at fourth level of experience and beyond, the arcanist can seal every door, window and enclosure within a 100 foot area (that can be an entire 50 to 80 foot house up to 3 stories high)!`;
    }
}

module.exports = Seal;