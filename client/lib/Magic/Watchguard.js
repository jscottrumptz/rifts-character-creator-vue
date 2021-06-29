const Spell = require('../Spell');

class Watchguard extends Spell {
    constructor() {
        super();
        this.name = 'Watchguard   ';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `Six foot (1.2 m) radius per level of experience.`;
        this.duration = `One hour per level of experience.`;
        this.cost = `10 P.P.E.`;
        this.savingThrow = `Special; -5 to save.`;
        this.description = `    Watchguard sets up an invisible magic aura around a particular area (campsite, room, courtyard, etc.) that will instantly alert the spell caster should anything potentially dangerous or openly hostile come into the area (includes all predatory animals, robots, humanoids and supernatural beings). Each intruder gets to save vs magic at -5. If the intruders save vs magic, they penetrate the area without alerting the mage. If even one intruder in a group fails to save, the mage is instantly alerted to the potential danger, knows approximately how many intruders are present (but not who or what they are), and, if asleep, will awaken knowing a threat is nearby. It does not indicate the location of the potential danger, type of danger/race/species, nor does it register Astral Travelers.`;
    }
}

module.exports = Watchguard;