const Psionic = require('../Psionic');

class ResistHunger extends Psionic {
    constructor() {
        super();
        this.name = 'Resist Hunger';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = '6 hours.';
        this.cost = '2 I.S.P.';
        this.description = `    Another mind over matter discipline that subdues any feeling of hunger, allowing the character to function at full effectiveness without nourishment. It is important to point out that while the psi-power maintains full operations, the body is still suffering from malnutrition and starvation. Loses 3 lbs. (1.35 kg) of weight per day. Note: A psychic can survive up to 60 days, functioning as normal, without any food by continually using Resist Hunger. On day 61 the character will lapse into a coma. Under this extreme condition, 60 days of food deprivation while still fully active physically, the character is -20% to save vs coma death.`;
    }
}

module.exports = ResistHunger;