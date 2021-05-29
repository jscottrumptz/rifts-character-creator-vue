const Camouflage = require('./Camouflage');
const Demolitions = require('./Demolitions');
const DemolitionsDisposal = require('./DemolitionsDisposal');
const DemolitionsUnderwater = require('./DemolitionsUnderwater');
const FieldArmourerandMunitions = require('./FieldArmourerandMunitions');
const FindContrabandMilitary = require('./FindContrabandMilitary');
const ForcedMarchMilitary = require('./ForcedMarchMilitary');
const MilitaryEtiquette = require('./MilitaryEtiquette');
const MilitaryFortification = require('./MilitaryFortification');
const NavalHistory = require('./NavalHistory');
const NavalTactics = require('./NavalTactics');
const NbcWarfare = require('./NbcWarfare');
const Parachuting = require('./Parachuting');
const RecogniseWeaponQuality = require('./RecogniseWeaponQuality');
const TrapOrMineDetection = require('./TrapOrMineDetection');

class Military {
    constructor(
        camouflage = new Camouflage,
        demolitions = new Demolitions,
        demolitionsDisposal = new DemolitionsDisposal,
        demolitionsUnderwater = new DemolitionsUnderwater,
        fieldArmourerandMunitions = new FieldArmourerandMunitions,
        findContrabandMilitary = new FindContrabandMilitary,
        forcedMarchMilitary = new ForcedMarchMilitary,
        militaryEtiquette = new MilitaryEtiquette,
        militaryFortification = new MilitaryFortification,
        navalHistory = new NavalHistory,
        navalTactics = new NavalTactics,
        nbcWarfare = new NbcWarfare,
        parachuting = new Parachuting,
        recogniseWeaponQuality = new RecogniseWeaponQuality,
        trapOrMineDetection = new TrapOrMineDetection
    ) {
        this.camouflage = camouflage;
        this.demolitions = demolitions;
        this.demolitionsDisposal = demolitionsDisposal;
        this.demolitionsUnderwater = demolitionsUnderwater;
        this.fieldArmourerandMunitions = fieldArmourerandMunitions;
        this.findContrabandMilitary = findContrabandMilitary;
        this.forcedMarchMilitary = forcedMarchMilitary;
        this.militaryEtiquette = militaryEtiquette;
        this.militaryFortification = militaryFortification;
        this.navalHistory = navalHistory;
        this.navalTactics = navalTactics;
        this.nbcWarfare = nbcWarfare;
        this.parachuting = parachuting;
        this.recogniseWeaponQuality = recogniseWeaponQuality;
        this.trapOrMineDetection = trapOrMineDetection;
    }
}

module.exports = Military;