const Skill = require('../Skill');

class Ventriloquism extends Skill {
    constructor() {
        super();
        this.name = `Ventriloquism`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The  practiced ability to throw one's voice. This can be used to create the illusion of not speaking while making a voice or verbal noise appear to be coming from someone or something else, such as a puppet, a tree, box, chair, etc. Maximum range is 10 feet (3m) away. A failed roll means the voice is not well thrown or the ventriloquist's mouth is seen moving, so the trick does not work.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `16`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Ventriloquism;