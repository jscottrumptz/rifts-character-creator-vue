const Skill = require('../Skill');

class LeatherWorking extends Skill {
    constructor() {
        super();
        this.name = `Leather Working`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The skill of tanning, preserving and working with animal hides, fur, and leather to make leather goods such as clothing, capes, caps, bags, purses, boots, shoes, belts, and even S.D.C. leather armour (the character can repair leather armour too). A failed roll indicates that the hide is ruined and the leather wasted.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = LeatherWorking;