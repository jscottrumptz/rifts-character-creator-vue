const Skill = require('../Skill');

class Climb extends Skill {
    constructor() {
        super();
        this.name = `Climb`;
        this.group = `Physical`;
        this.isSecondary = `true`;
        this.note = `Rappelling Base Skill: 30%
Rappelling Per Experience Level: +5%.`;
        this.description = `Knowledge of the tools and techniques for climbing up sheer surfaces. Players should roll once for every 20 feet (6m) of a verticle climb. If the roll fails, it means the character is losing their grip, however, every 'skilled' character gets a chance to regain their grip = roll again. Two consecutive failed rolls means the character falls (takes 1D6 damage per 10 feet (3m) of a fall).

Automatically gain this bonus sub-skill: Rappelling. Rappelling is a specialized rope climbing skill used in scaling walls, towers, and cliff facings. For game purposes, rappelling will include ascending and descending climbs using ropes.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+15% to this skill if Acrobatics [Physical] is also taken.
+5% to this skill if Gymnastics [Physical] is also taken.`;
        this.required = ``;
        this.perLvl = 5;
        this.baseTwo = ``;
        this.base = 40;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'acrobatics') {
                this.skillBonus = this.skillBonus + 15;
            }
            if(skill === 'gymnastics') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = Climb;