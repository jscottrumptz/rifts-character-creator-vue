const Psionic = require('../Psionic');

class GroupTrance extends Psionic {
    constructor() {
        super();
        this.name = 'Group Trance';
        this.group = 'Super';
        this.range = 'All willing subjects within 20 feet (6 m) of the psychic, + 10 feet (3 m) per level of experience.';
        this.duration = '2 minutes per level of experience or until the trance is broken, whichever comes first.';
        this.cost = '15 I.S.P.';
        this.savingThrow = `None for willing participants. Those unwilling to participate cannot be entranced.`;
        this.description = `    There are a couple of different applications for this power. The non-combat use is a sort of shared communication. Everybody entranced can share in the psionic experiences of the group leader, the character who is using the Group Trance power. First, the entire group of willing participants enters into a trance state. While entranced, the group is subtly linked to the character using the power. That psychic can then perform one or two other psychic communication abilities per melee round. These abilities are limited to a few forms of psionic communication (not Healing, Physical or Super-Psionic powers), including Clairvoyance, Empathy, Telepathy, Object Read, Presence Sense, Commune with Spirits, Remote Viewing, and Sixth Sense. The thoughts/visions/images, communications received by the lead psychic are simultaneously transmitted via the trance-link to all participants. They see,, know or feel everything he does. 
    The other use of this ability is to willingly pool the I.S.P. of the trance gr up to make it available to the lead psychic (the one who is using the Group Trance ability). Once every melee round, the psychic to whom they are linked can draw upon three I.S.P. points from each psychic in the trance group. I.S.P. cannot be drawn from characters who don't have any. These I.S.P. can be used by the lead psychic any way he desires. The others linked to him see, feel and experience whatever he does, including his rationale, motives and emotions. 
    In both instances, only the psychic group leader has any melee actions, and 'he is limited to two psionic actions/attacks while entranced. All those in the group are simply passive observers and secondary participants. P,.ll participants react calmly toward the events, emotions, and visions they experience while entranced. The moment the trance ends, they are back to normal and can respond as is appropriate. Only the lead psychic or the genuine fear of death can break the trance. All snap out of it even if only one person breaks the trance.`;
    }
}

module.exports = GroupTrance;