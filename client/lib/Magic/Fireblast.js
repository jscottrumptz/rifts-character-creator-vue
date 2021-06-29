const Spell = require('../Spell');

class Fireblast extends Spell {
    constructor() {
        super();
        this.name = 'Fireblast';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `50 feet (15. 2 m).`;
        this.duration = `Instant.`;
        this.cost = `8 P.P.E.`;
        this.damage = `3D6 M.D.`;
        this.savingThrow = `Dodge.`;
        this.description = `    Fireblast is a simple offensive spell in which the mage shoots Mega-Damage flames from his or her hands. The blast is only one foot (0.3 m) wide, but extends for the full 50 feet (15.2 m). Everything in its path will take damage unless those in its path can dodge or is so massive (Le. a tank, giant robot, wall of an M.D.C. building, etc.) that it stops the blast from traveling its full range. The blast can be stopped by doors, walls, etc., but only if the spell's damage does not destroy the object first. Otherwise, the flames keep going. This is a great spell for clearing out passageways.`;
    }
}

module.exports = Fireblast;