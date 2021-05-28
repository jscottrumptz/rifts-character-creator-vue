const Skill = require('../Skill');

class LiteracyNativeTongue extends Skill {
    constructor() {
        super();
        this.name = `Literacy: Native Tongue`;
        this.group = `Communication`;
        this.isSecondary = `true`;
        this.note = `The ability to read and write is a rare and valuable commodity on Rifts Earth. The majority of the world's population can not read. Illiteracy is encouraged by the Coalition States (and other kingdoms) as a means of keeping the secrets of the past for themselves, and their people ignorant and under their control. Within the CS only scientists, engineers, military leaders, and the elite aristocracy are literate (typically in American only). Outsiders who can read are looked upon with suspicion or as dangerous freethinkers.`;
        this.description = `The character can read and write the language of their culture. This is usually the common language where the character was born and grew up (or has lived most of their life). For example, most people born in America speak, read and write American English, complete with contemporary slang. English is their predominant language, even if their ethnic heritage has roots in another country (Mexico, Poland, Russia, Cuba, etc.). Reading and writing means the character can read and comprehend the written word, read written instructions, printed books, etc. This skill has no bearing on creative writing.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = LiteracyNativeTongue;