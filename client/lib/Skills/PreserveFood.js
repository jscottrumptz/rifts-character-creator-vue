const Skill = require('../Skill');

class PreserveFood extends Skill {
    constructor() {
        super();
        this.name = `Preserve Food`;
        this.group = `Wilderness`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The knowledge in the preparation of foods for storage and later consumption. Includes canning fresh fruit and vegetables, making jams and honey, drying fruit, vegetables, and herbs, drying meat and fish, plus various smoking, salting, and pickling methods.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+10% to this skill if Holistic Medicine is taken`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'holisticMedicine') {
                this.skillBonus = this.skillBonus + 10;
            }
        })
    }
}

module.exports = PreserveFood;