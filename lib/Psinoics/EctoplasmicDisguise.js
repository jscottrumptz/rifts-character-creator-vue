const Psionic = require('../Psionic');

class EctoplasmicDisguise extends Psionic {
    constructor() {
        super();
        this.name = 'Ectoplasmic Disguise';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = '10 minutes per level of experience.';
        this.cost = '12 I.S.P.';
        this.description = `    This is an enhanced control over ectoplasm that gives the psychic the ability to cover and disguise his physical features. Ectoplasm is created as normal. with the mysterious pseudo-substance rising from the pores of the skin. Instead of forming wispy tentacles, the ectoplasm covers the face. As it solidifies, it becomes a sort of putty-like material that can be mentally shaped and molded by the psychic. Once the de-sired shapes and features are achieved, the psychic can make the ectoplasm look like real flesh. The best way to create an Ectoplasmic Disguise is for the psychic to look at a photograph or a frozen video image and concentrate on that image while the ectoplasm automatically molds into that shape/image, including skin color. Not only can the psychic create a mask to hide his facial features, but he can also change the shape and bulk of his body with ectoplasm, adding a pot belly, muscles, a tail or extra eye, etc.`;
        this.baseSkill = `50% + 3% per level of experience (add+ I 6% if the character has the Disguise skill). This percentage applies primarily when trying to accurately imitate a specific person's identity. In most other cases, the disguise is successful in that it obscures the psychic's true identity.`
        this.limitations = `An Ectoplasmic Disguise is especially effective from a distance, but does not hold up under close scrutiny. The ectoplasm always has a bit of a "dull" and "pasty" appearance, regardless of skin color. If punched, cut, scraped, etc., the ectoplasmic covering will tear away and, in a matter of seconds, noticeably reform to cover the tear/damage. 
    The psychic must also concentrate on maintaining his disguise, which means his attention is divided and concentration hampered. While the disguise is maintained, the psychic suffers the following penalties: -4 on initiative and reduce all combat bonuses, attacks per melee, running speed and skill performance by half. To perform better, the character must relinquish some his control over the disguise, with notable results, like features obviously shifting, drooping or even melting. If the character is seriously injured, knocked unconscious or slain, the ectoplasm melts away, turns into floating globs and disappears into him in a matter of seconds.
`
    }
}

module.exports = EctoplasmicDisguise;