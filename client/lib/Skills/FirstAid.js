const Skill = require('../Skill');

class FirstAid extends Skill {
    constructor() {
        super();
        this.name = `First Aid`;
        this.group = `Medical`;
        this.isSecondary = true;
        this.description = `The rudimentary medical treatment which includes how to bandage wounds, stop bleeding, splint broken limbs, administer artificial respiration (CPR), as well as use antiseptics and common anti-inflammatory drugs and painkillers.`;
        this.perLvl = 5;
        this.base = 45;
        this.penalty = `Without Xenology [Science], any attempts to use a medical skill on an alien species has a -20% penalty.`;
    }
}

module.exports = FirstAid;