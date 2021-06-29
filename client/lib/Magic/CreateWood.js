const Spell = require('../Spell');

class CreateWood extends Spell {
    constructor() {
        super();
        this.name = 'Create Wood';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `10 feet (3m).`;
        this.duration = `Permanent.`;
        this.cost = `10 P.P.E. for soft wood for burning, 20 P.P.E. for hard wood for building.`;
        this.description = `    Create Wood does just that. It forces magical energy to draw together particles and fibers from the surrounding air and area, bond them together and multiply them on a molecular level to create wood. The shape can be two foot (0.6 m) long logs or six foot ( 1 .8 m) long, one foot (0.3 m) wide planks. Hard wood costs more to make but is excellent for building; soft, weak wood is used for burning. The use of this spell has allowed Dweomer City (and others) to use wood in buildings and various tools/weapons/items without chopping down lots of trees. Thus, the city sits in the middle of pristine wilderness, making it even harder to detect.
    The amount of wood created varies: Up to 100 lbs (45 kg) per every 10 (soft) or 20 (hard, building wood) P.P.E. expended.`;
        this.note = `Both the Conjurer and Earth Warlock can cast this spell at half the P.P.E.`;
    }
}

module.exports = CreateWood;