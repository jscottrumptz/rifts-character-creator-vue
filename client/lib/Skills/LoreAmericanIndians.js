const Skill = require('../Skill');

class LoreAmericanIndians extends Skill {
    constructor() {
        super();
        this.name = `Lore: American Indians`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `Characters with this skill can recognize the different tribes and nations, warriors and shamans,totems,fetishes, charms, and weapons, identify the people by their housing, clothing and weapons, and has a fundamental understanding about Native Americans' history, society, traditional beliefs, customs and laws (at least the most notable). They also know about Native American gods, spirits, and magic.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `Characters of Native American descent gain a one-time +10% bonus.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = LoreAmericanIndians;