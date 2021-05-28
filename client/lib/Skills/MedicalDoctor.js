const Skill = require('../Skill');

class MedicalDoctor extends Skill {
    constructor() {
        super();
        this.name = `Medical Doctor`;
        this.group = `Medical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The Medical Doctor is a trained surgeon and has a doctorate in the medical sciences. Areas of training include: clinical skills, medical discipline, code of ethics, physiology (muscle, respiratory, blood, body fluids), pathology (diseases, their structure and function)m rudimentary pharmacology (use, reaction, and interaction of drugs), laboratory skills, and techniques and methods of data collection.

Surgery includes the precision use of knives and scalpels for medical purposes, suturing cuts, removing warts and growths, delivering babies (by C-Section if necessary), realigning and setting broken bones, amputating limbs, cauterizing wounds, surgically removing foreign objects (i.e. bullets, shrapnel, etc.), stopping blood loss, surgically stopping internal bleeding, repairing internal injuries, and the general treatment of wounds and disease.

The first percentage is the doctor's ability to accurately diagnose the problem. The second percentage is the doctor's skill at successfully treating the problem.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Biology, Chemistry, Mathematics: Basic OR Mathematics: Advanced, Pathology, and Literacy.`;
        this.perLvl = `5`;
        this.baseTwo = `50`;
        this.base = `60`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = MedicalDoctor;