const Skill = require('../Skill');

class Calligraphy extends Skill {
    constructor() {
        super();
        this.name = `Calligraphy`;
        this.group = `Technical`;
        this.isSecondary = true;
        this.description = `The  ability to produce beautiful, fancy, hand drawn letters and script in one's native language with great legibility and beauty using a brush or special set of pens, ink, and paper. The character can also copy letters and words in any language but may not know what it says. Traditional Calligraphy with a brush is an Asian art and traditionally, any person of culture and education in the Orient, especially a noble, is expected to be able to produce gorgeous ideograms. Calligraphy is a skill almost as necessary as Literacy for traditionalists in Asia.`;
        this.required = `Literacy (to actually write, otherwise can only copy letters and ideograms without being able to read them).`;
        this.perLvl = 5;
        this.base = 35;
    }
}

module.exports = Calligraphy;