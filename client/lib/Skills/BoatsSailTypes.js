const Skill = require('../Skill');

class BoatsSailTypes extends Skill {
    constructor() {
        super();
        this.name = `Boats: Sail Types`;
        this.group = `Pilot`;
        this.isSecondary = true;
        this.description = `The skill with small sail boats and medium-sized sailing yachts, and fishing boats.`;
        this.perLvl = 5;
        this.base = 60;
    }
}

module.exports = BoatsSailTypes;