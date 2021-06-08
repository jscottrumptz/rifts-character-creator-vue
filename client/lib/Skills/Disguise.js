const Skill = require('../Skill');

class Disguise extends Skill {
    constructor() {
        super();
        this.name = `Disguise`;
        this.group = `Espionage`;
        this.isSecondary = false;
        this.description = `The character knows how to apply make-up, wigs, skin putty, dyes, and other special effects in order to alter their appearance or that of somebody else.`;
        this.bonus = `+5% to the Undercover Ops [Espionage] skill if this skill is taken.
+5% to the Impersonation [Espionage] skill if this skill is taken.
+2% to this skill if Wardrobe & Grooming [Domestic] is also taken.`;
        this.perLvl = 5;
        this.base = 25;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'wardrobeAndGrooming') {
                this.skillBonus = this.skillBonus + 2;
            }
        })
    }
}

module.exports = Disguise;