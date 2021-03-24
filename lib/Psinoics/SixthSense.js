const Psionic = require('../Psionic');

class SixthSense extends Psionic {
    constructor() {
        super();
        this.name = 'Sixth Sense';
        this.group = 'Sensitive';
        this.range = '90 feet (27.4 m).';
        this.duration = 'Until the danger passes or happens. Bonuses apply only to the first melee round of the attack from the source of the sensed danger.';
        this.cost = '2 I.S.P.';
        this.savingThrow = 'None';
        this.description = `    The Sixth Sense is a power that gives the psychic a precognitive flash of imminent danger to himself or somebody near him (within 90 feet/27.4 m). The character will not know what the danger is or where it will come from. nor who it will be directed at when in a group. All he knows is that something lilc threatening will happen within the next 60 seconds (4 melees)! The Sixth Sense is triggered automatically, without the consent of the psychic. whenever his life is in great peril or the life of somebody he greatly cares about (friend, partner, loved one, etc.). The Sixth Sense is only triggered by an unexpected, life threatening event (a trap or ambush is within 90 feet/27.4 m or a flash flood is rushing his way) Which is already set into motion and will happen any second. The power cannot be called upon at will to sense for traps or ambush. Instead. it works like an automatic reflex. If the character has used all his I.S.P. the Sixth Sense is temporarily rendered inoperative.`;
        this.bonuses = `The Sudden flash of insight provides the following bonuses. All bonuses apply only to the first, initial melee (15 seconds) when the attack danger occurs. Bonuses are lost in subsequent melee rounds after the danger is revealed. +6 on initiative roll, +2 to parry,+ 3 to dodge and the character cannot be surprised by a sneak attack from behind`;
    }
}

module.exports = SixthSense;