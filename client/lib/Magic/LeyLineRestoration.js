const Spell = require('../Spell');

class LeyLineRestoration extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Restoration';
        this.group = 'Invocation';
        this.level = 'Fifteen';
        this.range = `One individual via ritual, within 10 feet (3 m). Can not be performed on oneself.`;
        this.duration = `The ritual takes 20 minutes, the restoration is permanent.`;
        this.limitations = `Only restores one designated individual and requires a permanent loss of P.P.E. by the performer of the ritual and the individual restored.`;
        this.cost = `800 P.P.E. (half for Ley Line Walkers and Shifters).`;
        this.savingThrow = `None.`;
        this.limitations = `Only restores one designated individual and requires a permanent loss of P.P.E. by the performer of the ritual and the individual restored.`;
        this.description = `    This is like a deluxe version of the Restoration spell (see Rifts® Ult. Edition, page 224, for details), only in addition to everything that spell can do, this one can completely restore missing limbs and internal organs (harmlessly expelling any bionic limbs and implants), provided the participants are willing to pay the price. 
    This is a ritual that must be performed at a ley line nexus and requires a blood sacrifice (a small animal like a chicken will suffice). When the ritual is finished the individual is completely restored, but it will also permanently drain 6D6 P.P.E. from the base P.P.E. of the spell caster performing the ritual (double if a supernatural being or creature of magic), and he can NOT be the recipient of the magical restoration. This means to be restored, one must find a practitioner or creature of magic willing to have his base P.P.E. permanently reduced! In addition, the recipient of the healing restoration sees his own P.P.E. base permanently reduced by 4D6%. While this is not so bad for ordinary people, it can have a huge impact on practitioners of magic.`;
    }
}

module.exports = LeyLineRestoration;