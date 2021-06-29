const Spell = require('../Spell');

class LeyLineGhost extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Ghost';
        this.group = 'Invocation';
        this.level = 'Ten';
        this.range = `Self or one other by touch at the moment of death.`;
        this.duration = `24 hours per level of the deceased.`;
        this.cost = ` 80 P.P.E. self or 240 P.P.E. to preserve another (in both cases, half for Ley Line Walkers, Shifters and Necromancers).`;
        this.savingThrow = `Standard, but only if the dying character resists the magic, none if cast upon oneself or a willing participant.`;
        this.description = `    This is an eerie spell that can keep the life essence and mind of a dying practitioner or creature of magic alive on earth as a ghostly energy being. The "ghost" is basically a fa int, pale white semi-transparent image of the deceased. The character is completely intangible and glides along the ley line rather than walk. The ghost can speak, but only in a soft-spoken voice. He can not speak loudly or shout, but can howl and shriek, only no words can be spoken. This "spirit" essence is intangible and can not be hurt by physical attacks, energy blasts or weather conditions - they all pass harmlessly through it. Likewise, magic swords, TW weapons and most types of magic have no effect on the ghost. Only magic and psionics that affect the mind or emotions can have an impact on the ghost. Even then, neither magic nor psionics can pull the Ley Line Ghost from the line.
    The ghost must use magic and/or psionics to touch or affect the physical world, however, total P.P.E. is limited to P.E. attribute +1 point per level of experience, and I.S.P. to M.E. attribute +l point per level. As a ghost the deceased can not draw upon the ley line energy, but his personal reserve regenerates completely every 24 hours. 
    The Ley Line Ghost is magically tied to the ley line where the individual died. He can walk along the ley line and any connecting lines, but can not leave that line by any means, not by teieportation nor by dimensional Rift. The character will remain linked to the Earth via that specific ley line for one day per level of experience. After that, the ghost vanishes and goes wherever mortal spirits go. During his time on Earth the ghost can talk, offer advice, give instructions, make warnings, say good-bye to those he cares about, or scare and trouble those he dislikes. 
    This spell is typically performed when the dying character's work is not yet finished or he needs to tell somebody something. Since the spirit is rooted to the ley line, the ghost usually seeks to enlist the aid of sympathetic strangers (like the player characters) to finish what must be done or to deliver a message. The spell may also be used as a way for the character to linger on Earth in order to say good-bye to loved ones or to extract revenge or to plague enemies for a few days more (again, probably by enlisting the aid of strangers through a stirring appeal or trickery). Practitioners of magic who are of good or aberrant alignment will not use this spell on others unless they are asked to do so by the dying individual, or the situation is so dire that it is a necessity (Le. "Only Bob has the information we need. If he dies, that information dies with him. Sorry, my friend . . . ").`;
        this.note = `The Ley Line Ghost can not possess another living being nor inhabit an inanimate object. An exorcism will send it to the other end of the ley line. Also note that this spell does NOT kill. It is performed in the last moments of life (within 30 minutes of expiring), and when the individual dies, he becomes a Ley Line Ghost.`;
    }
}

module.exports = LeyLineGhost;