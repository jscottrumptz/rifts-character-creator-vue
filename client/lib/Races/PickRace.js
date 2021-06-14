const AutoG = require('./AutoG');
const Human = require('./Human');
const Dnorr = require('./Dnorr');
const Dramin = require('./Dramin');
const Malvoren = require('./Malvoren');

class PickRace {
    constructor(
        autoG= new AutoG,
        human = new Human,
        dnorr = new Dnorr,
        dramin = new Dramin,
        malvoren = new Malvoren,
    ) {
        this.autoG = autoG;
        this.human = human;
        this.dnorr = dnorr;
        this.dramin = dramin;
        this.malvoren = malvoren;
    }
}

module.exports = PickRace;