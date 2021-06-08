const Skill = require('../Skill');

class Paramedic extends Skill {
    constructor() {
        super();
        this.name = `Paramedic`;
        this.group = `Medical`;
        this.isSecondary = false;
        this.note = `For serious injury or coma, the DM rolls three times, consecutively. Two success out of three means the wound has been properly treated or that the patient's condition has stabilized. Failure of two or more rolls means the patient's condition is not improved and is getting worse. Another character may immediately attempt to apply medical aid or the same character can try again, but the first must now spend 1D6 minutes of reexamination and/or concentration on the problem before they can try again.`;
        this.description = `The advanced form of emergency medical treatment which includes all first aid techniques, the setting of broken bones, suturing of wounds, use of oxygen and emergency medical equipment, administering of drugs, knowledge of how to move a critically injured person, and other life-saving techniques.

A failed roll means the patient has not responded to treatment or that the treatment has been improperly administered.`;
        this.perLvl = 5;
        this.base = 40;
        this.penalty = `Without Xenology [Science], any attempts to use a medical skill on an alien species has a -20% penalty.`;
    }
}

module.exports = Paramedic;