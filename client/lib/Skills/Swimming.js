const Skill = require('../Skill');

class Swimming extends Skill {
    constructor() {
        super();
        this.name = `Swimming`;
        this.group = `Physical`;
        this.isSecondary = `true`;
        this.note = `The act of swimming on the surface of the water has the same fatigue rate as running and medium to heavy exertion, especially at great speed or for very long periods of time. Characters are capable of swimming while in power armour, but not in simple non-powered, M.D.C. body armour unless they can overcome the armour's weight to stay afloat.`;
        this.description = `The  rudimentary skill of keeping afloat, dives, swimming, and life saving techniques. The percentile number indicates the overall quality of form as well as skill of execution. A character can swim a distance equal to 3x P.S. in yards/metres per melee. This pace can be maintained for a total of minutes equal to P.E..

Characters that fail their Swimming skill roll flounder, but manage to stay afloat, they just do not cover any distance. Three failed Swimming attempts in a row means the character slips below the water and will drown unless rescued.`;
        this.reqOCCGroup = ``;
        this.penalty = `-20% in storm/rough wave conditions.
-45% if in non-powered body armour.`;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `50`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Swimming;