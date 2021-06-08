const Skill = require('../Skill');

class HistoryPreRifts extends Skill {
    constructor() {
        super();
        this.name = `History: Pre-Rifts`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The first percentile represents a very general historical knowledge of the world and the most famous myths, legends, people, and events from before the Great Cataclysm and the Coming of the Rifts.

The second percentile number indicates a more in-depth knowledge of a particular subject or region in the world (pick by nation or continent). For example: History of a region such as North America is a deep knowledge about the United States, Canada, and Mexico, their origin, leaders, key figures in history and science, lore, religion, traditions, famous people, and so on, as well as the myths and legends of the land and culture. An example of a historical 'subject' rather than a place, might include American military history, industry, science, music, art, and so on.

The History skill may be taken repeatedly to cover multiple regions of the world or various subjects. Thus, a character who takes this skill three times might apply it to North America, Western Europe, and Russia. The two base skill percentages indicate the approximate degree of information the character has learned or can remember accurately; remember, the first number is for a general knowledge of world history before the Great Cataclysm, the second for a more specific subject.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Anthropology [Science] is also taken.
+5% to this skill if Research [Technical] is also taken.
+2% to this skill if Archaeology [Science] is also taken.`;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = `24`;
        this.base = `32`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'anthropology' || skill === 'research') {
                this.skillBonus = this.skillBonus + 5;
            }
            if(skill === 'archaeology') {
                this.skillBonus = this.skillBonus + 2;
            }
        })
    }
}

module.exports = HistoryPreRifts;