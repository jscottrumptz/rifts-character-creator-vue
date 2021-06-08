const Skill = require('../Skill');

class TVOrVideo extends Skill {
    constructor() {
        super();
        this.name = `T.V. or Video`;
        this.group = `Communication`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The in-depth training in the use of video, digital and audio recording equipment as well as filing, editing, dubbing, title making, duplication, and transmission. Includes the use of field equipment; i.e. portable video or digital camera and studio equipment.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Optic Systems [Communication] is also taken`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'opticSystems') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = TVOrVideo;