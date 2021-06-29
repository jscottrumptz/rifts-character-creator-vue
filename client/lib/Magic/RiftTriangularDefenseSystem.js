const Spell = require('../Spell');

class RiftTriangularDefenseSystem extends Spell {
    constructor() {
        super();
        this.name = 'Rift Triangular Defense System';
        this.group = 'Invocation';
        this.level = 'Fourteen';
        this.range = `Only where three ley lines crisscross to create a triangle of magic power, and even then only the area within the triangle is protected.`;
        this.duration = `One minute (four melee rounds) per level of the spell caster.`;
        this.cost = `840 P.P.E. to activate (half for Shifters), the lines themselves keep it going and the field resealing for the duration.`;
        this.savingThrow = `None.`;
        this.description = `    The area within a triangle of ley lines can be protected by a barely visible bubble of magic energy that works like a force field. A faint blue energy hue is visible at night or on heavily overcast days, and the occasional stream of magic energy ripples across the dome-shaped surface like an electrical current.
    Anything striking the force field is stopped as if hitting an invisible wall. Inflicting approximately 100 M.D. to a ten foot (3 m) diameter of the field will momentarily disrupt that ten foot area for I D4 seconds, allowing two people or man-sized objects to pass through the field for each second of disruption (or one large vessel if opened for two seconds or longer). After those few seconds the field heals itself and another 100 M.D.C. is necessary to momentarily punch through it.`;
        this.note = `One can combine the Triangular Defense with the Swallowing Rift.`;
    }
}

module.exports = RiftTriangularDefenseSystem;