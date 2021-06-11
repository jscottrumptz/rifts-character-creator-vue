const BodyFixer = require('./BodyFixer');
const RogueScientist = require('./RogueScientist');

class PickOCC {
    constructor(
        bodyFixer = new BodyFixer,
        rogueScientist = new RogueScientist,
    ) {
        this.bodyFixer = bodyFixer;
        this.rogueScientist = rogueScientist;
    }
}

module.exports = PickOCC;