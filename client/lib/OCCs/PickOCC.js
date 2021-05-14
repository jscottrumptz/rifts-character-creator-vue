const RogueScientist = require('./RogueScientist');

class PickOCC {
    constructor(
        rogueScientist = new RogueScientist,
    ) {
        this.rogueScientist = rogueScientist;
    }
}

module.exports = PickOCC;