const Skill = require('../Skill');

class Dowsing extends Skill {
    constructor() {
        super();
        this.name = `Dowsing`;
        this.group = `Wilderness`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The ability to locate fresh water whether it be with a divining rod or by more scientific and logical means. This is done through deductive analysis and knowledge of nature. The percentage indicates the success ratio of locating fresh water. A can roll can be made (by the DM) once every melee to sense water, but two consecutive successful rolls are required to locate the water.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `20`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Dowsing;