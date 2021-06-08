const Skill = require('../Skill');
const { Random } = require('random-js');
const random = new Random;

class Running extends Skill {
    constructor() {
        super();
        this.name = `Running`;
        this.group = `Physical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The routine of running and exercise to build speed and endurance. For game purposes the character is able to run at an even pace (half speed) for a half mile (0.8km) for every 1 point of P.E. without undue fatigue. If  pushing oneself to the limit and running at maximum speed, the character can run one third that distance before collapsing.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to P.E.
+4D4 to Spd.
+1D6 to S.D.C.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
    rollSecondary(character) {
        character.attributes.pe.skillsBonus = character.attributes.pe.skillsBonus + 1;
        character.secondaryStats.sdc.skillsBonus = character.secondaryStats.sdc.skillsBonus + random.die(6);
        character.attributes.spd.skillsBonus = character.attributes.spd.skillsBonus + random.dice(4,4).reduce((a, b) => a + b, 0);
    }
}

module.exports = Running;