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
        this.bonus = `+5% to this skill if Outdoorsmanship [Physical] is also taken.
+5% to this skill if Excavation [Technical] is also taken. (only when looking for an underground river or spring).`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `20`;
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

module.exports = Dowsing;