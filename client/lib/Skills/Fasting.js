const Skill = require('../Skill');

class Fasting extends Skill {
    constructor() {
        super();
        this.name = `Fasting`;
        this.group = `Wilderness`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The ability to go for long periods of time without food. So long as the character has sufficient water, they can easily survive having no food for two weeks without physical penalty. Every day after that, the character must roll under the fastingskill to avoid becoming weakened or sick.

A failed roll means the following attribute penalties apply:-
I.Q. -1
P.S. -1
P.P. -1
P.E. -2
Spd -3
S.D.C. -3
All these penalties are temporary and will return at the same rate that they were lost with rest and proper food and water on a daily basis.

The character can also go for two days without water and not show any serious effects from dehydration.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Outdoorsmanship [Physical] is also taken.`;
        this.required = ``;
        this.perLvl = `3`;
        this.baseTwo = ``;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'outdoorsmanship') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = Fasting;