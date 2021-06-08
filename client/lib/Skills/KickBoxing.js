const Skill = require('../Skill');
const { Random } = require('random-js');
const random = new Random;

class KickBoxing extends Skill {
    constructor() {
        super();
        this.name = `Kick Boxing`;
        this.group = `Physical`;
        this.isSecondary = `false`;
        this.note = `Humans and other mortals inflict S.D.C./Hit Point damage (as listed below), characters with Supernatural P.S. inflict the same damage but as M.D., but true supernatural creatures/demons never study formal fighting techniques like Kick Boxing. Characters with Robot P.S. inflict half the damage listed but as M.D. (i.e. Roundhouse Kick does 2D4 M.D., Axe Kick 1D8 M.D. and so on).`;
        this.description = `Kick boxing is a form of martial arts self-defence. The character who takes Kick Boxing has done maybe a few months or a year of casual training as a supplement to their usual Hand to Hand Combat skill.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 P.E.
+1 P.S.
+1D10 to S.D.C.
Roundhouse Kick: 3D6 damage.
Axe Kick: 2D8 damage.
Knee Strike: 1D8 damage.
Leap Kick: 3D8 damage (counts as two melee attacks).`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character) {
        character.attributes.pe.skillsBonus = character.attributes.pe.skillsBonus + 1;
        character.attributes.ps.skillsBonus = character.attributes.ps.skillsBonus + 1;
        character.secondaryStats.sdc.skillsBonus = character.secondaryStats.sdc.skillsBonus + random.die(10);
    }
}

module.exports = KickBoxing;