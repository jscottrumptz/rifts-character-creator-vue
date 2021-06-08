const Skill = require('../Skill');

class Chemistry extends Skill {
    constructor() {
        super();
        this.name = `Chemistry`;
        this.group = `Science`;
        this.isSecondary = false;
        this.description = `The basic understanding of chemical principles and formulae. Characters know enough chemical laboratory procedures for analyzing and synthesizing chemical compounds to act as competent assistants.`;
        this.perLvl = 5;
        this.base = 30;
    }
}

module.exports = Chemistry;