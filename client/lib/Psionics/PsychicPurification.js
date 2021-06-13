const Psionic = require('../Psionic');

class PsychicPurification extends Psionic {
    constructor() {
        super();
        this.name = 'Psychic Purification';
        this.group = 'Healing';
        this.range = 'Touch.';
        this.duration = 'Immediate.';
        this.cost = '8 I.S.P.';
        this.lengthOfTrance = '6D6 minutes of meditation.'
        this.savingThrow = 'None.'
        this.description = `    The healer can use his abilities to slow a person's metabolism and destroy chemicals, drugs, poisons, and toxins in the body. The effects of the drugs/impurities are immediately halted at the beginning of the meditation, and completely destroyed/negated by its end. Damage sustained prior to the psychic's intervention still remains.`;
    }
}

module.exports = PsychicPurification;