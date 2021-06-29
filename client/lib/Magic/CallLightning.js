const Spell = require('../Spell');

class CallLightning extends Spell {
    constructor() {
        super();
        this.name = 'Call Lightning   ';
        this.group = 'Invocation';
        this.level = 'Six';
        this.range = `300 feet (91.5 m); line of sight.`;
        this.duration = `Instant.`;
        this.damage = `1D6 M.D.C. per level of the spell caster.`;
        this.cost = `15 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This spell creates a lightning bolt which can be directed at any specific target up to 300 feet (91.5 m) away. The lightning bolt shoots down from the sky, hitting the desired target. The target or area must be within the spell caster's line of vision. The lightning bolt does one six-sided die (ID6) of M.D. per level of the spell caster.`;
    }
}

module.exports = CallLightning;