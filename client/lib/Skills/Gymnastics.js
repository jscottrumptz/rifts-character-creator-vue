const Skill = require('../Skill');
const { Random } = require('random-js');
const random = new Random;

class Gymnastics extends Skill {
    constructor() {
        super();
        this.name = `Gymnastics`;
        this.group = `Physical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The skill of learning to do falls, rolls, tumbles, cartwheels, somersaults, and to work the parallel bars and rings. This sport builds great upper body strength, grace, and balance.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+2 P.S.
+1 P.P.
+2 P.E.
+2D6 S.D.C.
+2 Roll with Impact.
Automatic Kick attack; does 2D4 damage (at first level).
Sense of Balance: 50%, +3% per level.
Work Parallel Bars & Rings: 60%, +3% per level.
Back Flip: 70%, +2%per level.
Climb Rope/Rappel: 60%, +2% per level.
Climb: 25% or adds +5 to Climb skill.
Prowl: 30% or adds +5 to Prowl skill.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
    rollSecondary(character) {
        character.attributes.pe.skillsBonus = character.attributes.pe.skillsBonus + 2;
        character.attributes.pp.skillsBonus = character.attributes.pp.skillsBonus + 1;
        character.attributes.ps.skillsBonus = character.attributes.ps.skillsBonus + 2;
        character.bonuses.roll.skillsBonus = character.bonuses.roll.skillsBonus + 2;
        character.secondaryStats.sdc.skillsBonus = character.secondaryStats.sdc.skillsBonus + random.dice(6,2).reduce((a, b) => a + b, 0)
    }
}

module.exports = Gymnastics;