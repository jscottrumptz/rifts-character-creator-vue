const Skill = require('../Skill');

class LoreAmericanIndiansTechnical extends Skill {
    constructor() {
        super();
        this.name = `Lore: American Indians`;
        this.group = `Technical`;
        this.isSecondary = true;
        this.description = `Characters with this skill can recognize the different tribes and nations, warriors and shamans,totems,fetishes, charms, and weapons, identify the people by their housing, clothing and weapons, and has a fundamental understanding about Native Americans' history, society, traditional beliefs, customs and laws (at least the most notable). They also know about Native American gods, spirits, and magic.`;
        this.bonus = `+5% to this skill if Anthropology [Science] is also taken.
+2% to this skill if Archaeology [Science] is also taken.
Characters of Native American descent gain a one-time +10% bonus.`;
        this.perLvl = 5;
        this.base = 25;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'anthropology') {
                this.skillBonus = this.skillBonus + 5;
            }
            if(skill === 'archaeology') {
                this.skillBonus = this.skillBonus + 2;
            }
        })
    }
}

module.exports = LoreAmericanIndiansTechnical;