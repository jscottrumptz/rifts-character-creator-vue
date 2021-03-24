const Psionic = require('../Psionic');

class DeadenSenses extends Psionic {
    constructor() {
        super();
        this.name = 'Deaden Senses';
        this.group = 'Physical';
        this.range = '160 feet (48.8 m); line of sight.';
        this.duration = '2D6 minutes; roll for random determination of duration.';
        this.cost = '4 I.S.P.';
        this.savingThrow = '-1 to save.';
        this.description = `    A form of bio-manipulation that is so subtle that its victims seldom realize they have fallen under the influence of this psionic attack. The psychic is able to induce a physical influence on a single character to make him or her momentarily less alert and attentive to the things around him. Small sounds, odors, movements, and details go unnoticed (+10% to the psychic on the following skills when used against this be-fuddled character: Camouflage, Prowl, Concealment, Palming, Pick Pockets, Cardsharp. Forgery, Seduction, Disguise and Impersonation). And the deadened character is also slow to react; reduce Spd by 10%, -1 on initiative. and -5% on skill performance. This power is typically used on guards. sentries, and investigators to make them miss some-thing in a search, not notice the psychic, etc.`;
    }
}

module.exports = DeadenSenses;