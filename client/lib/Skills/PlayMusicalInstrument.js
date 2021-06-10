const Skill = require('../Skill');

class PlayMusicalInstrument extends Skill {
    constructor() {
        super();
        this.name = `Instrument: `;
        this.group = `Domestic`;
        this.isSecondary = true;
        this.note = `Each specific instrument requires a separate selection of this skill. For example, a character who wants to play the guitar, violin, and harmonica must select this skill three different times.`;
        this.description = `The individual has learned to play a particular musical instrument with a fair amount of skill. The sound is generally pleasant (except when a bad roll is made).`;
        this.perLvl = 5;
        this.base = 35;
        this.takeTwiceBonus = `+10%`;
        this.takeTwice = true;
        this.textEntry = 'Enter Instrument Type';
        this.removePostPick = false;
    }

    rollSecondary() {
        if (this.takenTwice) {
            this.skillBonus = this.skillBonus + 10;
        }
    }
}

module.exports = PlayMusicalInstrument;