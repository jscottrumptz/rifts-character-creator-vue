const Skill = require('../Skill');

class GamblingStandard extends Skill {
    constructor() {
        super();
        this.name = `Gambling: Standard`;
        this.group = `Rogue`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `This skill enables the character to skillfully play several different games of chance. The character knows the rules of 1D4games, plus one additional game for every 2 points of I.Q. (rounded up). In addition to rules, the character understands the theories of mathematical 'odds' (See bonuses below), some basic strategies and tactics for winning consistently, when to hold them, fold them, etc.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to the Mathematics: Basic [Science] skill if this skill is also taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = GamblingStandard;