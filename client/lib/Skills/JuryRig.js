const Skill = require('../Skill');

class JuryRig extends Skill {
    constructor() {
        super();
        this.name = `Jury-Rig`;
        this.group = `Technical`;
        this.isSecondary = true;
        this.description = `The character with this skill can repair almost anything and even build something out of scrap components. There is no guarantee that the jury-rig will hold for very long (4D6 hours or 2D4 days, whichever is most appropriate), or will even work in the way intended (roll again, a failed roll means the system is only 50% functional/works at half its normal speed or power level), but it may well save a character's life until they can acquire the proper parts, buy a new unit, or get a skilled mechanic to do the right job.`;
        this.bonus = `+10% if Electrical Engineer [Electrical], Mechanical Engineer [Mechanical], or Field Armourer & Munitions [Military].`;
        this.required = `At least Basic Mechanics [Mechanical] and Basic Electronics [Electrical], although Engineering skills are better.`;
        this.perLvl = 5;
        this.base = 25;
        this.preq = ['mechan', 'lectr']
    }

    rollSecondary(character, list) {
        let gotOne = false;
        list.forEach(skill => {
            if(skill === 'electricalEngineer' && !gotOne ||
                skill === 'mechanicalEngineer' && !gotOne ||
                skill === 'fieldArmourerAndMunitions' && !gotOne ) {
                this.skillBonus = this.skillBonus + 10;
                gotOne = true;
            }
        })
    }
}

module.exports = JuryRig;