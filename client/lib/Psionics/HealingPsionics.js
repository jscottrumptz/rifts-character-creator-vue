const BioRegenerateSelf = require('./BioRegenerateSelf');
const DeadenPain = require('./DeadenPain');
const DetectPsionics = require('./DetectPsionics');
const Exorcism = require('./Exorcism');
const HealingTouch = require('./HealingTouch');
const IncreasedHealing = require('./IncreasedHealing');
const InduceSleep = require('./InduceSleep');
const MeditationHealing = require('./MeditationHealing');
const PsychicDiagnosis = require('./PsychicDiagnosis');
const PsychicPurification = require('./PsychicPurification');
const PsychicSurgery = require('./PsychicSurgery');
const ResistFatigueHealing = require('./ResistFatigueHealing');
const RestorePPE = require('./RestorePPE');
const StopBleeding = require('./StopBleeding');
const SuppressFear = require('./SuppressFear');

class HealingPsionics {
    constructor(
        bioRegenerateSelf = new BioRegenerateSelf,
        deadenPain = new DeadenPain,
        detectPsionics = new DetectPsionics,
        exorcism = new Exorcism,
        healingTouch = new HealingTouch,
        increasedHealing = new IncreasedHealing,
        induceSleep = new InduceSleep,
        meditationHealing = new MeditationHealing,
        psychicDiagnosis = new PsychicDiagnosis,
        psychicPurification = new PsychicPurification,
        psychicSurgery = new PsychicSurgery,
        resistFatigueHealing = new ResistFatigueHealing,
        restorePPE = new RestorePPE,
        stopBleeding = new StopBleeding,
        suppressFear = new SuppressFear,
    ) {
        // HEALING //
        this.bioRegenerateSelf = bioRegenerateSelf;
        this.deadenPain = deadenPain;
        this.detectPsionics = detectPsionics;
        this.exorcism = exorcism;
        this.healingTouch = healingTouch;
        this.increasedHealing = increasedHealing;
        this.induceSleep = induceSleep;
        this.meditationHealing = meditationHealing;
        this.psychicDiagnosis = psychicDiagnosis;
        this.psychicPurification = psychicPurification;
        this.psychicSurgery = psychicSurgery;
        this.resistFatigueHealing = resistFatigueHealing;
        this.restorePPE = restorePPE;
        this.stopBleeding = stopBleeding;
        this.suppressFear = suppressFear;
    }
}

module.exports = HealingPsionics;