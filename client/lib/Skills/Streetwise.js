const Skill = require('../Skill');

class Streetwise extends Skill {
    constructor() {
        super();
        this.name = `Streetwise`;
        this.group = `Rogue`;
        this.isSecondary = false;
        this.description = `The understanding of the darker side of life and the scoundrels who roam the streets. The streetwise character will be able to recognize gang members by their actions and philosophies, gang colours (emblems and clothing that denote membership to a particular organization), gang symbols and mannerisms, and dangerous locations and gangland haunts. The individual will also recognize a potential brawl situation, assess a gang member's rank/power in the organization, and perhaps even notorious gang leaders of the more infamous street gangs. It also includes knowing the 'street names' of common drugs, their symptoms, their cost and recognizing the drug when they see it, and the danger it represents.`;
        this.bonus = `+10% to the I.D. Undercover Agents [Rogue] skill if this skill is taken.`;
        this.perLvl = 4;
        this.base = 20;
    }
}

module.exports = Streetwise;