const Annihilate = require('./Annihilate');
const CloseRift = require('./CloseRift');
const IdBarrier = require('./IdBarrier');
const ImpenetrableWallOfForce = require('./ImpenetrableWallOfForce');
const Restoration = require('./Restoration');
const Resurrection = require('./Resurrection');
const RiftTriangularDefenseSystem = require('./RiftTriangularDefenseSystem');
const SummonAndControlSeaSerpents = require('./SummonAndControlSeaSerpents');

class InvocationFourteen{
    constructor(
        annihilate = new Annihilate,
        closeRift = new CloseRift,
        idBarrier = new IdBarrier,
        impenetrableWallOfForce = new ImpenetrableWallOfForce,
        restoration = new Restoration,
        resurrection = new Resurrection,
        riftTriangularDefenseSystem = new RiftTriangularDefenseSystem,
        summonAndControlSeaSerpents = new SummonAndControlSeaSerpents
    ) {
        this.annihilate = annihilate;
        this.closeRift = closeRift;
        this.idBarrier = idBarrier;
        this.impenetrableWallOfForce = impenetrableWallOfForce;
        this.restoration = restoration;
        this.resurrection = resurrection;
        this.riftTriangularDefenseSystem = riftTriangularDefenseSystem;
        this.summonAndControlSeaSerpents = summonAndControlSeaSerpents;
    }
}

module.exports = InvocationFourteen;