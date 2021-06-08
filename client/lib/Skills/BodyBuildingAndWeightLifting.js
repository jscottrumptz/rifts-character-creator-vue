const Skill = require('../Skill');


class BodyBuildingAndWeightLifting extends Skill {
    constructor() {
        super();
        this.name = `Body Building & Weight Lifting`;
        this.group = `Physical`;
        this.isSecondary = true;
        this.description = `The building of muscle tone and body strength through weight lifting and exercise.`;
        this.bonus = `+2 P.S.
+10 S,D,C.`;
    }

    rollSecondary(character) {
        character.attributes.ps.skillsBonus = character.attributes.ps.skillsBonus + 2;
        character.secondaryStats.sdc.skillsBonus = character.secondaryStats.sdc.skillsBonus + 10
    }
}

module.exports = BodyBuildingAndWeightLifting;