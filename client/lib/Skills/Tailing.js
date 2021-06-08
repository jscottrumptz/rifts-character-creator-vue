const Skill = require('../Skill');

class Tailing extends Skill {
    constructor() {
        super();
        this.name = `Tailing`;
        this.group = `Rogue`;
        this.isSecondary = `false`;
        this.note = `Tailing is also part of the Surveillance skill.`;
        this.description = `The practiced ability to follow someone without their knowledge. Includes basic stake-out procedures. A failed roll (by the DM) indicates that the character being 'tailed' has noticed that they are being followed and may take evasive action to lose the 'tail' or confront or attack the 'tailer' (unless the tailer makes a run for it). Either way, the subject of the 'tail' is likely to escape being followed any further.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Prowl [Physical, Rogue] is also taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `35`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill.includes('prowl')) {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = Tailing;