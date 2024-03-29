const Skill = require('../Skill');

class LoreMagic extends Skill {
    constructor() {
        super();
        this.name = `Lore: Magic`;
        this.group = `Technical`;
        this.isSecondary = true;
        this.description = `This area of study does not give the character any magical powers, or the ability to use Techno-Wizard devices, or the ability to read magic symbols.

This area of study provides general knowledge, theories and historical reference on how magic works, common magical powers and spells, their effects, who possesses such magic, notable creatures of magic, and the various types of practitioners of magic (Ley Line Walker, Elemental Fusionist, Techno-Wizard, Conjurer, Necromancer, etc.), places of reputed magical significance and power (Magic Zone, Tolkeen, etc.), and myths and legends about magic and the most famous magic items and notorious sorcerers. Although the character can not read runes or mystic symbols, they are likely to be able to recognize whether the symbol is a real magic ward, rune, warning, part of an inscription or spell, or a fake.`;
        this.bonus = `Recognize Magic Symbols, Runes and Circles: 15%, +5% per level of experience.
Recognize Enchantment: 10%, +5%per level of experience. (People under the influence of magic charms, possession, curses, mind control, and similar.)
Identify Magic Artifact: -15% to Lore: Magic skill. (This will impart general information about a magical artifact. How much information will depend upon the specific item, i.e. how famous/notorious it is, how recognizable it is, and so on.)
+5% to this skill if Anthropology [Science] is also taken.
+2% to this skill if Archaeology [Science] is also taken.
+5% to this skill if Mythology [Technical] is also taken.`;
        this.perLvl = 5;
        this.base = 25;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'anthropology' || skill === 'mythology') {
                this.skillBonus = this.skillBonus + 5;
            }
            if(skill === 'archaeology') {
                this.skillBonus = this.skillBonus + 2;
            }
        })
    }
}

module.exports = LoreMagic;