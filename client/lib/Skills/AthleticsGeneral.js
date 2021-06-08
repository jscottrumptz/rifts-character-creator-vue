const Skill = require('../Skill');
const { Random } = require('random-js');
const random = new Random;

class AthleticsGeneral extends Skill {
    constructor() {
        super();
        this.name = `Athletics (general)`;
        this.group = `Physical`;
        this.isSecondary = true;
        this.description = `The training in, and enjoyment of, vigorous exertion for non-professional, competitive sports, exercises, and contests of strength, endurance, and agility. Includes sports and hobbies such as tennis, track and field, cricket, skateboarding, bicycling, golf, skiing, swimming, bowling, baseball, basketball, and other similar activities.`;
        this.bonus = `+1 Parry.
+1 Dodge.
+1 Roll with Impact.
+1 P.S.
+1D6 Spd.
+1D8 S.D.C.`;
    }
    rollSecondary(character) {
        character.bonuses.parry.skillsBonus = character.bonuses.parry.skillsBonus +1;
        character.attributes.ps.skillsBonus = character.attributes.ps.skillsBonus + 1;
        character.bonuses.dodge.skillsBonus = character.bonuses.dodge.skillsBonus +1;
        character.bonuses.roll.skillsBonus = character.bonuses.roll.skillsBonus + 1;
        character.attributes.spd.skillsBonus = character.attributes.spd.skillsBonus + random.die(6)
        character.secondaryStats.sdc.skillsBonus = character.secondaryStats.sdc.skillsBonus + random.die(8)
    }
}

module.exports = AthleticsGeneral;