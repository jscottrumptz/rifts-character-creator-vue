const Psionic = require('../Psionic');

class RemoteViewing extends Psionic {
    constructor() {
        super();
        this.name = 'Remote Viewing';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '2D6+6 second flash of insight or vision of current events.';
        this.cost = '10 I.S.P.';
    }
}

module.exports = RemoteViewing;