const Spell = require('../Spell');

class IgniteFire extends Spell {
    constructor() {
        super();
        this.name = 'Ignite Fire';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `40 feet (12.2 m).`;
        this.duration = `Instant (counts only as one attack; fire lasts until it is put out).`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The spell causes spontaneous combustion, igniting any material that can bum. This means the mage could set a chair cushion, a jacket, pa-per, dry leaves, hair, etc., on fire.`;
        this.note = `Volatile substances that are contained in something, like gasoline in the gas tank of a car or a container, can NOT be ignited. Furthermore, the target to be set on fire must be clearly visible. Maximum area of affect is 3 feet (0.9 m). If somebody's clothes or hair are set on fire, they have two melee rounds (30 seconds) to get it off or put the fire out before damage is inflicted; no other combat or action is possible as all energy is used on dousing the flame. Damage from the small fire is 2D6 S.D.C. per melee round (beginning after the first 2 melees).`;
    }
}

module.exports = IgniteFire;