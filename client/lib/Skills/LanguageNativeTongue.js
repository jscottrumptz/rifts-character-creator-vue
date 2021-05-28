const Skill = require('../Skill');

class LanguageNativeTongue extends Skill {
    constructor() {
        super();
        this.name = `Language: Native Tongue`;
        this.group = `Communication`;
        this.isSecondary = `true`;
        this.note = `An O.C.C. skill bonus usually applies to 'other' languages and communication skills, not the Native Tongue.`;
        this.description = `The character has a very good to excellent understanding of their native language. It is not, however, an absolute and total understanding, because there are always words, scientific terms, slang, and fancy or outdated words and terms a character may not know. Thus, the necessity for dictionaries, thesauruses, grammar guides and computer spelling programs.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `1`;
        this.baseTwo = ``;
        this.base = `88`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = LanguageNativeTongue;