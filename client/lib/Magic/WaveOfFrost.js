const Spell = require('../Spell');

class WaveOfFrost extends Spell {
    constructor() {
        super();
        this.name = 'Wave of Frost';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `200 feet (61 m) +20 feet (6 m) per level of experience.`;
        this.duration = `One minute (4 melee rounds) per level of experience.`;
        this.damage = `Special.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `Special.`;
        this.description = `    This magical attack is designed to damage delicate flowers and roots of plants. The Wave of Frost can be cast several hundred feet away and covers a 6 foot (1 .8 m) radius per level of experience. All flowering plants caught in the frost will suffer damage, 2D4x 10% will die, meaning the yield of fruit, vegetables, etc., normally borne by that plant(s) will be reduced by that amount. In addition, 1D4x 10% of the plants are irreparably damaged (Shaman, Druid or Elemental magic is all that can restore them) and will die within 48 hours. This spell can also be used to obscure windows by covering them in frost (takes one melee to scrape a peephole).`;
    }
}

module.exports = WaveOfFrost;