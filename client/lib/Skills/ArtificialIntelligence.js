const Skill = require('../Skill');

class ArtificialIntelligence extends Skill {
    constructor() {
        super();
        this.name = `Artificial Intelligence`;
        this.group = `Science`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The area of science that is usually available only to those who specialize in robotics and computers (which may include the Operator and Rogue Scientist O.C.C.s). True artificial intelligences (A.I.s) - robots that can think and learn for themselves - are incredibly rare in North America and most of Rifts Earth. Thus, this skill is more common 'off-planet' on advanced worlds accessible by the Rifts.

A.I.s range from simple thinking computers and devices with problem solving capabilities and the ability to learn and think independent of a human operator, to devices modeled on the neural network of the human mind which can think, learn, solve problems,create and even imagine independent of their programming.

A character with this Science skill understands the many principles and theories behind artificial intelligences, how they 'think' and 'understand' the world around them, how to communicate with them and how to reprogram them, either directly or by argument.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to all other computer skills, including programming and hacking skills.`;
        this.required = `Computer Operation.`;
        this.perLvl = `3`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = ArtificialIntelligence;