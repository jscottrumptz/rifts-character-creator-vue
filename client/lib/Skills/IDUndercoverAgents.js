const Skill = require('../Skill');

class IDUndercoverAgents extends Skill {
    constructor() {
        super();
        this.name = `I.D. Undercover Agents`;
        this.group = `Rogue`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The combination skill of good eye and knack for identifying undercover agents; typically members of law enforcement, but may also include government agents, private detectives, spies, bounty hunters, and anybody snooping around.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = IDUndercoverAgents;