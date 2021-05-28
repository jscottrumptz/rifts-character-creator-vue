const Skill = require('../Skill');

class Acrobatics extends Skill {
    constructor() {
        super();
        this.name = `Acrobatics`;
        this.group = `Physical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `Aerial feats of agility and strength, such as walking a tightrope, high wire, trapeze, and stunts performed above ground. Other physical abilities include rolls, somersaults, leaps, and falls. Provides all the abilities and skills listed under Bonuses. Characters with this skill have no fear of heights.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `Automatic Kick attack at first level; 1D8 damage.
Back Flip - 60% +5% per level.
Climb Skill 40% (if skill not already taken) or +15% to Climb Skill (if already taken).
Climb Rope - 80% +2% per level.
Prowl Skill 30% (if skill not already taken) or +5% to Prowl Skill (if already taken).
+1 P.E.
+1 P.P..
+1 P.S.
+2 Roll with Punch/Fall/Impact..
+1D6 S.D.C.
Sense of Balance - 60% +5% per level.
Walk Tightrope or High Wire - 60% +5% per level.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Acrobatics;