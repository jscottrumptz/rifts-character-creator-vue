const BodyFixer = require('./BodyFixer');
const Burster = require('./Burster')
const CityRat = require('./CityRat');
const CyberDoc = require('./CyberDoc');
const Operator = require('./Operator');
const RogueScholar = require('./RogueScholar');
const RogueScientist = require('./RogueScientist');
const Vagabond = require('./Vagabond')
const WildernessScout = require('./WildernessScout')

class PickOCC {
    constructor(
        bodyFixer = new BodyFixer,
        burster = new Burster,
        cityRat = new CityRat,
        cyberDoc = new CyberDoc,
        operator = new Operator,
        rogueScholar = new RogueScholar,
        rogueScientist = new RogueScientist,
        vagabond = new Vagabond,
        wildernessScout = new WildernessScout
    ) {
        this.bodyFixer = bodyFixer;
        this.burster = burster;
        this.cityRat = cityRat;
        this.cyberDoc = cyberDoc;
        this.operator = operator;
        this.rogueScholar = rogueScholar;
        this.rogueScientist = rogueScientist;
        this.vagabond = vagabond;
        this.wildernessScout = wildernessScout;
    }
}

module.exports = PickOCC;