const Skill = require('../Skill');

class CreativeWriting extends Skill {
    constructor() {
        super();
        this.name = `Creative Writing`;
        this.group = `Communication`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The ability to write prose/stories, poems,and journalistic reports, studies, news, and otherwise entertaining text (including songs at -15%).

Selecting this skill once indicates a talented amateur. Taking the skill twice indicates a professional quality and gains a bonus of +10% (indicate this by adding 'Superior' to the skill name).

A failed roll means a awkward and poorly written work that is boring and difficult to understand. Try again.

This skill does not provide the ability to recite written words with any level of charm. See Public Speaking for that.`;
        this.reqOCCGroup = ``;
        this.penalty = `Write songs at -15%`;
        this.bonus = ``;
        this.required = `Literacy [Communication]`;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['literacy'];
    }
}

module.exports = CreativeWriting;