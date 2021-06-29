const Spell = require('../Spell');

class Shatter extends Spell {
    constructor() {
        super();
        this.name = 'Shatter';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `20 feet (6 m) or by touch.`;
        this.duration = `Instant.`;
        this.cost = `5 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This spell causes brittle, comparatively fragile S.D.C. objects, like glass, ceramic pottery, china, hardened clay, sandstone, ice, peanut brittle, etc., to instantly shatter into hundreds of pieces with a mere touch or mean look (and foul intent). This spell is not effective against objects weighing more than 100 pounds (45 kg), Mega-Damage materials, magic items, flexible or elastic materials (cloth, plastic, rubber, etc.) and substances with the toughness of wood or better. Likewise, it cannot be used against living beings (ie. cannot shatter bone, claws, teeth or even fingernails) or Mega-Damage beings.`;
    }
}

module.exports = Shatter;