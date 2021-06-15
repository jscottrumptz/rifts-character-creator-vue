const Psionic = require('../Psionic');

class PsychicBodyField extends Psionic {
    constructor() {
        super();
        this.name = 'Psychic Body Field';
        this.group = 'Super';
        this.range = 'Self.';
        this.duration = '2 minutes per level of experience.';
        this.cost = '30 I.S.P.';
        this.description = `    With a thought, the psychic instantly surrounds himself with a telekinetic force field that conforms to the shape of his body and en-ables him to physically move and fight. It is a Mega-Damage structure with 10 M.D.C. per level of experience. The field takes the shape of a dim, white, transparent aura that completely surrounds and encloses the body of the psychic. Items held in his hands, hung from his back, or worn on top of his head are not protected. 
    On the downside, the field does not protect against disease, radiation, or toxic fumes, nor magic or psionic attacks other than physical ones (energy blasts, fire, etc.). Worse, the TK-force field means the psychic loses his sense of touch, because the field is between him and all objects/materials outside the force field. This lack of touch sensation means the character cannot feel much of anything he picks up or touches after the field has been erected. This makes the use of skills that require a sense of touch and manual dexterity -30%, and delicate items may be accidentally dropped or crushed.`;
    }
}

module.exports = PsychicBodyField;