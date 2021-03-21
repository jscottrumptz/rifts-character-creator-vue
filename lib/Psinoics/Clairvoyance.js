const Psionic = require('../Psionic');

class Clairvoyance extends Psionic {
    constructor() {
        super();
        this.name = 'Clairvoyance';
        this.group = 'Sensitive';
        this.range = 'Self (although the image could pertain to people or places thousands of miles away.';
        this.duration = '6D6 melees.';
        this.cost = '4 I.S.P.';
    }
}

module.exports = Clairvoyance;