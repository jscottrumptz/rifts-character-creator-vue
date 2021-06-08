const Skill = require('../Skill');

class NavalTactics extends Skill {
    constructor() {
        super();
        this.name = `Naval Tactics`;
        this.group = `Military`;
        this.isSecondary = false;
        this.description = `The basic understanding of naval military combat strategies and tactics, preferred methods of lighting in both small scale engagements and full battles, river, lake and sea combat tactics, boarding and capturing enemy vessels, the 'do's' and 'don'ts' of naval warfare, and other basic naval military methods. A successful tactics roll will reveal some hints as to the best way to approach a potential combat situation, like recognizing a potential attack/retreat area, combat or defensive weaknesses, a trap, etc.`;
        this.perLvl = 5;
        this.base = 25;
    }
}

module.exports = NavalTactics;