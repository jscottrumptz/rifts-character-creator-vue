const Psionic = require('../Psionic');

class DetectPsionics extends Psionic {
    constructor() {
        super();
        this.name = 'Detect Psionics';
        this.group = 'Healing';
        this.range = 'Self. Sensing range is 30 feet (9 m) per level of experience.';
        this.duration = 'One minute per level of experience.';
        this.cost = '6 I.S.P.';
        this.description = `    This is a mental probe that will indicate the presence of psionic energy within the immediate area. The probe cannot be used to pinpoint the exact location of psychic energy, nor the level of power other than a vague sense of weak. medium, or powerful.
    Detect Psionics will indicate whether an individual is psychic when the probe is directed at a specific individual. However, while it will indicate if the character possesses psychic ability, it does not reveal the type or strength of the character's powers other than low, medium, or high. It will also indicate whether a Group Mind Block is in effect and if a person is psionically possessed.`
    }
}

module.exports = DetectPsionics;