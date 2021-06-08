const Skill = require('../Skill');

class RadioBasic extends Skill {
    constructor() {
        super();
        this.name = `Radio: Basic`;
        this.group = `Communication`;
        this.isSecondary = true;
        this.description = `This is the rudimentary knowledge of the operation and maintenance of field radios and walkie-talkies, wire laying, installation, radio procedure, communication security and visual signals/communications, as well as Morse Code. It does not include the ability to make repairs.`;
        this.perLvl = 5;
        this.base = 45;
    }
}

module.exports = RadioBasic;