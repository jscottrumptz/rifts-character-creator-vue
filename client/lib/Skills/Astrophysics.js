const Skill = require('../Skill');

class Astrophysics extends Skill {
    constructor() {
        super();
        this.name = `Astrophysics`;
        this.group = `Science`;
        this.isSecondary = false;
        this.description = `The knowledge of stellar astronomy and how it relates to nuclear physics, quantum mechanics, relativity, and other explanations for the creation of deep space phenomena, like quasars and black holes.`;
        this.required = `Mathematics: Advanced [Science].`;
        this.perLvl = 5;
        this.base = 30;
        this.preq = ['mathematicsAdvanced']
    }
}

module.exports = Astrophysics;