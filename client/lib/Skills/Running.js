const Skill = require('../Skill');

class Running extends Skill {
    constructor() {
        super();
        this.name = `Running`;
        this.group = `Physical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The routine of running and exercise to build speed and endurance. For game purposes the character is able to run at an even pace (half speed) for a half mile (0.8km) for every 1 point of P.E. without undue fatigue. If  pushing oneself to the limit and running at maximum speed, the character can run one third that distance before collapsing.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 to P.E.
+4D4 to Spd.
+1D6 to S.D.C.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Running;