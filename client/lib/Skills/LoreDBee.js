const Skill = require('../Skill');

class LoreDBee extends Skill {
    constructor() {
        super();
        this.name = `Lore: D-Bee`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `Most D-Bees (the slang for Dimensional Beings) are just alien humanoids from another dimension or planet. To be classified as a D-Bee, the creature must be remotely humanoid in appearance, usually a bi-ped, have a human-like intelligence, and is not a supernatural creature: must be mortal. Creatures who do not have a bipedal, humanoid body, and are extremely monstrous, animal-like or demonic, or are supernatural in origin, are usually considered to be monsters or demons rather than D-Bees.

D-Bee lore is the general study of common alien humanoids, their most notable beliefs, customs, habits, inhuman abilities, and the rumors, myths and legends about how they came to Earth, their home world, secret agendas etc. The skill is often limited to D-Bees living in a specific geographic region, where the character originates, i.e. D-Bees known to live in North America are known by characters living in North America. The region may be limited to smaller geographic locations, such as D-Bees of Western America, Midwest, East, Coalition States and so on, to get a +10% skill bonus, and the skill may be selected more than once when focusing on smaller regions. D-Bee lore is not a science,and is not always accurate, complete, or in-depth. See the Anthropology skill for an in-depth approach to behavioral science.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Anthropology [Science] is also taken.
+2% to this skill if Archaeology [Science] is also taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
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
        })
    }
}

module.exports = LoreDBee;