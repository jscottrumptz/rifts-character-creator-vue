const Skill = require('../Skill');

class PickPocketsRogue extends Skill {
    constructor() {
        super();
        this.name = `Pick Pockets`;
        this.group = `Rogue`;
        this.isSecondary = false;
        this.description = `The ability to remove items from a person without their being aware of it. If a Pick Pocket attempt fails, the item has not been removed and their is a 67% likelihood that the intended victim recognized the intent of the action.`;
        this.bonus = `+5% to this skill if Palming [Rogue] is also taken.
+5% to this skill if Seduction [Rogue] is taken.`;
        this.perLvl = 5;
        this.base = 25;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if (skill === 'palming' || skill === 'seduction') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = PickPocketsRogue;