const Spell = require('../Spell');

class SwimAsAFish extends Spell {
    constructor() {
        super();
        this.name = 'Swim as a Fish';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `Self or others up to 10 feet (3 m) away.`;
        this.duration = `Five minutes (20 melees) per level of experience.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    An incantation that provides the character with exceptional swimming abilities. Equal to Advanced Swimming and SCUBA skills combined. Base Skill is 96%, can swim a distance of l00x P.S. in yards/meters without tiring, survive depths of up to 600 feet (183 m) without special gear, and is + 1 to parry and dodge while in water. Can hold breath for five minutes at a time.`;
    }
}

module.exports = SwimAsAFish;