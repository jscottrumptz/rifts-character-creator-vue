const Spell = require('../Spell');

class DetectConcealment extends Spell {
    constructor() {
        super();
        this.name = 'Detect Concealment';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `Area affect: 30 feet (9.1 m).`;
        this.duration = `Instant.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    A magic invocation that will instantly negate any Concealment spell(s) and reveal any object(s) which may have been mystically concealed. Can be directed at a specific area or individual, or made to affect an entire area 30 feet (9.1 m) in diameter.`;    }
}

module.exports = DetectConcealment;