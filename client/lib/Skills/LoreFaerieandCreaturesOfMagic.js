const Skill = require('../Skill');

class LoreFaerieandCreaturesOfMagic extends Skill {
    constructor() {
        super();
        this.name = `Lore: Faerie & Creatures of Magic`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The study of Faeries, Goblins, shape changers, giants, dragons, the sphinx, and creatures of magic throughout the ages, via lore, myths, legends, and first-hand accounts. This skill is the same as any other 'Lore' skill but the emphasis is on Faerie Folk, dragons and other magical creatures and beings - creatures that are neither demonic nor supernatural, but long-lived and attributed with magical powers. The Faeries of ancient myths include Faeries, Sprites, Pixies, Brownies, Leprechauns, Bogies, Toad Stools, Pucks, Kelpies, Gnomes, Goblins, Tengu, Fox Faeries, and a host of other creatures of magic.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = LoreFaerieandCreaturesOfMagic;