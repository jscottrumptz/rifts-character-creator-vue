const Skill = require('../Skill');

class UndercoverOps extends Skill {
    constructor() {
        super();
        this.name = `Undercover Ops`;
        this.group = `Espionage`;
        this.isSecondary = false;
        this.note = `This skill is typically reserved for law enforcement, espionage agents, mercenaries, con artists, and other criminal types.`;
        this.description = `The training in undercover operations in which the character learns the methods and techniques of blending smoothly into the background and appearing as if they belong there (just another unmemorable face in the crowd or one of the guys), as well as assuming a false identity and playing a 'role' to track, spy upon, or gather information or evidence.`;
        this.bonus = `+5% to this skill if Performance [Communication] is also taken.
+10% to this skill if Impersonation [Espionage] is also taken.
+2% to this skill if Wardrobe & Grooming [Domestic] is also taken.`;
        this.perLvl = 5;
        this.base = 30;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'performance') {
                this.skillBonus = this.skillBonus + 5;
            }
            if(skill === 'impersonation') {
                this.skillBonus = this.skillBonus + 10;
            }
            if(skill === 'wardrobeAndGrooming') {
                this.skillBonus = this.skillBonus + 2;
            }
        })
    }
}

module.exports = UndercoverOps;