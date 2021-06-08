const Skill = require('../Skill');

class FindContrabandMilitary extends Skill {
    constructor() {
        super();
        this.name = `Find Contraband`;
        this.group = `Military`;
        this.isSecondary = false;
        this.description = `The character with this skill knows where to find illegal arms dealers, the Black Market, smugglers,thieves, forgers (mainly fake I.D.'s), fences, pawn shops, blind pegs (illegal gambling establishments), exotic animal dealers (illegal wild animals, endangered species, and the bizarre), automotive chop-shops, cybernetic body-chop-shops, slavers, prostitutes, arms dealers, drug dealers, illegal medical treatment, stolen antiquities, Juicer and Crazy conversion facilities, and other people and places that traffic in illegal goods and services. The skill makes the character familiar with underworld hangouts, gangs, criminal organizations, and the general practices, codes of conduct, pricing structures, and modes of operation of the criminal underworld. Likewise, the character has a good idea of what illegal weapons, ammo, cybernetics, and items should cost and what these people pay for contraband items (typically, only 20% of the retail market price). The character also knows the penalty for being caught with contraband.`;
        this.bonus = `+10% to I.D. Undercover Agents [Rogue] skill if this skill is taken.`;
        this.perLvl = 4;
        this.base = 26;
    }
}

module.exports = FindContrabandMilitary;