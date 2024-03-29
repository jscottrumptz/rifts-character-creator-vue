const Skill = require('../Skill');

class Impersonation extends Skill {
    constructor() {
        super();
        this.name = `Impersonation`;
        this.group = `Espionage`;
        this.isSecondary = false;
        this.description = `The skill enables the character to impersonate another person or general type of person (soldier, worker, etc.). This means they must have a rudimentary (if not comprehensive) knowledge of the person or general type of personnel that they plan to impersonate. This includes a knowledge of that person or type of person or job, work procedure or protocol, local laws and customs, individual habits, dress/uniform/lifestyle, hierarchy of command/leadership, rank, and speaking the proper language(s).

The success of one's impersonation/disguise can only be determined after exposing oneself to those whom you wish to trick.

A successful impersonation requires the player to roll under his character's Impersonation skill for each of the first three encounters. Afterward, the character must roll under their skill for each encounter with an officer, high ranking official or any close friend or close family member who knows the person being impersonated. If interrogated/questioned, they must successfully roll after every three questions or be revealed as an impostor. A failed roll means the impersonation has failed and they may be in immediate danger.`;
        this.bonus = `+10% to the Undercover Ops [Espionage] skill if this skill is taken.
+5% to this skill if Imitate Voices & Sounds [Rogue is also taken.
+5% to this skill if Performance [Communication] is also taken.
+5% to this skill if Research [Technical] is also taken.
+2% to this skill if Wardrobe & Grooming [Domestic] is also taken.`;
        this.perLvl = 4;
        this.baseTwo = 16;
        this.base = 30;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'performance' || skill === 'imitateVoicesAndSounds' || skill === 'research') {
                this.skillBonus = this.skillBonus + 5;
            }
            if(skill === 'wardrobeAndGrooming') {
                this.skillBonus = this.skillBonus + 2;
            }
        })
    }
}

module.exports = Impersonation;