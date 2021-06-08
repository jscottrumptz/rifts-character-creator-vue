const Skill = require('../Skill');

class DemolitionsUnderwater extends Skill {
    constructor() {
        super();
        this.name = `Demolitions: Underwater`;
        this.group = `Military`;
        this.isSecondary = false;
        this.note = `Any character with the Demolitions skill can use explosives underwater,but at a -10% penalty to the Demolitions skill.`;
        this.description = `Fundamentally the same basic skills and training as Demolitions, but with an emphasis on using explosives in an underwater environment, including underwater techniques, area effect, sound wave damage, different types of explosives, as well as arming, disarming, and repairing torpedoes and depth charges.`;
        this.perLvl = 4;
        this.base = 56;
    }
}

module.exports = DemolitionsUnderwater;