const Skill = require('../Skill');

class ChemistryAnalytical extends Skill {
    constructor() {
        super();
        this.name = `Chemistry: Analytical`;
        this.group = `Science`;
        this.isSecondary = false;
        this.description = `The training in chemical engineering theories useful in the analysis of compounds and their practical applications. Characters will be highly skilled in the use of laboratory equipment and can analyze and synthesize chemicals.`;
        this.required = `Chemistry [Science], Mathematics: Advanced [Science], and Literacy [Communication]. Computer Operation [Technical] is strongly suggested but not essential.`;
        this.perLvl = 5;
        this.base = 25;
        this.preq = ['chemistry', 'mathematicsAdvanced', 'literacy']
    }
}

module.exports = ChemistryAnalytical;