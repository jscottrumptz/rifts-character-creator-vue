const Psionic = require('../Psionic');

class SummonInnerStrength extends Psionic {
    constructor() {
        super();
        this.name = 'Summon Inner Strength';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = '10 minutes per level of experience.';
        this.cost = '4 I.S.P.';
        this.description = `    This psi-power enables the character to draw on his inner reserves of strength to ward off pain and fatigue. 

Every time the psychic calls upon his Inner Strength the following bonuses apply:
• Add+ 1O S.D.C. 
• Add + 2 to save vs poison or toxins.
• Add +5% to save vs coma/death.
• Fatigue is temporarily forgotten and the character can function as if he was fully rested for the full duration of the Summon Inner Strength power.`;
    }
}

module.exports = SummonInnerStrength;