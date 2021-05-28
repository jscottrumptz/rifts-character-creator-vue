const Skill = require('../Skill');

class HistoryPostApocalypse extends Skill {
    constructor() {
        super();
        this.name = `History: Post-Apocalypse`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The first percentile number represents a very general historical knowledge of the character's native continent after the Great Cataclysm, as well as some of the most famous myths, legends, and rumours about people, places, and events around the world starting with the Two Hundred Year Dark Age (mostly folklore) and historical events in the first year of the Post-Apocalyptic Calendar (1 P.A.).

The second percentile number indicates a more in-depth knowledge of a particular subject or region in the world (pick by nation or continent). For example: History of the Coalition, or Federation of Magic, or Northern Gun, or the Vampire Kingdoms, provides a deep knowledge about the history of that organization/nation and their people, culture, origin, key figures in history and science, lore, religion, traditions, leaders, famous individuals, and so on, as well as the myths and legends of the land and culture.

The history skill may be taken repeatedly to cover multiple regions/nations/kingdoms of the world or various subjects (Techno-Wizardry, Magic, Juicers, D-Bees, etc., in that part of the world). The base skill percentages indicate the approximate degree of information the character has learned or can remember accurately; remember, the first number is for a general knowledge of the character's native continent, the second on a more specific subject, all from a historical (event driven) point of view.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = `30`;
        this.base = `35`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = HistoryPostApocalypse;