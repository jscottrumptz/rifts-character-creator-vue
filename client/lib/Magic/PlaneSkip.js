const Spell = require('../Spell');

class PlaneSkip extends Spell {
    constructor() {
        super();
        this.name = 'Plane Skip';
        this.group = 'Invocation';
        this.level = 'Ten';
        this.range = `Self and one other by touch.`;
        this.duration = `Instant.`;
        this.cost = `65 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This is a dangerous spell, because the mage has very limited control over the result. Whenever the sorcerer steps into a dimensional portal/Rift/gateway/circle or is caught in a dimensional disturbance that will send him to another dimension, he can cast the Plane Skip spell to escape and "skip" past the original destination to a different dimension. The problem is, the dimension is usually a random, alien place. 
        
    Roll percentile on the following table: 
01-20%: To a dimension known by the spell caster; back home, the Astral Plane or any other place known to the mage. 
21-25%: Astral Plane, but the spell caster may be stuck in limbo for a long time unless the character can Astral Project.
26-30%: The Dimensional Market at Splynn, in Atlantis!
31-00%: Another dimension of the G.M.'s choice. Possibilities using Palladium products could include Wormwood. Phase World ( or any of the worlds in the Three Galaxies), any of the worlds in Skraypers, the Realm of Demons or Gargoyles, the Palladium Fantasy World, Heroes Unlimited World, etc. Mega-Damage characters, spells, powers and weapons who enter an S.D.C. environment turn into S.D.C. equivalents.`;
    }
}

module.exports = PlaneSkip;