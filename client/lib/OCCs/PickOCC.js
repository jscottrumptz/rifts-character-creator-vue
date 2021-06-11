const BodyFixer = require('./BodyFixer');
const CityRat = require('./CityRat')
const RogueScientist = require('./RogueScientist');

class PickOCC {
    constructor(
        bodyFixer = new BodyFixer,
        cityRat = new CityRat,
        rogueScientist = new RogueScientist,
    ) {
        this.bodyFixer = bodyFixer;
        this.cityRat = cityRat;
        this.rogueScientist = rogueScientist;
    }
}

module.exports = PickOCC;