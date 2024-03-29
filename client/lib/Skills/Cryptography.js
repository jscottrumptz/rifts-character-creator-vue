const Skill = require('../Skill');

class Cryptography extends Skill {
    constructor() {
        super();
        this.name = `Cryptography`;
        this.group = `Communication`;
        this.isSecondary = false;
        this.description = `The skill in recognising, designing, and cracking secret codes and messages. The character must study the code for two hours to attempt to break it successfully. A failed roll means the individual must study the code for an additional two hours before trying to break it again. The character may attempt to break the code sooner, after only 10 minutes of study, but suffers a penalty of -30%.`;
        this.required = `Literacy [Communication]`;
        this.perLvl = 5;
        this.base = 25;
        this.preq = ['literacy'];
    }
}

module.exports = Cryptography;