const Skill = require('../Skill');

class FieldSurgery extends Skill {
    constructor() {
        super();
        this.name = `Field Surgery`;
        this.group = `Medical`;
        this.isSecondary = false;
        this.note = `A failed roll means the patient dies of their injuries in a matter of minutes. Magical and psionic healing may help keep the patient alive, but will not repair damage from a lost limb or massive trauma from an M.D.C. blast.`;
        this.description = `The training in emergency, life-saving surgical procedures that can be performed 'in the field' to keep critically wounded individuals alive. Given the proper equipment, the field surgeon can perform amputations, suture torn arteries, check internal bleeding, cauterize wounds, give blood transfusion, and even install cybernetic implants (this last ability is performed with a -15% penalty, unless the character is a Cyber-Doc). Field expedient surgery is a dangerous proposition that all too often results in the death of the patient. Because of the risk involved, field surgery is attempted only as a last resort, otherwise the injured is stabilized and evacuated to a hospital or field clinic.`;
        this.bonus = ` +14% to this skill if Medical Doctor [Medical] is also taken.`;
        this.perLvl = 4;
        this.base = 16;
        this.penalty = `Without Xenology [Science], any attempts to use a medical skill on an alien species has a -20% penalty.`;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'medicalDoctor') {
                this.skillBonus = this.skillBonus + 14;
            }
        })
    }
}

module.exports = FieldSurgery;