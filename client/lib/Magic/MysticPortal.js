const Spell = require('../Spell');

class MysticPortal extends Spell {
    constructor() {
        super();
        this.name = 'Mystic Portal';
        this.group = 'Invocation';
        this.level = 'Ten';
        this.range = `20 feet (6.1 m) away. 10 feet (3 m) wide by 20 feet (6.1 m) tall portal/opening.`;
        this.duration = `Four melee rounds per level of the spell caster.`;
        this.cost = `60 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This spell creates a dimensional Rift in the fabric of space allowing the spell caster to use it in the following ways: 
    Pass through solid walls:
The mage has but to weave the spell targeting a particular, blocked area. The area will shimmer bright and suddenly, a portal or passage will appear as if cut out of the very stone. The portal can create a 12 foot (3.6 m) deep passage per each level of the spell caster in any substance. 
    Teleportation: 
The portal can be a doorway to a nearby location known to the spell caster, flawlessly traveling hundreds of feet in an instant. The portal can be placed on a vertical wall, the floor or ceiling. Looking into it reveals what is on the other side. Stepping through it will instantly place the character in that location. Range is a meager 100 feet (30.5 m) per level of experience. The number of how many people can pass through will depend upon how quick they are moving and how long the mage keeps it open; he can close it at any time. Fig-ure 1D6+6 can pass through per melee round. 
    One-way passage: 
Once a character steps through a Mystic Portal, the opening behind him is gone (although people on the portal side can see both the portal and the person who just stepped through it). To re-turn, a new portal must be made on the other side by invoking another Mystic Portal spell. When the spell duration ends, the Mystic Portal vanishes. As usual, the mage who created it can make it vanish at will. A Negate Magic may also eliminate it if the spell is successful.`;
        this.note = `A Mystic Portal can NOT be cast on people to use as a Teleport spell. Mystic portals must be cast on a vertical, stationary sur-face. An Impenetrable Wall of Force will stop a Mystic Portal.`;
    }
}

module.exports = MysticPortal;