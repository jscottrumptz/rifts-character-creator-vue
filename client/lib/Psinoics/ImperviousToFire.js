const Psionic = require('../Psionic');

class ImperviousToFire extends Psionic {
    constructor() {
        super();
        this.name = 'Impervious to Fire';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = '3 minutes per level of experience.';
        this.cost = '4 I.S.P.';
        this.lengthOfTrance = `2D4 melees for preparatory meditation.`;
        this.description = `    Another mind over matter discipline enabling the psychic to endure intense heat, fire, boiling water, hot coals, and so on, without suffering pain, damage, injury or scarring. Magic fires inflict half damage.`;
    }
}

module.exports = ImperviousToFire;