const Spell = require('../Spell');

class CloseRift extends Spell {
    constructor() {
        super();
        this.name = 'Close Rift';
        this.group = 'Invocation';
        this.level = 'Fourteen';
        this.range = `100 feet (30.5 m).`;
        this.duration = `Instant results.`;
        this.cost = `200 P.P.E. plus 2 P.P.E. from the character's permanent P.P.E. base!`;
        this.savingThrow = `Standard.`;
        this.description = `    The master of magic can close a Rift by sheer force of will. However, the monumental effort permanently drains the mage of two P.P.E. points from his permanent base, whether successful or not. The mystic nature of the dimensional gateway gives it an automatic save versus magic attack, consequently, a Close Rift Ritual will increase one's odds for success (16). The Rift will instantly vanish if successful. A failure means the Rift is not affected and the wizard has lost 2 P.P.E. forever; try again. Note: This incantation will not close the St. Louis Gateway Rift or any "permanently" opened Rifts. Also note the Shifter, Temporal Raider, Temporal Wizard and Stone Master do NOT lose the permanent 2 P.P.E. when they use this spell, nor do Alien Intelligences, gods or Demon Lords.`;
    }
}

module.exports = CloseRift;