const BarrierOfThoth = require('./BarrierOfThoth');
const BlightOfAges = require('./BlightOfAges');
const BloodAndThunder = require('./BloodAndThunder');
const CrimsonWallOfLictalon = require('./CrimsonWallOfLictalon');
const DopplegangerSuperior = require('./DopplegangerSuperior');
const Hivemind = require('./Hivemind');
const LeyLineResurrection = require('./LeyLineResurrection');
const Metropolis = require('./Metropolis');
const MysticQuake = require('./MysticQuake');
const Sanctuary = require('./Sanctuary');
const TheSlowness = require('./TheSlowness');
const SteelRain = require('./SteelRain');
const ViciousCircle = require('./ViciousCircle');
const WarriorHorde = require('./WarriorHorde');

class InvocationFifteen{
    constructor(
        barrierOfThoth = new BarrierOfThoth,
        blightOfAges = new BlightOfAges,
        bloodAndThunder = new BloodAndThunder,
        crimsonWallOfLictalon = new CrimsonWallOfLictalon,
        dopplegangerSuperior = new DopplegangerSuperior,
        hivemind = new Hivemind,
        leyLineResurrection = new LeyLineResurrection,
        metropolis = new Metropolis,
        mysticQuake = new MysticQuake,
        sanctuary = new Sanctuary,
        theSlowness = new TheSlowness,
        steelRain = new SteelRain,
        viciousCircle = new ViciousCircle,
        warriorHorde = new WarriorHorde
    ) {
        this.barrierOfThoth = barrierOfThoth;
        this.blightOfAges = blightOfAges;
        this.bloodAndThunder = bloodAndThunder;
        this.crimsonWallOfLictalon = crimsonWallOfLictalon;
        this.dopplegangerSuperior = dopplegangerSuperior;
        this.hivemind = hivemind;
        this.leyLineResurrection = leyLineResurrection;
        this.metropolis = metropolis;
        this.mysticQuake = mysticQuake;
        this.sanctuary = sanctuary;
        this.theSlowness = theSlowness;
        this.steelRain = steelRain;
        this.viciousCircle = viciousCircle;
        this.warriorHorde = warriorHorde;
    }
}

module.exports = InvocationFifteen;