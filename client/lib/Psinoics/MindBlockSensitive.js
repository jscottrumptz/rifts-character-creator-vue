const Psionic = require('../Psionic');

class MindBlockSensitive extends Psionic {
    constructor() {
        super();
        this.name = 'Mind Block';
        this.group = 'Sensitive';
        this.range = 'Self.';
        this.duration = '10 minutes per level of experience.';
        this.cost = '4 I.S.P. (per each duration period).';
        this.description = `    This is the ability to completely close or block oneself from all psychic/mental emanations. When intentionally closed to supernatural or psychic forces the character cannot sense anything, cannot use psychic abilities. nor be influenced by others. A Mind Block will prevent penetration of Telepathy, Empathy, Hypnotic Suggestion, and Empathic Transmission. It can be an invaluable protective mask when dealing with malevolent psychic forces. Adds a bonus of +1 to save vs all psychic and mental attacks.`;
    }
}

module.exports = MindBlockSensitive;