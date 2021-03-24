const Psionic = require('../Psionic');

class TelekineticPush extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinetic Push';
        this.group = 'Physical';
        this.range = 'By touch or one foot (0.3 m) per level of experience.';
        this.duration = 'Instant.';
        this.cost = '4 I.S.P.';
        this.savingThrow = 'None.';
        this.description = `    The psychic can effectively create a telekinetic force that pushes away an attacker or anything within range (a door, chair, cart, statue, etc.). The pushing force has the rough equivalent of a P.S. 16 + 1 per level of the psychic. The Telekinetic Push is roughly equal to a body block and does 1D4 S.D.C. or Hit Point damage, will knock most ordinary humans back two yards/meters and has a 01-60% chance of knocking the person off his feet (if so, that character loses initiative and one melee action). Characters weighing more than 200 pounds (90 kg) or who possess Robotic P.S. or Supernatural P.S. are only shoved a foot or two and there is only a 01-12% chance of being knocked off their feet. Inanimate objects weighing under 50 pounds (22.5 kg) are "pushed" or slid across the ground twice as far, roughly four yards/meters (12 feet/3.6 m).`;
    }
}

module.exports = TelekineticPush;