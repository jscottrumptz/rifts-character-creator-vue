const Skill = require('../Skill');

class Research extends Skill {
    constructor() {
        super();
        this.name = `Research`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The training in the methods,techniques, and means of finding information, including public records, libraries, interviews, surveys, demographics, trade journals, the computer networks and legal searches. This skill is helpful in locating information about people, places, and things. The DM should ultimately regulate the availability of accessible, known information regarding a particular subject. Any character can do research and ask questions, but the Research skill will reduce the amount of time needed by half and the character is trained to notice relevant information that an untrained character is liable to overlook. Thus, for truly secret or difficult information, the character must have the Research skill to try and uncover it. Only roll to determine success on researching these difficult or hushed up bits of information.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to the Law [Technical] skill if this skill is taken.
+5% to the Impersonation [Espionage] skill if this skill is taken.
+5% to any History [Technical] skills if this skill is taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Research;