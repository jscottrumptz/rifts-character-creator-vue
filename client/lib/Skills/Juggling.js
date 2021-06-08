const Skill = require('../Skill');

class Juggling extends Skill {
    constructor() {
        super();
        this.name = `Juggling`;
        this.group = `Physical`;
        this.isSecondary = false;
        this.description = `The ability to toss 'up' a number of objects, such as balls, clubs, knives, lit torches, and almost any small objects, and keep them continuously in the air with fast hand movements. It is used for the entertainment of others and to develop greater hand-eye coordination.`;
        this.bonus = `+1 initiative.`;
        this.perLvl = 5;
        this.base = 35;
    }

    rollSecondary(character) {
        character.bonuses.initiative.skillsBonus = character.bonuses.initiative.skillsBonus + 1;
    }
}

module.exports = Juggling;