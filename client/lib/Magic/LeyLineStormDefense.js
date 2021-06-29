const Spell = require('../Spell');

class LeyLineStormDefense extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Storm Defense   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
        this.range = `10 foot (3 m) diameter per level of the spell caster, x 10 if performed at a ley line nexus. x 100 if a triangle of connecting ley lines is involved, purging the storm from the area along, within and around the triangle.`;
        this.duration = `10 minutes per level of the spell caster, x 10 if performed at a ley line nexus, x 100 if done at a nexus that is part of a triangular conjunction of ley lines.`;
        this.cost = `180 P.P.E. (half for Ley Line Walkers and Shifters).`;
        this.limitations = `Requires one or more ley lines and knowledge that a Ley Line Storm is coming (Line Walkers and Shifters can sense a coming Storm at least 1D4x10 minutes before it arrives).`;
        this.savingThrow = `Not applicable.`;
        this.description = `    This spell creates an invisible barrier over the defended area that causes natural and magically created Ley Line Storms to skip over it to continue down the line. If the area of protection is at the end of a line it will either send it back in the direction it came or down a different, intersecting line.`;
        this.note = `The cities of Tolkeen and Freehold use this spell whenever a storm is on the horizon to protect most of their respective communities.`;
    }
}

module.exports = LeyLineStormDefense;