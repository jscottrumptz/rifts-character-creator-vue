const Spell = require('../Spell');

class TeleportLesser extends Spell {
    constructor() {
        super();
        this.name = 'Teleport: Lesser   ';
        this.group = 'Invocation';
        this.level = 'Six';
        this.range = `Five miles (8 km) per level of experience; touch.`;
        this.duration = `Requires two full melees (30 seconds).`;
        this.cost = `15 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The power to transmit matter from one place to another. The Teleport: Lesser invocation is limited to non-living substances. Up to 50 lbs (22 kg) can be instantly transported from the location of the spell weaver to any location miles away. The only requirements are that the mage touches the object to be teleported and that the location of where it is being sent to is known to him. Success Ratio: 80% +2% per level of the mage.: An unsuccessful roll means that the object never arrived where it was supposed to and could be anywhere within the mage's range.`;
    }
}

module.exports = TeleportLesser;