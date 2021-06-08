const Skill = require('../Skill');

class CyberneticMedicineMaster extends Skill {
    constructor() {
        super();
        this.name = `Cybernetic Medicine (Master)`;
        this.group = `Medical`;
        this.isSecondary = false;
        this.note = `One can not create a bionic implant in a garage. The character will need access to a cybernetics or bionics laboratory and the components to build or modify an artificial implant. Even a high-tech medical facility will not have the necessary components to create a cybernetic or bionic mechanism, although it may have access to them.`;
        this.description = `A master doctor in cybernetics is capable of working on bionic systems (military grade cybernetics, weaponry, and full bionic augmentation). This makes them a master in all the cybernetic and bionic sciences. There is then no penalty for installing bionics, and there is a special bonus of +10% to the character's surgical skill (the second percentile number). The full-fledged Cyber-Doc can also repair, modify, design, and build bionic and cybernetic devices.`;
        this.required = `Cybernetic Medicine [Medical] and Electrical Engineering [Electrical].`;
        this.perLvl = 5;
        this.baseTwo = 60;
        this.base = 40;
        this.preq = ['cyberneticMedicine', 'electricalEngineer']
        this.penalty = `Without Xenology [Science], any attempts to use a medical skill on an alien species has a -20% penalty.`;
    }
}

module.exports = CyberneticMedicineMaster;