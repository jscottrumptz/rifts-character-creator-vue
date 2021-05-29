const Skill = require('../Skill');

class PickPocketsEspionage extends Skill {
    constructor() {
        super();
        this.name = `Pick Pockets`;
        this.group = `Espionage`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The ability to remove items from a person without their being aware of it. If a Pick Pocket attempt fails, the item has not been removed and their is a 67% likelihood that the intended victim recognized the intent of the action.`;
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

module.exports = PickPocketsEspionage;