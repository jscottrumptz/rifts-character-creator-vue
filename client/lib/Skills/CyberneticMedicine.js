const Skill = require('../Skill');

class CyberneticMedicine extends Skill {
    constructor() {
        super();
        this.name = `Cybernetic Medicine`;
        this.group = `Medical`;
        this.isSecondary = `false`;
        this.note = `One can not create a bionic implant in a garage. The character will need access to a cybernetics or bionics laboratory and the components to build or modify an artificial implant. Even a high-tech medical facility will not have the necessary components to create a cybernetic or bionic mechanism, although it may have access to them.`;
        this.description = `This doctor is a specialist in the science of cybernetics and a master surgeon. The character has all the basic knowledge and requirements of the Medical Doctor, although their diagnostic skills are nowhere near as honed, but is a specialist in surgery involving the removal of limbs and internal organs and the surgical attachment of cybernetic replacements (artificial organs and prosthetics).

The science of bionics is much more complex and machine oriented than basic cybernetics.

The first percentage number is the 'Cyber-Doc's' ability to accurately diagnose and treat a non-surgical problem/illness. The second percentage number is the doctor's ability to perform complex surgery, remove and install all types of cybernetic organs and devices, implants and bionics.

The Cyber-Doc can also work on, calibrate and repair, bionic implants as well as install them, but suffers a -15% skill penalty.

A doctor in cybernetics needs to select this skill twice and Electrical Engineering to be capable of working on bionic systems (military grade cybernetics, weaponry, and full bionic augmentation). This makes them a master in all the cybernetic and bionic sciences. There is then no penalty for installing bionics, and there is a special bonus of +10% to the character's surgical skill (the second percentile number). The full-fledged Cyber-Doc can also repair, modify, design, and build bionic and cybernetic devices.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `None (for basic skill), Cybernetic Medicine x2 and Electrical Engineering (for master-level skill).`;
        this.perLvl = `5`;
        this.baseTwo = `60`;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = `true`;
    }
}

module.exports = CyberneticMedicine;