const Skill = require('../Skill');

class Cardsharp extends Skill {
    constructor() {
        super();
        this.name = `Cardsharp`;
        this.group = `Rogue`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The  Cardsharp (or Card Shark) is a skill that involves the manual dexterity of hand and finger manipulation to perform tricks, palming, and other gimmicks of slight of hand with playing cards. This includes dealing from the bottom or middle of the deck, starting a deck (to the cardsharp's favour), hiding cards up the sleeve (and elsewhere), fancy and impressive methods of shuffling and dealing the cards, as well as card counting and understanding the odds. A failed roll means the character has fumbled the trick or was too obvious and is caught cheating!`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if character also has Palming skill..
+6% to this skill if character also has Gambling: Dirty Tricks skill.`;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `24`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Cardsharp;