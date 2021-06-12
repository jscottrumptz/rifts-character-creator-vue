const BodyFixer = require('./BodyFixer');
const CityRat = require('./CityRat');
const CyberDoc = require('./CyberDoc');
const RogueScientist = require('./RogueScientist');

class PickOCC {
    constructor(
        bodyFixer = new BodyFixer,
        cityRat = new CityRat,
        cyberDoc = new CyberDoc,
        rogueScientist = new RogueScientist,
    ) {
        this.bodyFixer = bodyFixer;
        this.cityRat = cityRat;
        this.cyberDoc = cyberDoc;
        this.rogueScientist = rogueScientist;
    }
}

module.exports = PickOCC;