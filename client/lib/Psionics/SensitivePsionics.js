const AstralProjection = require('./AstralProjection');
const Clairvoyance = require('./Clairvoyance');
const CommuneWithSpirits = require('./CommuneWithSpirits');
const Empathy = require('./Empathy');
const IntuitiveCombat = require('./IntuitiveCombat');
const MachineGhost = require('./MachineGhost');
const MaskISPAndPsionics = require('./MaskISPAndPsionics');
const MaskPPE = require('./MaskPPE');
const MeditationSensitive = require('./MeditationSensitive');
const MindBlockSensitive = require('./MindBlockSensitive');
const ObjectRead = require('./ObjectRead');
const PresenceSense = require('./PresenceSense');
const ReadDimensionalPortal = require('./ReadDimensionalPortal');
const RemoteViewing = require('./RemoteViewing');
const SeeAura = require('./SeeAura');
const SeeTheInvisible = require('./SeeTheInvisible');
const SenseDimensionalAnomaly = require('./SenseDimensionalAnomaly');
const SenseEvil = require('./SenseEvil');
const SenseMagic = require('./SenseMagic');
const SenseTime = require('./SenseTime');
const SixthSense = require('./SixthSense');
const SpeedReading = require('./SpeedReading');
const Telepathy = require('./Telepathy');
const TotalRecall = require('./TotalRecall');

class SensitivePsionics {
    constructor(
        astralProjection = new AstralProjection,
        clairvoyance = new Clairvoyance,
        communeWithSpirits = new CommuneWithSpirits,
        empathy = new Empathy,
        intuitiveCombat = new IntuitiveCombat,
        machineGhost = new MachineGhost,
        maskISPAndPsionics = new MaskISPAndPsionics,
        maskPPE = new MaskPPE,
        meditationSensitive = new MeditationSensitive,
        mindBlockSensitive = new MindBlockSensitive,
        objectRead = new ObjectRead,
        presenceSense = new PresenceSense,
        readDimensionalPortal = new ReadDimensionalPortal,
        remoteViewing = new RemoteViewing,
        seeAura = new SeeAura,
        seeTheInvisible = new SeeTheInvisible,
        senseDimensionalAnomaly = new SenseDimensionalAnomaly,
        senseEvil = new SenseEvil,
        senseMagic = new SenseMagic,
        senseTime = new SenseTime,
        sixthSense = new SixthSense,
        speedReading = new SpeedReading,
        telepathy = new Telepathy,
        totalRecall = new TotalRecall,
    ) {
        this.astralProjection = astralProjection;
        this.clairvoyance = clairvoyance;
        this.communeWithSpirits = communeWithSpirits;
        this.empathy = empathy;
        this.intuitiveCombat = intuitiveCombat;
        this.machineGhost = machineGhost;
        this.maskISPAndPsionics = maskISPAndPsionics;
        this.maskPPE = maskPPE;
        this.meditationSensitive = meditationSensitive;
        this.mindBlockSensitive = mindBlockSensitive;
        this.objectRead = objectRead;
        this.presenceSense = presenceSense;
        this.readDimensionalPortal = readDimensionalPortal;
        this.remoteViewing = remoteViewing;
        this.seeAura = seeAura;
        this.seeTheInvisible = seeTheInvisible;
        this.senseDimensionalAnomaly = senseDimensionalAnomaly;
        this.senseEvil = senseEvil;
        this.senseMagic = senseMagic;
        this.senseTime = senseTime;
        this.sixthSense = sixthSense;
        this.speedReading = speedReading;
        this.telepathy = telepathy;
        this.totalRecall = totalRecall;
    }
}

module.exports = SensitivePsionics;