const Skill = require('../Skill');

class ProwlPhysical extends Skill {
    constructor() {
        super();
        this.name = `Prowl`;
        this.group = `Physical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `This skill helps the character move with stealth; quietly, slowly, and carefully. Techniques include balance and footing, short steps and pacing, weapon positioning, prone positions for low visibility, and crawling. A failed Prowl roll means that the character may have been seen or heard. If the Prowl skill is successful, then the character is not seen or heard and may make a sneak attack.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = ProwlPhysical;