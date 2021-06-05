const Skill = require('../Skill');
const { Random } = require('random-js');
const random = new Random;

class Boxing extends Skill {
    constructor() {
        super();
        this.name = `Boxing`;
        this.group = `Physical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The classic art of fighting with fists. Training helps build the body and reflexes.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 additional attack per melee round.
+2 Parry.
+2 Dodge.
+1 Roll with Punch/Impact.
+2 P.S.
+3D6 S.D.C.
Natural 20 punch (even undeclared) automatically causes knockout on opponent. (victim unconscious for 1D6 melees).`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        console.log(list)
        character.attributes.ps.skillsBonus = character.attributes.ps.skillsBonus + 2;
        character.secondaryStats.sdc.skillsBonus = character.secondaryStats.sdc.skillsBonus + random.dice(6,3).reduce((a, b) => a + b, 0)
        character.bonuses.parry.skillsBonus = character.bonuses.parry.skillsBonus +2;
        character.bonuses.dodge.skillsBonus = character.bonuses.dodge.skillsBonus +2;
        character.bonuses.attacks.skillsBonus = character.bonuses.attacks.skillsBonus +1;
        character.bonuses.roll.skillsBonus = character.bonuses.roll.skillsBonus +1;
        character.bonuses.knockout.initialValue  = 20;
    }
}

module.exports = Boxing;