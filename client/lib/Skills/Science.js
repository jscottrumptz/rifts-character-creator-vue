const Anthropology = require('./Anthropology');
const Archaeology = require('./Archaeology');
const ArtificialIntelligence = require('./ArtificialIntelligence');
const AstronomyandNavigation = require('./AstronomyandNavigation');
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

class Science {
    constructor(
        anthropology = new Anthropology,
        archaeology = new Archaeology,
        artificialIntelligence = new ArtificialIntelligence,
        astronomyandNavigation = new AstronomyandNavigation,
        astrophysics = new Astrophysics,
        biology = new Biology,
        botany = new Botany,
        chemistry = new Chemistry,
        chemistryAnalytical = new ChemistryAnalytical,
        chemistryPharmaceutical = new ChemistryPharmaceutical,
        mathematicsAdvanced = new MathematicsAdvanced,
        mathematicsBasic = new MathematicsBasic,
        xenology = new Xenology,
        zoology = new Zoology
    ) {
        this.anthropology = anthropology;
        this.archaeology = archaeology;
        this.artificialIntelligence = artificialIntelligence;
        this.astronomyandNavigation = astronomyandNavigation;
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
    }
}

module.exports = Science;