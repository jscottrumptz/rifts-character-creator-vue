const Spell = require('../Spell');

class LanternLight extends Spell {
    constructor() {
        super();
        this.name = 'Lantern Light';
        this.group = 'Invocation';
        this.level = 'One';
        this.range = `10 feet (3 m); can light up a room.`;
        this.duration = `30 minutes per level of the spell caster.`;
        this.cost = `1 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The Lantern Light spell creates a small sphere of light that is less brilliant but longer lasting than the Globe of Daylight. It floats within IO feet (3 m) of the spell caster and can be mentally moved to hover at different angles and positions as the mage desires. This magic light may be thought of as a magical floating lantern or light bulb with a dimmer switch. The intensity of the light can be mentally adjusted to the equivalent of a 50 to 300 watt light bulb, whatever suits its creator.`;
        this.note = `This is not sunlight, so it will not damage vampires nor keep them at bay.`;
    }
}

module.exports = LanternLight;