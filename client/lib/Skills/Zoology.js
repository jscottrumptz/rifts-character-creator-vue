const Skill = require('../Skill');

class Zoology extends Skill {
    constructor() {
        super();
        this.name = `Zoology`;
        this.group = `Science`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The academic knowledge of wildlife, nature and habits, including domesticated and wild animals indigenous to the planet, and known alien animal species. This includes knowledge of animal habitats, behaviour, instincts, mating, hunting, food or favoured prey, breeding, physiology and biology, flight/fight responses, natural weapons and defenses, the best way to handle the animals, and so on.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to the Herding Cattle [Cowboy] (or any other Herding) skill if this skill is taken.
+5% to the Track & Trap Animals [Wilderness] skill if this skill is taken.
+10% to the Veterinary Science [Medical] skill if this skill is taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Zoology;