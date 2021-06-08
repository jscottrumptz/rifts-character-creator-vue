const Skill = require('../Skill');

class LoreDemonsAndMonsters extends Skill {
    constructor() {
        super();
        this.name = `Lore: Demons & Monsters`;
        this.group = `Technical`;
        this.isSecondary = true;
        this.description = `This is the study of demonic creatures and supernatural monsters common to Rifts Earth throughout the ages and around the world. General knowledge includes legends of ancient and primitive cultures. Dark Age tales, and the myths and legends of vampires and the most infamous demons and monsters, including the dark gods they serve. Specific knowledge is limited to the continent where the character lives/originates, and includes the names of the demons and monsters common to that part of the world, appearance, reputed places of demonic habitation or attraction, and the creatures' known powers, habits, appearance, weaknesses, strengths, powers, abilities, demonic possession, desires and goals. A master of this lore may be able to identify a particular type of monster by hearing its description or a description of its actions, seeing a drawing or photograph, or even by its footprint, how it behaved, killed, or exhibited certain abilities.

This skill can be taken repeatedly to know about demons common to other lands (England, Europe, Asia, South America, etc.), but each demographic location counts as one of the character's skill selections.`;
        this.bonus = `+5% to this skill if Anthropology [Science] is also taken.
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

module.exports = LoreDemonsAndMonsters;