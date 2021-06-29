const Spell = require('../Spell');

class ParalysisLesser extends Spell {
    constructor() {
        super();
        this.name = 'Paralysis: Lesser';
        this.group = 'Invocation';
        this.level = 'Three';
        this.range = `60 feet (18.3 m).`;
        this.duration = `The effect lasts one minute (4 melees) per level of experience.`;
        this.cost = `5 P.P.E.`;
        this.savingThrow = `Standard.`;
        this.description = `    This magic attack temporarily paralyzes a part of its victim's body, immobilizing that particular limb. A paralyzed hand means that the person can not pick up or hold objects or write, or use the hand in any way. A paralyzed arm means the limb dangles uselessly at the character's side. A paralyzed leg makes standing difficult and movement al-most impossible; reduce speed by 90%, -2 to parry and dodge.`;
        this.note = `The incantation will paralyze only one limb per each invoking of the magic. Internal organs can not be affected, so the mage can not paralyze a heart or lung, etc. Paralysis can not affect people inside a vehicle, robot, power armor, or environmental M.D.C. body armor.`;
    }
}

module.exports = ParalysisLesser;