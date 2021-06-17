const ArmorOfIthan = require('./ArmorOfIthan');
const BreatheWithoutAir = require('./BreatheWithoutAir');
const CreateWood = require('./CreateWood');
const EnergyBolt = require('./EnergyBolt');
const FingersOfWind = require('./FingersOfWind');
const FloatInAir = require('./FloatInAir');
const FuelFlame = require('./FuelFlame');
const IgniteFire = require('./IgniteFire');
const ImperviousToFire = require('./ImperviousToFire');
const ImperviousToPoison = require('./ImperviousToPoison');
const InvisibilitySimple = require('./InvisibilitySimple');
const LifeSource = require('./LifeSource');
const LightHealing = require('./LightHealing');
const LightTarget = require('./LightTarget');
const MagicShield = require('./MagicShield');
const MysticFulcrum = require('./MysticFulcrum');
const NegatePoisonToxin = require('./NegatePoisonToxin');
const OrbOfCold = require('./OrbOfCold');
const ParalysisLesser = require('./ParalysisLesser');
const ResistFire = require('./ResistFire');
const Telekinesis = require('./Telekinesis');
const WaveOfFrost = require('./WaveOfFrost');

class InvocationThree {
    constructor(
        armorOfIthan = new ArmorOfIthan,
        breatheWithoutAir = new BreatheWithoutAir,
        createWood = new CreateWood,
        energyBolt = new EnergyBolt,
        fingersOfWind = new FingersOfWind,
        floatInAir = new FloatInAir,
        fuelFlame = new FuelFlame,
        igniteFire = new IgniteFire,
        imperviousToFire = new ImperviousToFire,
        imperviousToPoison = new ImperviousToPoison,
        invisibilitySimple = new InvisibilitySimple,
        lifeSource = new LifeSource,
        lightHealing = new LightHealing,
        lightTarget = new LightTarget,
        magicShield = new MagicShield,
        mysticFulcrum = new MysticFulcrum,
        negatePoisonToxin = new NegatePoisonToxin,
        orbOfCold = new OrbOfCold,
        paralysisLesser = new ParalysisLesser,
        resistFire = new ResistFire,
        telekinesis = new Telekinesis,
        waveOfFrost = new WaveOfFrost
    ) {
        this.armorOfIthan = armorOfIthan;
        this.breatheWithoutAir = breatheWithoutAir;
        this.createWood = createWood;
        this.energyBolt = energyBolt;
        this.fingersOfWind = fingersOfWind;
        this.floatInAir = floatInAir;
        this.fuelFlame = fuelFlame;
        this.igniteFire = igniteFire;
        this.imperviousToFire = imperviousToFire;
        this.imperviousToPoison = imperviousToPoison;
        this.invisibilitySimple = invisibilitySimple;
        this.lifeSource = lifeSource;
        this.lightHealing = lightHealing;
        this.lightTarget = lightTarget;
        this.magicShield = magicShield;
        this.mysticFulcrum = mysticFulcrum;
        this.negatePoisonToxin = negatePoisonToxin;
        this.orbOfCold = orbOfCold;
        this.paralysisLesser = paralysisLesser;
        this.resistFire = resistFire;
        this.telekinesis = telekinesis;
        this.waveOfFrost = waveOfFrost;
    }
}

module.exports = InvocationThree;