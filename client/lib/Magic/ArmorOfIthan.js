const Spell = require('../Spell');

class ArmorOfIthan extends Spell {
    constructor() {
        super();
        this.name = 'Armor of Ithan';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `Self or other by touch.`;
        this.duration = `One minute (4 melee rounds) per level of the spell caster.`;
        this.cost = `10 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This powerful spell instantly creates an invisible, weightless, noise-less, full suit of mystic armor upon the spell caster. Or the magic armor can be instantly created upon anyone, as long as the spell caster invokes the spell while touching the intended recipient. Named after the magic armor of the Dwarven King !than, this mystic armor has an M.D.C. of 1O per level of the spell caster's experience. Magic fire, lightning, and cold do half damage to it.`;
    }
}

module.exports = ArmorOfIthan;