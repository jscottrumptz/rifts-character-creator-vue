const Amulet = require('./Amulet');
const CalmStorms = require('./CalmStorms');
const CreateZombie = require('./CreateZombie');
const Ensorcel = require('./Ensorcel');
const HeavyAir = require('./HeavyAir');
const Ironwood = require('./Ironwood');
const MetamorphosisMist = require('./MetamorphosisMist');
const NullSphere = require('./NullSphere');
const Soultwist = require('./Soultwist');
const SummonAndControlEntity = require('./SummonAndControlEntity');
const SummonAndControlRain = require('./SummonAndControlRain');
const SummonLeyLineStorm = require('./SummonLeyLineStorm');
const SwallowingRift = require('./SwallowingRift');
const TimeHole = require('./TimeHole');
const WallOfTheWeird = require('./WallOfTheWeird');

class InvocationTwelve{
    constructor(
        amulet = new Amulet,
        calmStorms = new CalmStorms,
        createZombie = new CreateZombie,
        ensorcel = new Ensorcel,
        heavyAir = new HeavyAir,
        ironwood = new Ironwood,
        metamorphosisMist = new MetamorphosisMist,
        nullSphere = new NullSphere,
        soultwist = new Soultwist,
        summonAndControlEntity = new SummonAndControlEntity,
        summonAndControlRain = new SummonAndControlRain,
        summonLeyLineStorm = new SummonLeyLineStorm,
        swallowingRift = new SwallowingRift,
        timeHole = new TimeHole,
        wallOfTheWeird = new WallOfTheWeird
    ) {
        this.amulet = amulet;
        this.calmStorms = calmStorms;
        this.createZombie = createZombie;
        this.ensorcel = ensorcel;
        this.heavyAir = heavyAir;
        this.ironwood = ironwood;
        this.metamorphosisMist = metamorphosisMist;
        this.nullSphere = nullSphere;
        this.soultwist = soultwist;
        this.summonAndControlEntity = summonAndControlEntity;
        this.summonAndControlRain = summonAndControlRain;
        this.summonLeyLineStorm = summonLeyLineStorm;
        this.swallowingRift = swallowingRift;
        this.timeHole = timeHole;
        this.wallOfTheWeird = wallOfTheWeird;
    }
}

module.exports = InvocationTwelve;