const Skill = require('../Skill');

class ChemistryPharmaceutical extends Skill {
    constructor() {
        super();
        this.name = `Chemistry: Pharmaceutical`;
        this.group = `Science`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `This is the study of drugs and their interaction with the human body. Knowledge includes a familiarity with common medical drugs, drug interactions, prescribed dosages, the use/distribution of drugs, their effects on the human body, and other biological applications. The character can recognize and prescribe common drugs, knows their effects and side-effects, recognizes poisons/toxins, and can safely administer painkillers, hallucinogens, stimulants, relaxants, antibiotics, antidepressants, anti-psychotics, sodium pentothal/truth serum, tranquilizers, sedatives, and so on. Also has a theoretical understanding of Juicers and the drugs they use.

A failed roll (by the DM) means the drug is improperly administered or prepared, and has no effect.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+10% to Lore: Juicer.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = ChemistryPharmaceutical;