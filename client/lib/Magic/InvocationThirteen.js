const Collapse = require('./Collapse');
const CreateGolem = require('./CreateGolem');
const ProtectionCircleSuperior = require('./ProtectionCircleSuperior');
const RestoreLife = require('./RestoreLife');
const Sanctum = require('./Sanctum');
const ShadowWall = require('./ShadowWall');
const SummonAndControlStorm = require('./SummonAndControlStorm');
const SummonLesserBeing = require('./SummonLesserBeing');
const SwapPlaces = require('./SwapPlaces');
const Talisman = require('./Talisman');

class InvocationThirteen{
    constructor(
        collapse = new Collapse,
        createGolem = new CreateGolem,
        protectionCircleSuperior = new ProtectionCircleSuperior,
        restoreLife = new RestoreLife,
        sanctum = new Sanctum,
        shadowWall = new ShadowWall,
        summonAndControlStorm = new SummonAndControlStorm,
        summonLesserBeing = new SummonLesserBeing,
        swapPlaces = new SwapPlaces,
        talisman = new Talisman,
    ) {
        this.collapse = collapse;
        this.createGolem = createGolem;
        this.protectionCircleSuperior = protectionCircleSuperior;
        this.restoreLife = restoreLife;
        this.sanctum = sanctum;
        this.shadowWall = shadowWall;
        this.summonAndControlStorm = summonAndControlStorm;
        this.summonLesserBeing = summonLesserBeing;
        this.swapPlaces = swapPlaces;
        this.talisman = talisman;
    }
}

module.exports = InvocationThirteen;