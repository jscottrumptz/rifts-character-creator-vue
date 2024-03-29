const Skill = require('../Skill');

class Mythology extends Skill {
    constructor() {
        super();
        this.name = `Mythology`;
        this.group = `Technical`;
        this.isSecondary = true;
        this.description = `The skill includes a general knowledge of the most well known world myths,including Greek, Roman, and Egyptian, plus extensive knowledge of a particular country's or culture's myths relating to ghosts, spirits,demons, Goblins, Faerie Folk, monsters, dragons, immortals, undead, Elemental forces,supernatural animals, gods and magic. All countries have their share of unique myths. In North America of Rifts Earth that includes myths about the Glitter Boy, Cyber-Knights, the Vampire Kingdoms of Mexico and the Two Hundred Years Dark Age.`;
        this.bonus = `+5% to the Lore: Magic [Technical] skill if this skill is taken.
+5% to the Lore: Demons & Monsters [Technical] skill if this skill is taken.`;
        this.perLvl = 5;
        this.base = 30;
    }
}

module.exports = Mythology;