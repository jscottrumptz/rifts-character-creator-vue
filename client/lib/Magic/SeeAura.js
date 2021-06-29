const Spell = require('../Spell');

class SeeAura extends Spell {
    constructor() {
        super();
        this.name = 'See Aura';
        this.group = 'Invocation';
        this.level = 'One';
        this.range = `100 feet (30.5 m).`;
        this.duration = `One melee.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `None. Only the psychic powers of Mind Block or Alter Aura will mask the presence of psychic abilities, the level of P.P.E., or possession.`;
        this.description = `    All things, organic and inorganic, have an aura. The aura has many features and distinctions, and can be used to see or sense things invisible to the eye. Seeing an aura will indicate the following:
• Estimate the general level of experience. Low ( 1-3), medium ( 4-7), high (8th and up). 
• The presence of magic (no indication of what, or power level). 
• The presence of psychic abilities. Low (Minor) or high (Major or Master). 
• High or low base P.P.E.
• The presence of a possessing entity (does not indicate Psychic Pos-session or mind control). 
• Health: Sick, injured or completely well. 
• The presence of an unusual human aberration which indicates a serious illness or that the character is not human and may be a mutant, D-Bee, or demon, but does not reveal which.`;
        this.note = `One can not use this spell to determine another character's alignment.`;
    }
}

module.exports = SeeAura;