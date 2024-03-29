const AstralProjection = require('./AstralProjection');
const Blind = require('./Blind');
const CarpetOfAdhesion = require('./CarpetOfAdhesion');
const CharismaticAura = require('./CharismaticAura');
const ChromaticProtection = require('./ChromaticProtection');
const CureMinorDisorders = require('./CureMinorDisorders');
const Deflect = require('./Deflect');
const ElectricArc = require('./ElectricArc');
const EnergyField = require('./EnergyField');
const Fireblast = require('./Fireblast');
const FireBolt = require('./FireBolt');
const FistOfFury = require('./FistOfFury');
const FoolSGold = require('./FoolSGold');
const LeyLineTransmission = require('./LeyLineTransmission');
const MagicNet = require('./MagicNet');
const MultipleImage = require('./MultipleImage');
const Reflection = require('./Reflection');
const RepelAnimals = require('./RepelAnimals');
const RicochetStrike = require('./RicochetStrike');
const Seal = require('./Seal');
const ShadowMeld = require('./ShadowMeld');
const SwimAsAFish = require('./SwimAsAFish');
const Trance = require('./Trance');
const Watchguard = require('./Watchguard');
const WeightOfDuty = require('./WeightOfDuty');

class InvocationFour {
    constructor(
        astralProjection = new AstralProjection,
        blind = new Blind,
        carpetOfAdhesion = new CarpetOfAdhesion,
        charismaticAura = new CharismaticAura,
        chromaticProtection = new ChromaticProtection,
        cureMinorDisorders = new CureMinorDisorders,
        deflect = new Deflect,
        electricArc = new ElectricArc,
        energyField = new EnergyField,
        fireblast = new Fireblast,
        fireBolt = new FireBolt,
        fistOfFury = new FistOfFury,
        foolSGold = new FoolSGold,
        leyLineTransmission = new LeyLineTransmission,
        magicNet = new MagicNet,
        multipleImage = new MultipleImage,
        reflection = new Reflection,
        repelAnimals = new RepelAnimals,
        ricochetStrike = new RicochetStrike,
        seal = new Seal,
        shadowMeld = new ShadowMeld,
        swimAsAFish = new SwimAsAFish,
        trance = new Trance,
        watchguard = new Watchguard,
        weightOfDuty = new WeightOfDuty
    ) {
        this.astralProjection = astralProjection;
        this.blind = blind;
        this.carpetOfAdhesion = carpetOfAdhesion;
        this.charismaticAura = charismaticAura;
        this.chromaticProtection = chromaticProtection;
        this.cureMinorDisorders = cureMinorDisorders;
        this.deflect = deflect;
        this.electricArc = electricArc;
        this.energyField = energyField;
        this.fireblast = fireblast;
        this.fireBolt = fireBolt;
        this.fistOfFury = fistOfFury;
        this.foolSGold = foolSGold;
        this.leyLineTransmission = leyLineTransmission;
        this.magicNet = magicNet;
        this.multipleImage = multipleImage;
        this.reflection = reflection;
        this.repelAnimals = repelAnimals;
        this.ricochetStrike = ricochetStrike;
        this.seal = seal;
        this.shadowMeld = shadowMeld;
        this.swimAsAFish = swimAsAFish;
        this.trance = trance;
        this.watchguard = watchguard;
        this.weightOfDuty = weightOfDuty;
    }
}

module.exports = InvocationFour;