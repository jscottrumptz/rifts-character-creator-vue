const BodyFixer = require('./BodyFixer');
const CityRat = require('./CityRat');
const CyberDoc = require('./CyberDoc');
const Operator = require('./Operator')
const RogueScientist = require('./RogueScientist');

class PickOCC {
    constructor(
        bodyFixer = new BodyFixer,
        cityRat = new CityRat,
        cyberDoc = new CyberDoc,
        operator = new Operator,
        rogueScientist = new RogueScientist,
    ) {
        this.bodyFixer = bodyFixer;
        this.cityRat = cityRat;
        this.cyberDoc = cyberDoc;
        this.operator = operator;
        this.rogueScientist = rogueScientist;
    }
}

module.exports = PickOCC;