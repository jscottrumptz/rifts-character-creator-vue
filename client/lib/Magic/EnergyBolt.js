const Spell = require('../Spell');

class EnergyBolt extends Spell {
    constructor() {
        super();
        this.name = 'Energy Bolt';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `150 feet (45.7 m).`;
        this.duration = `Instantly.`;
        this.damage = `4D6 S.D.C.`;
        this.cost = `5 P.P.E.`;
        this.savingThrow = `Dodge of an 18 or higher.`;
        this.description = `    The incantation creates an energy bolt that the mage can mentally direct by simply looking at his intended target. The bolt may appear to fire from a hand or finger or the eyes, but needs no physical gesture, such as pointing. S.D.C. damage is normally four six-sided dice (4D6), but is increased to 6D6 under the influence of a ley line and 8D6 at a ley line nexus; P.P.E. cost is still only five despite the increased damage capability. One energy bolt can be fired at one target per each spell invocation.`;
    }
}

module.exports = EnergyBolt;