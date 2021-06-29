const Spell = require('../Spell');

class Blind extends Spell {
    constructor() {
        super();
        this.name = 'Blind';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `Touch or 10 feet (3 m) away.`;
        this.duration = `One minute (four melee rounds) per level of experience.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `Standard.`;
        this.description = `    An enchantment that can blind one person or animal each time the spell is cast. The intended victim must be visible and within range. The victim will be temporarily blind; - 5 to strike, -10 to parry and dodge, and likely to stumble and fall for every 10 feet (3 m) of movement (50% chance). Does not affect people inside environmental M.D.C. body armor, power armor, robots or vehicles. 
    If the Blind spell is cast upon another spell caster he can not use any spells that require vision/line of sight. If the blind spell caster uses any defensive/assault spells, such as Magic Net, Call Lightning, Fire Ball, etc., there is a 01-65% chance that the spell will be misdirected upon his own comrades.`;
    }
}

module.exports = Blind;