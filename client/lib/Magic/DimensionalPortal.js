const Spell = require('../Spell');

class DimensionalPortal extends Spell {
    constructor() {
        super();
        this.name = 'Dimensional Portal';
        this.group = 'Invocation';
        this.level = 'Fifteen';
        this.range = `A few feet (one meter) away.`;
        this.duration = `30 seconds (2 melee rounds) per level of the spell caster, or one minute (4 melees) per level of experience when performed as a ritual.`;
        this.cost = `1000 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The dimensional portal invocation opens a two-way door to another dimension. The mage can open a door to a specific world or randomly. This is the only way a greater supernatural being can enter into our dimension. Once the dimensional portal closes, the only way back in or out is to open another portal. One of the real dangers of using this magic is that some "thing" unwanted often slips through.`;
    }
}

module.exports = DimensionalPortal;