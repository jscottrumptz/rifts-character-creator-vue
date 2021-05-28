const Skill = require('../Skill');

class AthleticsGeneral extends Skill {
    constructor() {
        super();
        this.name = `Athletics (general)`;
        this.group = `Physical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The training in, and enjoyment of, vigorous exertion for non-professional, competitive sports, exercises, and contests of strength, endurance, and agility. Includes sports and hobbies such as tennis, track and field, cricket, skateboarding, bicycling, golf, skiing, swimming, bowling, baseball, basketball, and other similar activities.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 Parry.
+1 Dodge.
+1 Roll with Impact.
+1 P.S.
+1D6 Spd.
+1D8 S.D.C.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = AthleticsGeneral;