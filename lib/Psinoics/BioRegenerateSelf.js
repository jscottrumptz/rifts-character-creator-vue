const Psionic = require('../Psionic');

class BioRegenerateSelf extends Psionic {
    constructor() {
        super();
        this.name = 'Bio-Regenerate (self)';
        this.group = 'Healing'
        this.description = `The ability to will oneself free of disease or poison and back to health, and heal physical damage and injury. Unfortunately, this ability cannot be used to heal others. The process requires one full minute of concentration, which means the character cannot use any other psionic power during that time. Bio-Regeneration does not restore missing limbs, but it does restore 2D6 Hit Points or 3D6 physical S.D.C. points per melee round. In addition, when cuts and scrapes are healed through Bio-Regeneration there is no scarring. This power can be used as often as once every two minutes (every eight melee rounds).`
        this.note = `Re-covering more than half of one's Hit Points or S.D.C. this way in less than an hour takes a toll on the character, causing some weakness for 1 D4+2 hours: reduce the P.S., P.E. and Spd attributes by 30%. Adjust attribute bonuses accordingly.`
        this.range = 'Self.';
        this.duration = 'Permanent.';
        this.cost = '6 I.S.P';
        this.savingThrow = 'None.';
    }
}

module.exports = BioRegenerateSelf;