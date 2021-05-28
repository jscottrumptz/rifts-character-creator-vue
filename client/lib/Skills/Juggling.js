const Skill = require('../Skill');

class Juggling extends Skill {
    constructor() {
        super();
        this.name = `Juggling`;
        this.group = `Physical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The ability to toss 'up' a number of objects, such as balls, clubs, knives, lit torches, and almost any small objects, and keep them continuously in the air with fast hand movements. It is used for the entertainment of others and to develop greater hand-eye coordination.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 initiative.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `35`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Juggling;