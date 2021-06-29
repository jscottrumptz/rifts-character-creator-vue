const Spell = require('../Spell');

class LeyLinePhantom extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Phantom';
        this.group = 'Invocation';
        this.level = 'Nine';
        this.range = `Self only.`;
        this.duration = `Five minutes per level of the spell caster.`;
        this.cost = `40 P.P.E. (half for Ley Line Walkers and Shifters).`;
        this.savingThrow = `None.`;
        this.description = `    The spell caster turns into a faint, blue, transparent ghost-image of himself and is intangible to boot, but he is not dead, only magically transformed. Physical attacks and the elements can not hurt the Phantom and the character is free to move about, but only within the energy of the ley line. As a Ley Line Phantom, the character can not leave the ley line, and any magic that he casts is limited to the normal range but can not go beyond the length and width of the line; those outside the direct area of the ley line energy can not be touched even if they are within the normal range of a spell.
    As a phantom the character can only use magical and psionic attacks, and can only be hurt or influenced by magic and psionics in return. Additionally, the Ley Line Phantom can float on the waves of mystic energy to fly at speeds double his running speed without fatigue, and fly as high as the ley line energy rises (rarely higher than 6000 feet/1828 m). The phantom can also use Ley Line Transmission at will, and for the cost of two P.P.E., make whatever he says (up to 1 00 words) heard by everybody on the ley line. This is usually reserved for threats, warnings, cries for help and to intimidate those unfamiliar with magic.
    Remember, the Ley Line Phantom, while impervious to physical attacks, remains vulnerable to magic and psychic attacks, including magic weapons. The phantom also suffers the same consequences as the Ley Line Faded character if caught in a Ley Line Storm.`;
        this.note = `Intangible Phantoms are sometimes confused with Ley Line Ghosts.`;
    }
}

module.exports = LeyLinePhantom;