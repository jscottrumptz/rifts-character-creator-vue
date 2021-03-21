const Psionic = require('../Psionic');

class Telepathy extends Psionic {
    constructor() {
        super();
        this.name = 'Telepathy';
        this.group = 'Sensitive';
        this.range = 'Read surface thoughts up to 60 feet ( 18.3 m) away or two-way telepathic communication up to 140 feet (42.7 m) +40 feet (12.2 m) per level of experience.';
        this.duration = '2 minutes per level of experience.';
        this.cost = '4 I.S.P.';
    }
}

module.exports = Telepathy;