const Skill = require('../Skill');
const { Random } = require('random-js');
const random = new Random;

class ForcedMarchMilitary extends Skill {
    constructor() {
        super();
        this.name = `Forced March`;
        this.group = `Military`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The practiced training in uniform marching with a full field pack and weapons. This is done at an even pace and rhythm that enables the marchers to cover great distances on foot at a faster than normal pace. Maximum speed on a forced march is roughly 60% of one's Spd attribute, which enables a large group of dozens to hundreds of soldiers to travel at the same consistent pace (never less than a Speed of 8). This skill likewise trains soldiers to make coordinated changes and manoeuvres, including spear runs, spear and shield placement, and so on.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+2 P.E.
+1D4 Spd.
+2D6 S.D.C.
x5 Normal physical endurance rate for maintaining forced marches and traveling activities.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character) {
        character.attributes.pe.skillsBonus = character.attributes.pe.skillsBonus + 2;
        character.attributes.spd.skillsBonus = character.attributes.spd.skillsBonus + random.die(4)
        character.secondaryStats.sdc.skillsBonus = character.secondaryStats.sdc.skillsBonus + random.dice(6,2).reduce((a, b) => a + b, 0)
    }
}

module.exports = ForcedMarchMilitary;