const Psionic = require('../Psionic');

class Ectoplasm extends Psionic {
    constructor() {
        super();
        this.name = 'Ectoplasm';
        this.group = 'Physical';
        this.range = '40 feet +5 feet ( 12.2 + 1.5 m) per level of experience.';
        this.duration = '4 minutes (16 melees) per level of experience.';
        this.cost = '(Vapor): 6 I.S.P.  (Solid):12 I.S.P.';
    }
}

module.exports = Ectoplasm;