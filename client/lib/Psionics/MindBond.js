const Psionic = require('../Psionic');

class MindBond extends Psionic {
    constructor() {
        super();
        this.name = 'Mind Bond';
        this.group = 'Super';
        this.range = 'Touch.';
        this.duration = 'Special.';
        this.cost = '10 I.S.P.';
        this.savingThrow = `Standard.`;
        this.note = `Skills and skill bonuses are also temporarily absorbed, meaning that the psychic possesses all of his victim's skills and skill bonuses (and vice versa). Physical attributes, such as S.D.C. and attribute bonuses gained through physical training, are NOT acquired. 
    Alien or extremely mentally and/or emotionally disturbed minds can permanently impair the psionic's own mind as a result of the bond. If bonded with an alien or extremely disturbed person, roll on the following table for a permanent insanity:
• 01%-40%: No Insanity.
• 41%-80%: Phobia. 
• 81%-90%: Affective Disorder. 
• 91%-00%: Neurosis.
`;
        this.description = `    This creates an instant mind link between the psionic and the victim. When this happens, each will learn EVERYTHING there is to know about the other. This includes all skills, secret identities, phobias, etc. In both cases, the memory is complete for only 3-12 hours (roll 3D4). After that, the characters must roll under 15% to recall any particular item. A month later, all memories completely disappear. Players should bear in mind that only the psionic knows the memories are not permanent, thus the other person would have no reason to make notes or act quickly before the memories fade.`;
    }
}

module.exports = MindBond;