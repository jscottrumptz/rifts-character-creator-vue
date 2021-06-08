const Skill = require('../Skill');

class Sniper extends Skill {
    constructor() {
        super();
        this.name = `Sniper`;
        this.group = `Espionage`;
        this.isSecondary = false;
        this.description = `This skill represents special training in long-range shooting and marksmanship. Only weapons that can be made to fire a single bullet/round/blast can be used for sniping; no automatic burst firing. Acceptable weapons include bow and arrow, crossbows, bolt-action rifles, and energy rifles capable of switching from bursts or pulse attacks to a single shot.`;
        this.bonus = `+2 Strike (on a Called or Aimed shot only).`;
    }
}

module.exports = Sniper;