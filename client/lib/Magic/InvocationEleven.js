const AntiMagicCloud = require('./AntiMagicCloud');
const AstralHole = require('./AstralHole');
const BottomlessPit = require('./BottomlessPit');
const CreateMummy = require('./CreateMummy');
const CreateMagicScroll = require('./CreateMagicScroll');
const CurseOfTheWorldBizarre = require('./CurseOfTheWorldBizarre');
const Disharmonize = require('./Disharmonize');
const EnergySphere = require('./EnergySphere');
const Firequake = require('./Firequake');
const IdAlterEgo = require('./IdAlterEgo');
const IllusoryTerrain = require('./IllusoryTerrain');
const LeyLineStormDefense = require('./LeyLineStormDefense');
const Mindshatter = require('./Mindshatter');
const RemoveCurse = require('./RemoveCurse');
const ReOpenGateway = require('./ReOpenGateway');
const RiftToLimbo = require('./RiftToLimbo');
const RiftTeleportation = require('./RiftTeleportation');
const SeeInMagicDarkness = require('./SeeInMagicDarkness');
const SummonAndControlAnimals = require('./SummonAndControlAnimals');
const SummonFog = require('./SummonFog');

class InvocationEleven{
    constructor(
        antiMagicCloud = new AntiMagicCloud,
        astralHole = new AstralHole,
        bottomlessPit = new BottomlessPit,
        createMummy = new CreateMummy,
        createMagicScroll = new CreateMagicScroll,
        curseOfTheWorldBizarre = new CurseOfTheWorldBizarre,
        disharmonize = new Disharmonize,
        energySphere = new EnergySphere,
        firequake = new Firequake,
        idAlterEgo = new IdAlterEgo,
        illusoryTerrain = new IllusoryTerrain,
        leyLineStormDefense = new LeyLineStormDefense,
        mindshatter = new Mindshatter,
        removeCurse = new RemoveCurse,
        reOpenGateway = new ReOpenGateway,
        riftToLimbo = new RiftToLimbo,
        riftTeleportation = new RiftTeleportation,
        seeInMagicDarkness = new SeeInMagicDarkness,
        summonAndControlAnimals = new SummonAndControlAnimals,
        summonFog = new SummonFog,
    ) {
        this.antiMagicCloud = antiMagicCloud;
        this.astralHole = astralHole;
        this.bottomlessPit = bottomlessPit;
        this.createMummy = createMummy;
        this.createMagicScroll = createMagicScroll;
        this.curseOfTheWorldBizarre = curseOfTheWorldBizarre;
        this.disharmonize = disharmonize;
        this.energySphere = energySphere;
        this.firequake = firequake;
        this.idAlterEgo = idAlterEgo;
        this.illusoryTerrain = illusoryTerrain;
        this.leyLineStormDefense = leyLineStormDefense;
        this.mindshatter = mindshatter;
        this.removeCurse = removeCurse;
        this.reOpenGateway = reOpenGateway;
        this.riftToLimbo = riftToLimbo;
        this.riftTeleportation = riftTeleportation;
        this.seeInMagicDarkness = seeInMagicDarkness;
        this.summonAndControlAnimals = summonAndControlAnimals;
        this.summonFog = summonFog;
    }
}

module.exports = InvocationEleven;