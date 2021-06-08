const Skill = require('../Skill');

class Biology extends Skill {
    constructor() {
        super();
        this.name = `Biology`;
        this.group = `Science`;
        this.isSecondary = false;
        this.description = `The basic understanding of cells, anatomy, physiology, evolution, and genetics. The character will know how to use a microscope, cultivate bacteria, and how to dissect, study, evaluate, and classify new organisms.`;
        this.perLvl = 5;
        this.base = 30;
    }
}

module.exports = Biology;