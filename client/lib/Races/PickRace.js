const AutoG = require('./AutoG');
const Human = require('./Human');
const Dnorr = require('./Dnorr');
const Dramin = require('./Dramin');
const Larmac = require('./Larmac');
const Malvoren = require('./Malvoren');
const QuickFlexAlien = require('./QuickFlexAlien')

class PickRace {
    constructor(
        autoG= new AutoG,
        human = new Human,
        dnorr = new Dnorr,
        dramin = new Dramin,
        larmac = new Larmac,
        malvoren = new Malvoren,
        quickFlexAlien = new QuickFlexAlien
    ) {
        this.autoG = autoG;
        this.human = human;
        this.dnorr = dnorr;
        this.dramin = dramin;
        this.larmac = larmac;
        this.malvoren = malvoren;
        this.quickFlexAlien = quickFlexAlien;
    }
}

module.exports = PickRace;