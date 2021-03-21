const Psionic = require('../Psionic');

class ObjectRead extends Psionic {
    constructor() {
        super();
        this.name = 'Object Read';
        this.group = 'Sensitive';
        this.range = 'Touch.';
        this.duration = 'Varies; usually about 2D6 minutes. ';
        this.cost = '6 I.S.P.';
    }
}

module.exports = ObjectRead;