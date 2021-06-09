const Skill = require('../Skill');

class LanguageOther extends Skill {
    constructor() {
        super();
        this.name = `Language: `;
        this.group = `Communication`;
        this.isSecondary = true;
        this.note = `There are nine major languages in the world of Rifts, they include:-
English (the universal language of the American continents).
Techno-can (basic but modified American/English; a universal computer/techno language used in high-tech computer communications and systems. Not used as an everyday spoken language but as a universal computer language).
Spanish (the second major tongue of the Americas).
Japanese.
Chinese.
Euro (a blend of Russian, German, and Polish).
Dragonese (Elven from Palladium).
Gobbely (goblin, hob-goblin, orc, and ogre from Palladium).
Faerie Speak (faerie folk as found in Palladium).`;
        this.description = `Characters with a language skill can understand and speak in a language other than their own native tongue. Language is one of the few skills that can be selected repeatedly in order to select several different languages. Each selection gives the character knowledge of a different language and costs one skill selection each time.`;
        this.perLvl = 5;
        this.base = 50;
        this.textEntry = 'Enter Language Type';
        this.removePostPick = false;
    }
}

module.exports = LanguageOther;