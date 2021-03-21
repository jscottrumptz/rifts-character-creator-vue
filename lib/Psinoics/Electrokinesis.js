const Psionic = require('../Psionic');

class Electrokinesis extends Psionic {
    constructor() {
        super();
        this.name = 'Electrokinesis';
        this.group = 'Super';
        this.range = 'Varies.';
        this.duration = 'Varies.';
        this.cost = 'Varies.';
    }
}

module.exports = Electrokinesis;