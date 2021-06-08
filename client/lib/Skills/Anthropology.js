const Skill = require('../Skill');

class Anthropology extends Skill {
    constructor() {
        super();
        this.name = `Anthropology`;
        this.group = `Science`;
        this.isSecondary = `false`;
        this.note = `The anthropologist is one of the few who knows about pre-Rifts human society, culture and artifacts. As a result, he can often identify pre-Rifts technology and man-made creations, and is also knowledgeable in their Black Market value as well as the many CS laws that prohibit the possession,sale, and scavenging of ancient artifacts.`;
        this.description = `This is the behavioral study of man and other intelligent life-forms and their environments. Studies include societies, customs and beliefs, religions, and political structure, as well as rudimentary history and archaeological background. It is important to note that anthropology is more concerned with the study of modern races and societies than ancient ones. This is especially important when dealing with alien races and cultures in order to avoid accidentally breaking taboos or codes of behaviour. It also tells the anthropologist whether they may be dealing with a dangerous people (hate humans, fear technology or magic, are cannibals, worship demons, etc,).

This skill can also be used to examine artifacts and ancient or alien ruins to identify the probable people/race, purpose, culture and technological level. The character can identify the period of time the item was used (contemporary or ancient), and whether it is human or alien, but is not skilled enough to tell whether an artifact is authentic or a forgery.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to any Lore [Technical] skills if this skill is taken.
+5% to History:Pre-Rifts [Technical] skill if this skill is taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Anthropology;