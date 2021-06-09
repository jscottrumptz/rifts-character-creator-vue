const Skill = require('../Skill');

class LiteracyOther extends Skill {
    constructor() {
        super();
        this.name = `Literacy: `;
        this.group = `Communication`;
        this.isSecondary = true;
        this.note = `Like the Language skill, the character may be able to read and write several different languages, but each language counts as a separate skill selection. American/English is the official written language of the Coalition.`;
        this.description = `The written word is more valuable than ever in the world of Rifts, yet, sadly, the majority of the world's population can not read or write. Illiteracy is encouraged by the Coalition as it is a means of securing the empire's power base and hold over the people. Those who are literate will be viewed with suspicion unless they are a member of the Coalition's elite aristocracy or military.`;
        this.perLvl = 5;
        this.base = 30;
        this.textEntry = 'Enter Language Type';
        this.removePostPick = false;
    }
}

module.exports = LiteracyOther;