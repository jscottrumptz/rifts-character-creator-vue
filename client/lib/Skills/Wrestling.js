const Skill = require('../Skill');

class Wrestling extends Skill {
    constructor() {
        super();
        this.name = `Wrestling`;
        this.group = `Physical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The skill taught in old high schools and colleges, wrestling is more of a sport than a combat skill, but it does provide some useful combat moves.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+2 P.S.
+1 P.E.
+4D6 S.D.C.
+1 Roll with Impact/Fall
Body Block/Tackle does 1D4 damage (double damage if wrestler is 8-12 feet (2.4-3.6m) tall, and 3D6 if larger still). The opponent must dodge or parry (push away/deflect attacker) to avoid being knocked down. If knocked down, opponent loses 1 melee attack/action and initiative for the rest of the round.
Pin/Incapacitate on natural roll of 18-20. This means that the wrestler can hold their opponent in such a way that the opponent can not physically move or attack. However, the character who is using the 'pin' hold can not attack or move without releasing their opponent.
Crush/Squeeze does 1D4 S.D.C. damage per squeeze attack (double damage if 8-12 feet (2.4-3.6m) tall, and 3D6 damage if larger still). Each 'squeeze' counts as one melee attack/action.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Wrestling;