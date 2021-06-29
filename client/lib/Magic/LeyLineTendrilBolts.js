const Spell = require('../Spell');

class LeyLineTendrilBolts extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Tendril Bolts';
        this.group = 'Invocation';
        this.level = 'Eight';
        this.range = `10 feet (3 m) per level of experience.`;
        this.duration = `One melee round. Each four tier blast counts as one melee attack.`;
        this.cost = `26 P.P.E. (half for Ley Line Walkers and Shifters). Doubling the amount of P.P.E. (26 P.P.E. for Ley Line Walkers and Shifters) adds +20 M.D. to each of the bolts.`;
        this.damage = `2D6 M.D. at level one, + 1D6 M.D. per every two additional levels of experience (i.e. 2D6 at level one, 3D6 at level three, 4D6 at level five, 5D6 at level seven, and so on). The level of damage inflicted can be regulated by the spell caster in increments of 1D6 M.D., so as little as 1D6 M.D. to full damage (depending on the level of the mage) or anything in between can be inflicted. Each blast counts as one melee attack. The casting of the spell to create this attack uses at least up one melee attack/action to begin with.`;
        this.savingThrow = `-2; a successful save means the victim suffers only half damage.`;
        this.limitations = `This spell can only be cast when on a ley line.`;
        this.description = `    This spell creates a sphere of energy that either encircles the hand or appears floating in the palm of the character's hand (as depicted on the cover of this book). Four bolts of mystic energy emit from the energy sphere simultaneously to strike four different targets, each suffering the same amount of damage. Each energy bolt appears to shoot out like miniature arcs of lightning to strike the four nearest enemies/opponents to the spell caster (never an ally).
    When used against one opponent, only two energy tendrils strike him, each doing damage. The other two don't even appear. If there are two opponents, two energy tendrils will strike each. If there are three opponents, two energy tendrils will strike either the nearest opponent or a supernatural opponent (if present), and one will strike each of the other two antagonists.`;
    }
}

module.exports = LeyLineTendrilBolts;