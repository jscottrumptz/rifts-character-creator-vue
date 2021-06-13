const Psionic = require('../Psionic');

class SenseMagic extends Psionic {
    constructor() {
        super();
        this.name = 'Sense Magic';
        this.group = 'Sensitive';
        this.range = '120 feet (36.6 m) area.';
        this.duration = '2 minutes per level of experience.';
        this.cost = '3 I.S.P.';
        this.savingThrow = 'None';
        this.description = `    The ability to sense magic enables the psychic to feel magic energy, tell whether it is near (within 20 feet/6.1 m) or far (up to 120 feet/36.6 m away) and follow the emanations to pinpoint their source as a particular place, room, person or object. Note: Invisible, magical or supernatural creatures or objects can only be traced to a general area, like a specific room or area. The psychic will also be able to sense whether or not an object has magic powers, if a person or item is enchanted/under a magic spell (this does not include psionic influences), when magic is being used within the area (120 feet/36.6 m) and when a person is casting a spell (human users of magic do not radiate magic energies until they call upon them).`;
    }
}

module.exports = SenseMagic;