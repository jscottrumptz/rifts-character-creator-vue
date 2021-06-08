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
        this.bonus = `+5% to this skill if Palming [Rogue] is also taken.
+5% to this skill if Seduction [Rogue] is taken.
+6% to this skill if Gambling: Dirty Tricks [Rogue] is also taken.`;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `24`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'palming' || skill === 'seduction') {
                this.skillBonus = this.skillBonus + 5;
            }
            if(skill === 'gamblingDirtyTricks') {
                this.skillBonus = this.skillBonus + 6;
            }
        })
    }
}

module.exports = Cardsharp;