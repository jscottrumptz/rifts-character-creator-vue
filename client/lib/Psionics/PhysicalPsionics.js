const AlterAura = require('./AlterAura');
const DeadenSenses = require('./DeadenSenses');
const DeathTrance = require('./DeathTrance');
const Ectoplasm = require('./Ectoplasm');
const EctoplasmicDisguise = require('./EctoplasmicDisguise');
const ImperviousToCold = require('./ImperviousToCold');
const ImperviousToFire = require('./ImperviousToFire');
const ImperviousToPoison = require('./ImperviousToPoison');
const Levitation = require('./Levitation');
const MeditationPhysical = require('./MeditationPhysical');
const MindBlockPhysical = require('./MindBlockPhysical');
const Nightvision = require('./Nightvision');
const ResistFatiguePhysical = require('./ResistFatiguePhysical');
const ResistHunger = require('./ResistHunger');
const ResistThirst = require('./ResistThirst');
const SummonInnerStrength = require('./SummonInnerStrength');
const Telekinesis = require('./Telekinesis');
const TelekineticLeap = require('./TelekineticLeap');
const TelekineticLift = require('./TelekineticLift');
const TelekineticPunch = require('./TelekineticPunch');
const TelekineticPush = require('./TelekineticPush');

class PhysicalPsionics {
    constructor(
        alterAura = new AlterAura,
        deadenSenses = new DeadenSenses,
        deathTrance = new DeathTrance,
        ectoplasm = new Ectoplasm,
        ectoplasmicDisguise = new EctoplasmicDisguise,
        imperviousToCold = new ImperviousToCold,
        imperviousToFire = new ImperviousToFire,
        imperviousToPoison = new ImperviousToPoison,
        levitation = new Levitation,
        meditationPhysical = new MeditationPhysical,
        mindBlockPhysical = new MindBlockPhysical,
        nightvision = new Nightvision,
        resistFatiguePhysical = new ResistFatiguePhysical,
        resistHunger = new ResistHunger,
        resistThirst = new ResistThirst,
        summonInnerStrength = new SummonInnerStrength,
        telekinesis = new Telekinesis,
        telekineticLeap = new TelekineticLeap,
        telekineticLift = new TelekineticLift,
        telekineticPunch = new TelekineticPunch,
        telekineticPush = new TelekineticPush,
    ) {
        this.alterAura = alterAura;
        this.deadenSenses = deadenSenses;
        this.deathTrance = deathTrance;
        this.ectoplasm = ectoplasm;
        this.ectoplasmicDisguise = ectoplasmicDisguise;
        this.imperviousToCold = imperviousToCold;
        this.imperviousToFire = imperviousToFire;
        this.imperviousToPoison = imperviousToPoison;
        this.levitation = levitation;
        this.meditationPhysical = meditationPhysical;
        this.mindBlockPhysical = mindBlockPhysical;
        this.nightvision = nightvision;
        this.resistFatiguePhysical = resistFatiguePhysical;
        this.resistHunger = resistHunger;
        this.resistThirst = resistThirst;
        this.summonInnerStrength = summonInnerStrength;
        this.telekinesis = telekinesis;
        this.telekineticLeap = telekineticLeap;
        this.telekineticLift = telekineticLift;
        this.telekineticPunch = telekineticPunch;
        this.telekineticPush = telekineticPush;
    }
}

module.exports = PhysicalPsionics;