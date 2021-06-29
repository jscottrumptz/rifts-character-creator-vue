const Spell = require('../Spell');

class CharismaticAura extends Spell {
    constructor() {
        super();
        this.name = 'Charismatic Aura   ';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `60 foot radius (18.3 m).`;
        this.duration = `Six melee rounds per level of experience.`;
        this.cost = `10 P.P.E.`;
        this.savingThrow = `Standard.`;
        this.description = `    A particularly handsome tool of deception, this magic can be cast upon the spell caster or another person. The spell instantly enhances that person's Physical Beauty by eight points, and in-creases his charisma to charm all who behold him. Although the focal point of the spell is the person on whom it was cast, it affects everybody in a 60 foot (18.3 m) radius (emanating from the person with the charismatic aura). Thus, everybody in that radius is allowed a saving throw vs magic. Those who successfully save will not be affected at all; those who fail to save are charmed and will respond accordingly. 
The person with a charismatic aura can invoke one of three responses: friendship/trust, power/fear, and successful deception.
 
    Friendship/Trust:
The first few words spoken will set up the response. Thus, a statement of friendship, peace, or trust will in-spire those sentiments in everyone affected. 

    Power/Fear:
A statement of power, anger, strength, or vile intent, will strike awe and fear into everyone affected. (Example: "Lay down your weapons and let us pass, lest you suffer my wrath!"). Horror Factor: 13. 

    Successful Deception:
This enables the character with Charismatic Aura to convincingly lie like a master conman. There is an 01-80% chance that those affected will believe anything he tells them, no matter how outlandish. This response is triggered by a phrase like: "Trust me completely," or "I would never lie to you, you know that."`;
    }
}

module.exports = CharismaticAura;