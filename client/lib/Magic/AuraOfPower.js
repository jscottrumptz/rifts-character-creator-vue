const Spell = require('../Spell');

class AuraOfPower extends Spell {
    constructor() {
        super();
        this.name = 'Aura of Power';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `Self or one other by touch.`;
        this.duration = `One minute per level of experience.`;
        this.cost = `4 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The target of this spell is surrounded by a glowing, golden aura that makes them seem more experienced and imposing than is real! Effectively makes the character seem three levels higher, 50% stronger than he or she really is and adds 1D4+2 to M.A. Excellent when trying to bluff or look important. Note: This power creates the impression of power, but does NOT instill the character with any real increase in power whatsoever! If an opponent calls the bluff, the enchanted character may find himself in serious trouble. Moreover, the psionic power of See Aura sees right through this ruse and reveals the true, general, level of power. The See Aura spell is not as effective, and indicates a fluctuating or middle range between truth and magic.`;
    }
}

module.exports = AuraOfPower;