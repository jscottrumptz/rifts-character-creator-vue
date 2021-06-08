const Skill = require('../Skill');

class Branding extends Skill {
    constructor() {
        super();
        this.name = `Branding`;
        this.group = `Cowboy`;
        this.isSecondary = false;
        this.description = `The techniques and methods for tethering, controlling and marking, or 'branding' animals. A brand is a mark (usually) burned on the skin to identify and show ownership of an animal, typically used on horses and cattle, sometimes on humans and D-Bee slaves. This skill also includes a basic knowledge of common and notable insignias and emblems.`;
        this.perLvl = 5;
        this.base = 50;
    }
}

module.exports = Branding;