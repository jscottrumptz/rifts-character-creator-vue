const Psionic = require('../Psionic');

class Levitation extends Psionic {
    constructor() {
        super();
        this.name = 'Levitation';
        this.group = 'Physical';
        this.range = 'Up to 60 feet (18.3 m) away.';
        this.duration = '2 minutes per level of experience.';
        this.cost = 'Small: 2 I.S.P., medium: 6 I.S.P., large: 6 I.S.P. plus 1 I.S.P. per every 10 lbs (4.5 kg) over 20 lbs (9 kg). ';
    }
}

module.exports = Levitation;