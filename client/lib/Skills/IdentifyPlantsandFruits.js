const Skill = require('../Skill');

class IdentifyPlantsandFruits extends Skill {
    constructor() {
        super();
        this.name = `Identify Plants & Fruits`;
        this.group = `Wilderness`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `Training in the recognition of the many different types of wild plants and vegetation, and where they grow. The emphasis is on finding and identifying edible berries, fruit, vegetables, mushrooms, roots, bark, and plants, as well as plants that have herbal and medicinal qualities (and staying away from poisonous ones). The DM should roll for every 15 (60 melees) minutes of searching to see if the character has located enough edible food for a decent meal. The DM should roll every 30 minutes (120 melees) to see if the character has located a plant that could be used as a medicine, disinfectant, or herb.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = IdentifyPlantsandFruits;