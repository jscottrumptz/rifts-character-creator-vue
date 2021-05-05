const StatValue = require('./StatValue')

// also make changes in OCC and Race
class Chances {
    constructor(
        trust = new StatValue,
        intimidate = new StatValue,
        charm = new StatValue,
        impress = new StatValue
    ) {
        this.trust = trust;
        this.trust.name = 'Trust'
        this.intimidate = intimidate;
        this.intimidate.name = 'Intimidate';
        this.charm = charm;
        this.charm.name = 'Charm';
        this.impress = impress;
        this.impress.name = 'Impress';
    }

    getTrust() {
        return this.trust;
    }

    getIntimidate() {
        return this.intimidate;
    }

    getCharm() {
        return this.charm;
    }

    getImpress() {
        return this.impress;
    }
}

module.exports = Chances;