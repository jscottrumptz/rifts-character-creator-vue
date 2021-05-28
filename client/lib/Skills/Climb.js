const Skill = require('../Skill');

class Climb extends Skill {
    constructor() {
        super();
        this.name = `Climb`;
        this.group = `Physical`;
        this.isSecondary = `true`;
        this.note = `Climb Base Skill: 40%.
Climb Per Experience Level: +5%.
Rappelling Base Skill: 30%
Rappelling Per Experience Level: +5%.`;
        this.description = `Knowledge of the tools and techniques for climbing up sheer surfaces. Players should roll once for every 20 feet (6m) of a verticle climb. If the roll fails, it means the character is losing their grip, however, every 'skilled' character gets a chance to regain their grip = roll again. Two consecutive failed rolls means the character falls (takes 1D6 damage per 10 feet (3m) of a fall).

Automatically gain this bonus sub-skill: Rappelling. Rappelling is a specialized rope climbing skill used in scaling walls, towers, and cliff facings. For game purposes, rappelling will include ascending and descending climbs using ropes.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Climb;