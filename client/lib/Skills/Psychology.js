const Skill = require('../Skill');

class Psychology extends Skill {
    constructor() {
        super();
        this.name = `Psychology`;
        this.group = `Medical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The principles, theories, and evaluation of human behaviour as they apply to psychology and psycho-therapy. Includes analysis, understanding and treatment of emotional and mental illness, motivational and perceptual disorders, personality assessment, alcoholism, drug abuse and treatment, and other aspects and studies of the mind and human behaviour.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Biology, Chemistry, and Literacy.`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `35`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Psychology;