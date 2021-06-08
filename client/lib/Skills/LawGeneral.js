const Skill = require('../Skill');

class LawGeneral extends Skill {
    constructor() {
        super();
        this.name = `Law (general)`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `The character knows what constitutes a criminal act, the typical punishment, and many legal precedents, procedures, and decisions common throughout a particular nation or region (e.g. North America, including the CS and all major kingdoms, but not each specific, small independent kingdom or town, nor tribal law). This can be an invaluable skill when trying to determine if someone id breaking the law, how grave or petty the criminal act is, as well as determining the likely punishment. The skill is also important for making a criminal charge stick, setting bail, using legal protocol and proper conduct for conducting searches, police investigations and other aspects of law enforcement.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Research [Technical] is also taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `35`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'research') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = LawGeneral;