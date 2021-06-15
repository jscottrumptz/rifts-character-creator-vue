const Psionic = require('../Psionic');

class PsychosomaticDisease extends Psionic {
    constructor() {
        super();
        this.name = 'Psychosomatic Disease';
        this.group = 'Super';
        this.range = '10 feet (3 m) and verbal suggestion. ';
        this.duration = '1D4 days per level of the psychic. ';
        this.cost = '30 I.S.P.';
        this.savingThrow = `Standard.`;
        this.description = `    This power employs the principle of mind-over-matter and mind control by inducing the victim to believe he suffers from a particular disease. although no actual physical cause can be found. It is all in the victim's mind. 
    This is done in a similar way as Hypnotic Suggestion, requiring the psychic to "suggest" that the character looks ill or that a particular dis-ease is in the area, as well as mention the name of a specific disease along with the most notable (and debilitating or frightening) symptoms. Within 2D6 minutes, the intended victim will begin to come down with those symptoms. He will suffer from the affliction with all its pain and penalties, until one of the following occurs: The psychic who caused the affliction removes it, the character is healed by a psychic healer, a successful magical or priestly Remove Curse spell or ritual is per-formed, or the Psychosomatic Disease runs its course (see duration above). 
    In the meantime, the character will suffer from physical trauma and symptoms (fever, vomiting, coughing, convulsions, skin rashes, hives, etc.) associated with that disease, as well as emotional anguish. In most cases, the disease is debilitating for days, but sometimes it can be deadly, causing the victim to die from dehydration, starvation, injury, etc., brought on by the symptoms and/or fear of the psionic illness.`;
    }
}

module.exports = PsychosomaticDisease;