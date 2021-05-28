const Skill = require('../Skill');

class Navigation extends Skill {
    constructor() {
        super();
        this.name = `Navigation`;
        this.group = `Pilot Related`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The training in map reading, star charts, course computation, following landmarks, and use of navigational equipment. Includes land, air, and water navigation, as well as piloting by instruments alone. A failed roll (by the DM) means the pilot is off course. Roll 2D6x100 for most aircraft, 4D6x100 for jets, and 2D6x10 for ground vehicles to determine hoe many miles/kilometers they are off course. Roll for every hour that one is off course. This skill enables characters to navigate any vehicle, including ships and other water vessels that ride on the surface of the water, by charting the stars and landmarks and using instruments and other data.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Mathematics: Basic, Sensory Equipment, and Literacy.`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Navigation;