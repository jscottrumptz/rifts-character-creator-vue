const Skill = require('../Skill');

class Photography extends Skill {
    constructor() {
        super();
        this.name = `Photography`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The training in the art of still photography using the traditional 35mm camera and digital cameras. Also teaches the use of lighting, camera tricks, lenses, filters, and other camera equipment, as well as storage, development/printing, enlargement, duplication of film/photos, computer scanning and computer enhancements, alterations, and printing (computer abilities require the Computer Operation skill).`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `35`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Photography;