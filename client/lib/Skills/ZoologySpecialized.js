const Skill = require('../Skill');

class ZoologySpecialized extends Skill {
    constructor() {
        super();
        this.name = `Zoology: Specialized`;
        this.group = `Science`;
        this.isSecondary = false;
        this.description = `The specialized knowledge of a specific type/species of animal: apes, snakes, bovines, etc.`;
        this.required = `Zoology [Science]`;
        this.perLvl = 5;
        this.base = 50;
        this.preq = ['zoology'];
    }
}

module.exports = ZoologySpecialized;