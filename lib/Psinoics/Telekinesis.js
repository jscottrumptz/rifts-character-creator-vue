const Psionic = require('../Psionic');

class Telekinesis extends Psionic {
    constructor() {
        super();
        this.name = 'Telekinesis';
        this.group = 'Physical';
        this.range = 'Up to 60 feet (18.3 m) away.';
        this.duration = '2 minutes per level of experience.';
        this.cost = 'Small: 3 I.S.P., medium: 8 I.S.P., large (over 20 lbs/9 kg): 8 I.S.P. + 1 I.S.P. per every 10 lbs (4.5 kg) of weight. ';
    }
}

module.exports = Telekinesis;