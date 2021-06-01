const Skill = require('../Skill');

class AstronomyandNavigation extends Skill {
    constructor() {
        super();
        this.name = `Astronomy & Navigation`;
        this.group = `Science`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The study of the stars and other celestial bodies, their movements, positions, cycles, alignments, and interrelations with the planets and each other. This knowledge can also be used to determine direction, approximate distances, identify the seasons, and tell the time of day. Training includes reading maps and star charts, course computations, following landmarks, and the use of navigational equipment. Includes land, air, and water navigation, as well as piloting by the stars and instruments alone. This ability is ideal for sailors and those characters who can fly. A failed roll (by the DM) means the navigator is off course. To determine how many miles off course, roll 2D6 miles when travelling on foot, 1D6x10 miles when travelling by horse or car,and 2D4x10 miles, when flying or using a boat/ship. Roll once for every hour that one travels in unknown territory or seas.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+10% if the character also has Mathematics: Advanced.`;
        this.required = `Mathematics: Basic and Literacy to use instruments, read maps, and to chart a course by the stars.`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['mathematicsBasic', 'literacy'];
    }
}

module.exports = AstronomyandNavigation;