const Psionic = require('../Psionic');

class Exorcism extends Psionic {
    constructor() {
        super();
        this.name = 'Exorcism';
        this.group = 'Healing';
        this.range = 'Immediate area, touch or within 8 feet (2.4 m).';
        this.duration = 'Instant, if successful.';
        this.cost = '10 I.S.P.';
        this.lengthOfTrance = '30 minutes of preparation and 6D6 minutes with the possessed person or animal.'
        this.description = `    The healer can perform a Rite of Exorcism that uses psychic energy to expel the loathsome being from its mortal, host body. A completely successful exorcism will free the victim of the supernatural force that controls him and send it back to its own non-earthly realm. A partially successful exorcism will drive the evil force out of the possessed person or animal, but does not send the damnable thing back to its own dimension. Thus, it can try to possess the psychic healer or flee to wander the Earth in search of a new victim. An exorcism can only be used on living people and animals whose bodies are inhabited by a supernatural entity or other type of invasive spirit, not symbiotes or psychic possession. 
    Roll to determine success for an exorcism at the end of the time period. First, roll to see if the being has been expelled from its victim's body. Success Ratio: 28% + 7% per each additional level of experience. 
    Second, roll to see if the thing is forced back into its own dimension. Success Ratio: 21% + 7% per each additional level of the psychic's experience. A failed roll means the creature remains in our dimension, but it must leave the area and cannot possess the same individual for at least six months. 
    During the exorcism the possessing force can use whatever powers it may have, as well as physical attacks or any special psychic abilities of its host body. Fortunately, the Rite of Exorcism weakens the creature, reducing its number of attacks per melee by half. It is wise to al-ways have one or more assistants to help defend against the being's attacks and actions. Sedating the physical host body will immobilize it, but will not prevent psychic attacks or the creature's use of its own natural powers (if any). Too many assistants or spectators can be a liability, for the creature may attempt to flee by possessing one of them. An exorcism can be attempted on the same individual as often as the healer desires.`
        this.note = `Can only exorcize the living.`
        this.gmNote= `The chance of a successful exorcism on a Nega-Psychic is reduced by half, as is the success ratio for sending the being back to its own dimension. The same is true of some of the more powerful supernatural beings capable of possession. (See Rifts® World Book 12: Psyscape™ for info on the Nega-Psychic and other psychic player characters.) `
    }
}

module.exports = Exorcism;