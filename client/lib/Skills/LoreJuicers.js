const Skill = require('../Skill');

class LoreJuicers extends Skill {
    constructor() {
        super();
        this.name = `Lore: Juicers`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `All there is to know about the Juicer culture, different juicer variants, what powers they possess, Juicer lore and myths,drug side-effects, last call, Juicer wannabes/cults, infamous Juicers in history, current famous Juicer leaders, notorious Juicer gangs, and similar facts. The character can recognize Juicers by their armour and abilities.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = LoreJuicers;