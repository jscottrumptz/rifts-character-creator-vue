const Psionic = require('../Psionic');

class EmpathicTransmission extends Psionic {
    constructor() {
        super();
        this.name = 'Empathic Transmission';
        this.group = 'Super';
        this.range = '60 feet ( 18.3 m).';
        this.duration = '2D6 minutes. ';
        this.cost = '6 I.S.P.';
        this.savingThrow = 'Standard.';
        this.description = `    This incredible ability enables the psychic to instill a powerful emotion into another living creature; person, animal or supernatural being. Each psychic attack/transmission can only affect one creature at a time. Several supernatural creatures have this ability or some aspect of it.
    Despair or Sorrow
Invokes great emotional upheaval, deep sorrow and a sense of loss. There is a 50% chance of the victim surrendering or leaving without a battle; furthermore, victims are -2 to parry and dodge. 

    Confusion
Disorients the person so badly that he has no sense of direction, time, or of what is exactly going on. Victims are -3 to strike, parry and dodge, and lose initiative in any combat. 

    Fear
Invokes unreasoning terror in all those affected. Victims are -3 to strike, parry and dodge, plus there is a 66% chance that those affected will turn and run. 

    Hate or Anger
Will prompt those affected to act rashly, charge, at-tack, argue violently, etc. Victims are likely (60% chance) to attack, kill, harm, or betray those they dislike;+ 1 (yes, that's plus) to strike, -1 to parry and dodge. 

    Love or Peacefulness
Will induce a deep feeling of serenity, dispelling anger, hatred, sorrow, and so on. Hostile opponents are likely (60% chance) to reconsider their actions, deciding not to attack, show mercy, leave without being overtly cruel or destructive, halt a rampage, and so on. It does NOT make its victims docile sheep, but curbs hostility. 

    Trust
Will make its victims believe everything the psionic tells them, but only while under the empathic influence. Life-threatening suggestions that go against deep-seated fears, morals or ideals provide an additional saving throw against the suggested action; with a bonus of +3 to save.`;
    }
}

module.exports = EmpathicTransmission;