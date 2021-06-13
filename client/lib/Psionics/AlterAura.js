const Psionic = require('../Psionic');

class AlterAura extends Psionic {
    constructor() {
        super();
        this.name = 'Alter Aura';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = 'One hour per each level of experience.';
        this.cost = '2 I.S.P.';
        this.savingThrow = 'None.';
        this.description = `    According to psychics who can see such things, all living beings possess an aura - a colorful energy field that is invisible to the naked eye and most conventional forms of photography and sensors. This psychic ability does not allow the psychic to see auras, but to alter his own. The psychic can manipulate his physical energy field to appear different (stronger, weaker, sickly, lacking psionics, evil rather than good, etc.). The altered aura sends the wrong message to those humanoids and supernatural beings who can see auras and use the information they glean from them to assess an opponent or find a kindred (evil or psychic) spirit.

Alterations include:
• The general level of experience can be made to seem lower (level 1 or 2) or much higher ( 1D4+ 3 levels higher) than it really is. 
• Conceal one's true alignment and cover it with a false one (any). 
• Conceal the presence of psychic ability (the aura appears to be nor-mal for that race) or show  l.S.P. levels to be much lower than they really arc (but not higher). 
• Conceal the amount of base P.P.E.; seems to be only 1-2 points. 
• Conceal the presence of magic. 
• Conceal true physical attributes, making them appear to be half of what they really arc. or 30% higher. 
• Alter Aura to appear weak and fatigued or sickly. 
• Alter Aura to appear emotionally or mentally agitated or unstable, or depressed (not aggressive or alert).
• And for triple the usual I.S.P. (6 points) the psychic can adjust the aura to appear as if he is possessed or terminally ill.`;
    }
}

module.exports = AlterAura;