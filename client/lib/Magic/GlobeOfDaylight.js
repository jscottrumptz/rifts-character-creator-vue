const Spell = require('../Spell');

class GlobeOfDaylight extends Spell {
    constructor() {
        super();
        this.name = 'Globe of Daylight';
        this.group = 'Invocation';
        this.level = 'One';
        this.range = `Near self or up to 30 feet (9.1 m) away.`;
        this.duration = `12 melees (3 minutes) per level of experience.`;
        this.cost = `2 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    A small globe or sphere of true daylight is magically created. The light is bright enough to light up a 12 foot (3.6 m) area per each level of its creator's experience. Because it is daylight, it can ward off vampires and most other types of undead and demons who fear or are hurt by sunlight, keeping them at bay just beyond the edge of the light. The creator of the globe can mentally move it along with himself, or send it up to thirty feet (9. I m) ahead. The maximum speed at which the globe can travel is equal to a speed attribute of 12.`;
    }
}

module.exports = GlobeOfDaylight;