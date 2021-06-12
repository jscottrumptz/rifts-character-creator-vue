const BodyFixer = require('./BodyFixer');
const CityRat = require('./CityRat');
const CyberDoc = require('./CyberDoc');
const Operator = require('./Operator');
const RogueScholar = require('./RogueScholar');
const RogueScientist = require('./RogueScientist');
const Vagabond = require('./Vagabond')

class PickOCC {
    constructor(
        bodyFixer = new BodyFixer,
        cityRat = new CityRat,
        cyberDoc = new CyberDoc,
        operator = new Operator,
        rogueScholar = new RogueScholar,
        rogueScientist = new RogueScientist,
        vagabond = new Vagabond
    ) {
        this.bodyFixer = bodyFixer;
        this.cityRat = cityRat;
        this.cyberDoc = cyberDoc;
        this.operator = operator;
        this.rogueScholar = rogueScholar;
        this.rogueScientist = rogueScientist;
        this.vagabond = vagabond;
    }
}

module.exports = PickOCC;