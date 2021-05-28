const Skill = require('../Skill');

class SkinandPrepareAnimalHides extends Skill {
    constructor() {
        super();
        this.name = `Skin & Prepare Animal Hides`;
        this.group = `Wilderness`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `Training in the methods and techniques in skinning, tanning, stretching, and preserving animal hides as fur or leather.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `Sewing +5%
Leather Working +5%`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = SkinandPrepareAnimalHides;