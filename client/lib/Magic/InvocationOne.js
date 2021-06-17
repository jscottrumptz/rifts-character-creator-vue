const BlindingFlash = require('./BlindingFlash');
const CloudOfSmoke = require('./CloudOfSmoke');
const DeathTrance = require('./DeathTrance');
const GlobeOfDaylight = require('./GlobeOfDaylight');
const LanternLight = require('./LanternLight');
const SeeAura = require('./SeeAura');
const SeeTheInvisible = require('./SeeTheInvisible');
const SenseEvil = require('./SenseEvil');
const SenseMagic = require('./SenseMagic');
const Thunderclap = require('./Thunderclap');


class InvocationOne {
    constructor(
        blindingFlash = new BlindingFlash,
        cloudOfSmoke = new CloudOfSmoke,
        deathTrance = new DeathTrance,
        globeOfDaylight = new GlobeOfDaylight,
        lanternLight = new LanternLight,
        seeAura = new SeeAura,
        seeTheInvisible = new SeeTheInvisible,
        senseEvil = new SenseEvil,
        senseMagic = new SenseMagic,
        thunderclap = new Thunderclap
    ) {
        this.blindingFlash = blindingFlash;
        this.cloudOfSmoke = cloudOfSmoke;
        this.deathTrance = deathTrance;
        this.globeOfDaylight = globeOfDaylight;
        this.lanternLight = lanternLight;
        this.seeAura = seeAura;
        this.seeTheInvisible = seeTheInvisible;
        this.senseEvil = senseEvil;
        this.senseMagic = senseMagic;
        this.thunderclap = thunderclap
    }
}

module.exports = InvocationOne;