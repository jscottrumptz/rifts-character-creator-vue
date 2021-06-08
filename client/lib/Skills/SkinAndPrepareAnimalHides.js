const Skill = require('../Skill');

class SkinAndPrepareAnimalHides extends Skill {
    constructor() {
        super();
        this.name = `Skin & Prepare Animal Hides`;
        this.group = `Wilderness`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `Training in the methods and techniques in skinning, tanning, stretching, and preserving animal hides as fur or leather.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to the Sewing [Domestic] skill if this skill is taken.
+5% to the Leather Working [Technical] skill if this skill is taken`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = SkinAndPrepareAnimalHides;