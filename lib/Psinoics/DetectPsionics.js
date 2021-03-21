const Psionic = require('../Psionic');

class DetectPsionics extends Psionic {
    constructor() {
        super();
        this.name = 'Detect Psionics';
        this.group = 'Healing';
        this.range = 'Self. Sensing range is 30 feet (9 m) per level of experience.';
        this.duration = 'One minute per level of experience.';
        this.cost = '6 I.S.P.';
    }
}

module.exports = DetectPsionics;