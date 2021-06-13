const Psionic = require('../Psionic');

class Pyrokinesis extends Psionic {
    constructor() {
        super();
        this.name = 'Pyrokinesis';
        this.group = 'Super';
        this.range = 'Varies.';
        this.duration = 'Varies.';
        this.cost = 'Varies.';
    }
}

module.exports = Pyrokinesis;