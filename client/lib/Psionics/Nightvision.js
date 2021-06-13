const Psionic = require('../Psionic');

class Nightvision extends Psionic {
    constructor() {
        super();
        this.name = 'Nightvision';
        this.group = 'Physical';
        this.range = 'Self. Visual range about 600 feet ( 183 m).';
        this.duration = '10 minutes per level of experience.';
        this.cost = '4 I.S.P.';
        this.description = `    The psionic can adjust his visual capabilities through a form of bio-manipulation. The eyes arc made to become much more light sensitive and basically work on the same principles of mechanical light amplification. The eyes simply amplify existing light, such as candlelight or star and moonlight, to see clearly. There must be some source of light to see (cannot see in total darkness).`;
        this.note = `If suddenly exposed to light brighter than a single candle, the psychic will he temporarily blinded for 3D4 melee rounds. The Night-vision power can also be used to change one's vision to polarized sight, reducing glare as would a pair of polarized sunglasses.`;
    }
}

module.exports = Nightvision;