const Skill = require('../Skill');

class ZoologySpecialized extends Skill {
    constructor() {
        super();
        this.name = `Zoology: `;
        this.group = `Science`;
        this.isSecondary = false;
        this.description = `The specialized knowledge of a specific type/species of animal: apes, snakes, bovines, etc.`;
        this.required = `Zoology [Science]`;
        this.perLvl = 5;
        this.base = 50;
        this.textEntry = 'Enter Animal Type/Species';
        this.removePostPick = false;
        this.preq = ['zoology'];
    }
}

module.exports = ZoologySpecialized;