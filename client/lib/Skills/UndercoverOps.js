const Skill = require('../Skill');

class UndercoverOps extends Skill {
    constructor() {
        super();
        this.name = `Undercover Ops`;
        this.group = `Espionage`;
        this.isSecondary = `false`;
        this.note = `This skill is typically reserved for law enforcement, espionage agents, mercenaries, con artists, and other criminal types.`;
        this.description = `The training in undercover operations in which the character learns the methods and techniques of blending smoothly into the background and appearing as if they belong there (just another unmemorable face in the crowd or one of the guys), as well as assuming a false identity and playing a 'role' to track, spy upon, or gather information or evidence.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = UndercoverOps;