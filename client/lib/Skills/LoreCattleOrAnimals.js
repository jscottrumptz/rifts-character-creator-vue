const Skill = require('../Skill');

class LoreCattleOrAnimals extends Skill {
    constructor() {
        super();
        this.name = `Lore: Cattle or Animals`;
        this.group = `Cowboy`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The general knowledge about cattle, horses, livestock, and wild animals, including what they eat,where they live in the wild, means of defense, the value of their meat, fur, hides, and horns, their natural predators, as well as the most notable tales about supernatural animals, spirits, gods, and magic attributed to or involving animals and animal spirits. This skill is practiced most widely in the New West of North America, but it is also known throughout parts of South America, Europe, Africa, Asia, and Australia.`;
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

module.exports = LoreCattleOrAnimals;