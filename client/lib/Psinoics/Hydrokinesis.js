const Psionic = require('../Psionic');

class Hydrokinesis extends Psionic {
    constructor() {
        super();
        this.name = 'Hydrokinesis';
        this.group = 'Super';
        this.range = 'Varies.';
        this.duration = 'Varies.';
        this.cost = 'Varies.';
    }
}

module.exports = Hydrokinesis;