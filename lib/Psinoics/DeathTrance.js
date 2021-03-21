const Psionic = require('../Psionic');

class DeathTrance extends Psionic {
    constructor() {
        super();
        this.name = 'Death Trance';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = 'As long as the psychic senses he must feign death, up to a maximum of four days.';
        this.cost = '1 I.S.P.';
    }
}

module.exports = DeathTrance;