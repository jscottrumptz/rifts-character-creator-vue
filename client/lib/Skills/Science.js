const Anthropology = require('./Anthropology');
const Archaeology = require('./Archaeology');
const ArtificialIntelligence = require('./ArtificialIntelligence');
const AstronomyAndNavigation = require('./AstronomyAndNavigation');
const Astrophysics = require('./Astrophysics');
const Biology = require('./Biology');
const Botany = require('./Botany');
const Chemistry = require('./Chemistry');
const ChemistryAnalytical = require('./ChemistryAnalytical');
const ChemistryPharmaceutical = require('./ChemistryPharmaceutical');
const MathematicsAdvanced = require('./MathematicsAdvanced');
const MathematicsBasic = require('./MathematicsBasic');
const Xenology = require('./Xenology');
const Zoology = require('./Zoology');
const ZoologySpecialized = require('./ZoologySpecialized');

class Science {
    constructor(
        anthropology = new Anthropology,
        archaeology = new Archaeology,
        artificialIntelligence = new ArtificialIntelligence,
        astronomyAndNavigation = new AstronomyAndNavigation,
        astrophysics = new Astrophysics,
        biology = new Biology,
        botany = new Botany,
        chemistry = new Chemistry,
        chemistryAnalytical = new ChemistryAnalytical,
        chemistryPharmaceutical = new ChemistryPharmaceutical,
        mathematicsAdvanced = new MathematicsAdvanced,
        mathematicsBasic = new MathematicsBasic,
        xenology = new Xenology,
        zoology = new Zoology,
        zoologySpecialized = new ZoologySpecialized
    ) {
        this.anthropology = anthropology;
        this.archaeology = archaeology;
        this.artificialIntelligence = artificialIntelligence;
        this.astronomyAndNavigation = astronomyAndNavigation;
        this.astrophysics = astrophysics;
        this.biology = biology;
        this.botany = botany;
        this.chemistry = chemistry;
        this.chemistryAnalytical = chemistryAnalytical;
        this.chemistryPharmaceutical = chemistryPharmaceutical;
        this.mathematicsAdvanced = mathematicsAdvanced;
        this.mathematicsBasic = mathematicsBasic;
        this.xenology = xenology;
        this.zoology = zoology;
        this.zoologySpecialized = zoologySpecialized;
    }
}

module.exports = Science;