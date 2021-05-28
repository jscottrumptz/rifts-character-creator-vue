const Skill = require('../Skill');

class Concealment extends Skill {
    constructor() {
        super();
        this.name = `Concealment`;
        this.group = `Rogue`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The practiced ability to hide small items on one's body or in hand, usually by continually moving it around from hand to hand or place to place, or hide them on one's person or an innocent bystander unnoticed. Objects must be no larger than 14 inches (35.5cm) in height/length,and six inches (15.2cm) in width. The weight must be 10 lbs. (4.5kg) or less. The smaller and lighter the object, such as a knife, gem, key, etc., the easier it is to conceal (add a bonus of +5%). Larger items such as a book, scroll, club, statue, or similarly large or heavy object are more difficult to conceal on one's person for obvious reasons.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `20`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Concealment;