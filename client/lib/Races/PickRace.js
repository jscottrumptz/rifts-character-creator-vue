const Human = require('./Human');
const Dnorr = require('./Dnorr');
const Dramin = require('./Dramin');
const Dragon = require('./Dragon');

class PickRace {
    constructor(
        human = new Human,
        dnorr = new Dnorr,
        dramin = new Dramin,
        dragon = new Dragon,
    ) {
        this.human = human;
        this.dnorr = dnorr;
        this.dramin = dramin;
        this.dragon = dragon;
    }
}

module.exports = PickRace;