const Skill = require('../Skill');
const { Random } = require('random-js');
const random = new Random;

class Outdoorsmanship extends Skill {
    constructor() {
        super();
        this.name = `Outdoorsmanship`;
        this.group = `Physical`;
        this.isSecondary = false;
        this.description = `Being an avid outdoors man and survivalist, this character has spent a significant portion of their life living off the land or in the wild. As a result, the character is hardened to the rigours of outdoor life.`;
        this.bonus = `+1 to P.E.
+2D6 to S.D.C.
+5% to the Dowsing [Wilderness] skill if this skill is taken..
+5% to the Fasting [Wilderness] skill if this skill is taken..
+5% to the Identify Plants & Fruit [Wilderness] skill if this skill is taken.
+5% to the Wilderness Survival [Espionage, Wilderness] skill if this skill is taken.`;
        this.required = `Wilderness Survival.`;
        this.preq = ['wildernessSurvival'];
    }

    rollSecondary(character) {
        character.attributes.pe.skillsBonus = character.attributes.pe.skillsBonus + 1;
        character.secondaryStats.sdc.skillsBonus = character.secondaryStats.sdc.skillsBonus + random.dice(6,2).reduce((a, b) => a + b, 0);
    }
}

module.exports = Outdoorsmanship;