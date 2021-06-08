const Skill = require('../Skill');

class PreserveFood extends Skill {
    constructor() {
        super();
        this.name = `Preserve Food`;
        this.group = `Wilderness`;
        this.isSecondary = true;
        this.description = `The knowledge in the preparation of foods for storage and later consumption. Includes canning fresh fruit and vegetables, making jams and honey, drying fruit, vegetables, and herbs, drying meat and fish, plus various smoking, salting, and pickling methods.`;
        this.bonus = `+10% to this skill if Holistic Medicine [Medical] is also taken`;
        this.perLvl = 5;
        this.base = 30;
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