const Skill = require('../Skill');

class Masonry extends Skill {
    constructor() {
        super();
        this.name = `Masonry`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The rudimentary understanding of the principles of bricklaying and stone construction. The percentile number indicates the success ratio of recognizing deterioration, improper construction, the intended purpose of construction, styles of masonry, approximate age or period of construction, and general data about mason guilds. The character can also mend masonry and assist in construction and demolition.`;
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

module.exports = Masonry;