const Skill = require('../Skill');

class LoreAmericanIndiansCowboy extends Skill {
    constructor() {
        super();
        this.name = `Lore: American Indians`;
        this.group = `Cowboy`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `Characters with this skill can recognize the different tribes and nations, warriors and shamans,totems,fetishes, charms, and weapons, identify the people by their housing, clothing and weapons, and has a fundamental understanding about Native Americans' history, society, traditional beliefs, customs and laws (at least the most notable). They also know about Native American gods, spirits, and magic.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Anthropology [Science] is also taken.
+2% to this skill if Archaeology [Science] is also taken.
Characters of Native American descent gain a one-time +10% bonus.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'anthropology') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = LoreAmericanIndiansCowboy;