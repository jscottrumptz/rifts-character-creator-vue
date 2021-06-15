const Psionic = require('../Psionic');

class PsionicInvisibility extends Psionic {
    constructor() {
        super();
        this.name = 'Psionic Invisibility';
        this.group = 'Super';
        this.range = 'Line of sight or 100 foot (30.5 m) radius.';
        this.duration = 'One minute per level of experience.';
        this.cost = '10 I.S.P.';
        this.savingThrow = `Potential victims are -2 to save; area effect.`;
        this.description = `    Psionic Invisibility is the ability to remain undetected when in plain sight. This is accomplished via a telepathic impulse that convinces by-standers that the psychic is not a threat and insignificant - beneath their notice. Those affected by the impulse are unable to see the character, and subconsciously avoid colliding with him; they don't see him on a conscious level. Note: This invisibility works only if the character is "passing through" or hiding, and honestly has no intention of attacking or hurting anybody in the area. The slightest ill intent or act toward perpetrating violence instantly cancels the psionic influence. 
    Individuals watching through video monitors and other sensory equipment can be similarly tricked into ignoring the psychic, but only if within his radius of influence. Those out of range will react appropriately, and once the psychic has been seen, that person is immune to his ability to seem invisible. Likewise, while a watch guard may not see or react to the psychic, he will be captured and recorded on film and by sensors. Video cameras, computers and similar devices are never fooled by this power; they are able to notice and record the character as nor-mal (some may sound an alarm too).`;
    }
}

module.exports = PsionicInvisibility;