const Skill = require('../Skill');
const { Random } = require('random-js');
const random = new Random;

class AerobicAthletics extends Skill {
    constructor() {
        super();
        this.name = `Aerobic Athletics`;
        this.group = `Physical`;
        this.isSecondary = true;
        this.description = `The type of aerobic exercise which builds the body, develops reflexes and grace, and teaches a very few basic self-defense moves.`;
        this.bonus = `+1 Disarm.
+1 Pull Punch.
+2D4 S.D.C.
+2 Kick damage.
Sense of Balance - 30%, +5% per level of experience.`;
    }

    rollSecondary(character) {
        character.bonuses.pull.skillsBonus = character.bonuses.pull.skillsBonus + 1;
        character.secondaryStats.sdc.skillsBonus = character.secondaryStats.sdc.skillsBonus + random.dice(4,2).reduce((a, b) => a + b, 0)
    }
}

module.exports = AerobicAthletics;