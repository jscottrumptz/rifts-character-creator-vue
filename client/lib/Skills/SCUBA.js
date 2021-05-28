const Skill = require('../Skill');

class SCUBA extends Skill {
    constructor() {
        super();
        this.name = `S.C.U.B.A.`;
        this.group = `Physical`;
        this.isSecondary = `false`;
        this.note = `The maximum safe depth one can go without getting the bends is about 120 feet (36.5m). Deeper depths are possible with depressurization, special suits, power armour, robots and submarines.

Swimming underwater with S.C.U.B.A. equipment or other underwater equipment is considered to be light activity, unless extremely active, involved in combat, or fast swimming (in which case it is considered strenuous or heavy activity). The buoyancy of water reduces the weight of most items by 30% when carried underwater. This means the fatigue rate for carrying a heavy load is reduced by 30%, meaning 30% more can be carried at the normal fatigue rate. Characters can also lift 30% heavier weights.`;
        this.description = `The letters S.C.U.B.A. stand for Self-Contained Underwater Breathing Apparatus. Individuals learn the methods and equipment needed for skin diving and underwater swimming. A character can swim a distance equal to 2x P.S. in yards/meters per melee round. This pace can be maintained for a total of minutes equal to their P.E./endurance before tiring.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Swimming.`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `50`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = SCUBA;