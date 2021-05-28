const Skill = require('../Skill');

class RadioBasic extends Skill {
    constructor() {
        super();
        this.name = `Radio: Basic`;
        this.group = `Communication`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `This is the rudimentary knowledge of the operation and maintenance of field radios and walkie-talkies, wire laying, installation, radio procedure, communication security and visual signals/communications, as well as Morse Code. It does not include the ability to make repairs.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `45`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = RadioBasic;