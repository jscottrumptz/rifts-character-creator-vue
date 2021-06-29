const Spell = require('../Spell');

class Calling extends Spell {
    constructor() {
        super();
        this.name = 'Calling';
        this.group = 'Invocation';
        this.level = 'Five';
        this.range = `2 miles (3.2 km) per level of experience.`;
        this.duration = `Five minutes per level of experience.`;
        this.cost = `8 P.P.E.`;
        this.savingThrow = `Standard.`;
        this.description = `    The Calling is like a limited form of telepathic communication in which the mage can mentally call a specific individual. To use "the call," the mystic must know the person's whole name (first and last), must have personally met the individual (even if only briefly) and must be within range. The call sends a telepathic message to that particular character, calling him or her by full name, and leaves an impression of where the caller can be found. A typical call message will be something like "Erick Wujcik, come to me." or "Richard Burke, I need you." Pranksters might use the spell for harassment purposes: "Joseph Prosek, you are a goose-stepping noodle head," or "Erin Tarn, you are a D-Bee loving blowhard." Only the individual to whom the call is made can hear it, no one else. If a successful saving throw is made, the Call, and impression of location, is heard only once. If the saving throw is not successful the Call will repeat itself over and over again, three times per melee round, until the spell elapses or the person goes to the mage. Nothing except a Mind Block can block out the call. A failed roll means the call keeps coming and coming, compelling the individual to answer it.`;
    }
}

module.exports = Calling;