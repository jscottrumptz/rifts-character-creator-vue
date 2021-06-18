const DimensionalPortal = require('./DimensionalPortal');
const LeyLineFade = require('./LeyLineFade');
const LeyLineGhost = require('./LeyLineGhost');
const LeyLinePhantom = require('./LeyLinePhantom');
const LeyLineRestoration = require('./LeyLineRestoration');
const LeyLineResurrection = require('./LeyLineResurrection');
const LeyLineShutdown = require('./LeyLineShutdown');
const LeyLineStormDefense = require('./LeyLineStormDefense');
const LeyLineTendrilBolts = require('./LeyLineTendrilBolts');
const LeyLineTimeCapsule = require('./LeyLineTimeCapsule');
const LeyLineTimeFlux = require('./LeyLineTimeFlux');
const LeyLineTransmission = require('./LeyLineTransmission');
const RiftTeleportation = require('./RiftTeleportation');
const RiftToLimbo = require('./RiftToLimbo');
const RiftTriangularDefenseSystem = require('./RiftTriangularDefenseSystem');
const SummonLeyLineStorm = require('./SummonLeyLineStorm');
const SwallowingRift = require('./SwallowingRift');

class InvocationA{
    constructor(
        dimensionalPortal = new DimensionalPortal,
        leyLineFade = new LeyLineFade,
        leyLineGhost = new LeyLineGhost,
        leyLinePhantom = new LeyLinePhantom,
        leyLineRestoration = new LeyLineRestoration,
        leyLineResurrection = new LeyLineResurrection,
        leyLineShutdown = new LeyLineShutdown,
        leyLineStormDefense = new LeyLineStormDefense,
        leyLineTendrilBolts = new LeyLineTendrilBolts,
        leyLineTimeCapsule = new LeyLineTimeCapsule,
        leyLineTimeFlux = new LeyLineTimeFlux,
        leyLineTransmission = new LeyLineTransmission,
        riftTeleportation = new RiftTeleportation,
        riftToLimbo = new RiftToLimbo,
        riftTriangularDefenseSystem = new RiftTriangularDefenseSystem,
        summonLeyLineStorm = new SummonLeyLineStorm,
        swallowingRift = new SwallowingRift,
    ) {
        this.dimensionalPortal = dimensionalPortal;
        this.leyLineFade = leyLineFade;
        this.leyLineGhost = leyLineGhost;
        this.leyLinePhantom = leyLinePhantom;
        this.leyLineRestoration = leyLineRestoration;
        this.leyLineResurrection = leyLineResurrection;
        this.leyLineShutdown = leyLineShutdown;
        this.leyLineStormDefense = leyLineStormDefense;
        this.leyLineTendrilBolts = leyLineTendrilBolts;
        this.leyLineTimeCapsule = leyLineTimeCapsule;
        this.leyLineTimeFlux = leyLineTimeFlux;
        this.leyLineTransmission = leyLineTransmission;
        this.riftTeleportation = riftTeleportation;
        this.riftToLimbo = riftToLimbo;
        this.riftTriangularDefenseSystem = riftTriangularDefenseSystem;
        this.summonLeyLineStorm = summonLeyLineStorm;
        this.swallowingRift = swallowingRift;
    }
}

module.exports = InvocationA;