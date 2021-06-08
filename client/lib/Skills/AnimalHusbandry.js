const Skill = require('../Skill');

class AnimalHusbandry extends Skill {
    constructor() {
        super();
        this.name = `Animal Husbandry`;
        this.group = `Medical`;
        this.isSecondary = true;
        this.description = `The knowledge in the behaviour, care, feeding, breeding, reproduction habits, and health of domesticated animals such as cattle, sheep, goats, horses, ducks, chickens, dogs, cats, and similar livestock and pets. The percentile number indicates the degree of knowledge and skill one has about animals and their care.

Reduce skill ability by half when caring for captive or injured wild animals.`;
        this.perLvl = 5;
        this.base = 35;
    }
}

module.exports = AnimalHusbandry;