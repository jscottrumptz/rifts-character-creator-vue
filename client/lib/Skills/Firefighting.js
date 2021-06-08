const Skill = require('../Skill');

class Firefighting extends Skill {
    constructor() {
        super();
        this.name = `Firefighting`;
        this.group = `Technical`;
        this.isSecondary = true;
        this.description = `The basic understanding of fire and how it works, breathes, and travels, as well as firefighting methods and techniques, rescue procedures, and the practiced use of firefighting tools, equipment, and gear.`;
        this.perLvl = 5;
        this.base = 40;
    }
}

module.exports = Firefighting;