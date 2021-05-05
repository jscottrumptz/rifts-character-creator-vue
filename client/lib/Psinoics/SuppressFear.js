const Psionic = require('../Psionic');

class SuppressFear extends Psionic {
    constructor() {
        super();
        this.name = 'Suppress Fear';
        this.group = 'Healing';
        this.range = 'Self or others by touch.';
        this.duration = 'One minute per level of experience.';
        this.cost = '8 I.S.P.';
        this.description = `    This power temporarily suppresses the chemical and psychological components of fear in the recipient. As a result, the character is unable to feel fear or is barely frightened even if intellectually he realizes he is in grave danger, or is facing a terrifying monster or situation. This enables the character to think rationally and take calm, calculated action, rather than respond with the typical "fight or flight" reactions of those who are scared. While this power is activated, the character automatically succeeds on any roll to resist Horror Factor, even if magically induced. This power can be used on the psychic himself or on one or two others.`;
    }
}

module.exports = SuppressFear;