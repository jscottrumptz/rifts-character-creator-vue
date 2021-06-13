const Psionic = require('../Psionic');

class TelekinesisSuper extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinesis (Super)';
        this.group = 'Super';
        this.range = '100 feet (30.5 m) per level of experience.';
        this.duration = '2 minutes per level of experience.';
        this.cost = '10 I.S.P. to lift/move/hurl an object that weighs 100 lbs (45 kg), +10 I.S.P. per each additional 100 lbs (45 kg). ';
    }
}

module.exports = TelekinesisSuper;