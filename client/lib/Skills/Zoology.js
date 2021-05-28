const Skill = require('../Skill');

class Zoology extends Skill {
    constructor() {
        super();
        this.name = `Zoology`;
        this.group = `Science`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The academic knowledge of wildlife, nature and habits, including domesticated and wild animals indigenous to the planet, and known alien animal species. This includes knowledge of animal habitats, behaviour, instincts, mating, hunting, food or favoured prey, breeding, physiology and biology, flight/fight responses, natural weapons and defenses, the best way to handle the animals, and so on. This skill may be specialized by taking the skill twice (see Bonuses).`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5 Herding Cattle (or any other Herding skill).
+5 Track & Trap Animals
+10% Veterinary Science
+20% to Specialized version of this skill (select this skill twice, this second selection gains the one-time bonus and requires a specific type/species of animal: apes, snakes, bovines, etc.).`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Zoology;