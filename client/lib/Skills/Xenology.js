const Skill = require('../Skill');

class Xenology extends Skill {
    constructor() {
        super();
        this.name = `Xenology`;
        this.group = `Science`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The biological and physiological study of alien species (rather than their culture or society). This skill provides general medical and physiological information about the most commonly encountered species in a particular region or solar system (the type of air they breathe, how their body works, any natural weapons, poisons or toxins, strengths and weaknesses, presence of psionics or other natural abilities, etc.). On Rifts Earth, this skill might cover the many alien creatures and D-Bees of a single continent.

Without Xenology, any attempts to use a medical skill on an alien species has a -20% penalty.`;
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

module.exports = Xenology;