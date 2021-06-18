const AstralProjection = require('./AstralProjection');
const CallLightning = require('./CallLightning');
const Calling = require('./Calling');
const Chameleon = require('./Chameleon');
const CloseRift = require('./CloseRift');
const Concealment = require('./Concealment');
const DetectConcealment = require('./DetectConcealment');
const DispelMagicBarriers = require('./DispelMagicBarriers');
const EnergyDisruption = require('./EnergyDisruption');
const Escape = require('./Escape');
const Locate = require('./Locate');
const MysticPortal = require('./MysticPortal');
const NegateMagic = require('./NegateMagic');
const PlaneSkip = require('./PlaneSkip');
const RealityFlux = require('./RealityFlux');
const SecondSight = require('./SecondSight');
const ShadowMeld = require('./ShadowMeld');
const TeleportLesser = require('./TeleportLesser');
const TeleportSuperior = require('./TeleportSuperior');
const TimeHole = require('./TimeHole');
const TimeSlip = require('./TimeSlip');

class InvocationB{
    constructor(
        astralProjection = new AstralProjection,
        callLightning = new CallLightning,
        calling = new Calling,
        chameleon = new Chameleon,
        closeRift = new CloseRift,
        concealment = new Concealment,
        detectConcealment = new DetectConcealment,
        dispelMagicBarriers = new DispelMagicBarriers,
        energyDisruption = new EnergyDisruption,
        escape = new Escape,
        locate = new Locate,
        mysticPortal = new MysticPortal,
        negateMagic = new NegateMagic,
        planeSkip = new PlaneSkip,
        realityFlux = new RealityFlux,
        secondSight = new SecondSight,
        shadowMeld = new ShadowMeld,
        teleportLesser = new TeleportLesser,
        teleportSuperior = new TeleportSuperior,
        timeHole = new TimeHole,
        timeSlip = new TimeSlip,
    ) {
        this.astralProjection = astralProjection;
        this.callLightning = callLightning;
        this.calling = calling;
        this.chameleon = chameleon;
        this.closeRift = closeRift;
        this.concealment = concealment;
        this.detectConcealment = detectConcealment;
        this.dispelMagicBarriers = dispelMagicBarriers;
        this.energyDisruption = energyDisruption;
        this.escape = escape;
        this.locate = locate;
        this.mysticPortal = mysticPortal;
        this.negateMagic = negateMagic;
        this.planeSkip = planeSkip;
        this.realityFlux = realityFlux;
        this.secondSight = secondSight;
        this.shadowMeld = shadowMeld;
        this.teleportLesser = teleportLesser;
        this.teleportSuperior = teleportSuperior;
        this.timeHole = timeHole;
        this.timeSlip = timeSlip;
    }
}

module.exports = InvocationB;