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
        this.bonus = `+5% to this skill if Anthropology [Science] is also taken.
+2% to this skill if Archaeology [Science] is also taken.
+10% to this skill if Chemistry: Pharmaceutical [Science] is also taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'anthropology') {
                this.skillBonus = this.skillBonus + 5;
            }
            if(skill === 'archaeology') {
                this.skillBonus = this.skillBonus + 2;
            }
            if(skill === 'chemistryPharmaceutical') {
                this.skillBonus = this.skillBonus + 10;
            }
        })
    }
}

module.exports = LoreJuicers;