const Psionic = require('../Psionic');

class ImperviousToPoison extends Psionic {
    constructor() {
        super();
        this.name = 'Impervious to Poison';
        this.group = 'Physical';
        this.range = 'Self.';
        this.duration = '2 minutes (8 melees).';
        this.cost = '4 I.S.P.';
        this.description = `    The character can negate the full effects of poisons and toxic chemicals which he has ingested (eaten or drank) or introduced into the bloodstream, as long as he has advance knowledge of its deadly properties. A poison, toxin, or drug which has been unknowingly inflicted (and starting to take effect) can be negated too, but will do half damage or effect before it can be completely negated.`;
        this.bonuses = `Identify poisons: 30% +4% per level of experience; +2 to save vs poisons and drugs whenever this power is in place.`
    }
}

module.exports = ImperviousToPoison;