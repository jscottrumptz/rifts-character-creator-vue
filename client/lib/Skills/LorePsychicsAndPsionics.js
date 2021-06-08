const Skill = require('../Skill');

class LorePsychicsAndPsionics extends Skill {
    constructor() {
        super();
        this.name = `Lore: Psychics & Psionics`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The general knowledge about psionic powers, how they are believed to work,how they affect people,who possesses them, and the different types of psychics in the world (Psi-Stalkers, Simvan, Mind Melters, Bursters, Mind Bleeders, Zappers, Psi-Ghosts, Cyber-Knights, etc.). May also know something about the most infamous supernatural creatures that possess powers of mind control and psychic ability (Vampires, Possessing Entities, Mindolars, Raksashas, etc.), as well as some of the notable psionic weapons and symbiotes of Atlantis, and/or mind control in all its forms: drugs, brain washing, hypnosis, magic, psionics, the vampire, etc., as well as myths and legends about such places as the Astral Plane, Dreamstream, and Psyscape. The character does not have to be a psychic themselves to know about psychic abilities and the beings who possess them.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Anthropology [Science] is also taken.
+2% to this skill if Archaeology [Science] is also taken.`;
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
            if(skill === 'archaeology') {
                this.skillBonus = this.skillBonus + 2;
            }
        })
    }
}

module.exports = LorePsychicsAndPsionics;