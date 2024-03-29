const Skill = require('../Skill');
const { Random } = require('random-js');
const random = new Random;

class Wrestling extends Skill {
    constructor() {
        super();
        this.name = `Wrestling`;
        this.group = `Physical`;
        this.isSecondary = false;
        this.description = `The skill taught in old high schools and colleges, wrestling is more of a sport than a combat skill, but it does provide some useful combat moves.`;
        this.bonus = `+2 P.S.
+1 P.E.
+4D6 S.D.C.
+1 Roll with Impact/Fall
Body Block/Tackle does 1D4 damage (double damage if wrestler is 8-12 feet (2.4-3.6m) tall, and 3D6 if larger still). The opponent must dodge or parry (push away/deflect attacker) to avoid being knocked down. If knocked down, opponent loses 1 melee attack/action and initiative for the rest of the round.
Pin/Incapacitate on natural roll of 18-20. This means that the wrestler can hold their opponent in such a way that the opponent can not physically move or attack. However, the character who is using the 'pin' hold can not attack or move without releasing their opponent.
Crush/Squeeze does 1D4 S.D.C. damage per squeeze attack (double damage if 8-12 feet (2.4-3.6m) tall, and 3D6 damage if larger still). Each 'squeeze' counts as one melee attack/action.`;
    }

    rollSecondary(character) {
        character.attributes.pe.skillsBonus = character.attributes.pe.skillsBonus + 1;
        character.attributes.ps.skillsBonus = character.attributes.ps.skillsBonus + 2;
        character.bonuses.roll.skillsBonus = character.bonuses.roll.skillsBonus + 1;
        character.secondaryStats.sdc.skillsBonus = character.secondaryStats.sdc.skillsBonus + random.dice(6,4).reduce((a, b) => a + b, 0);
    }
}

module.exports = Wrestling;