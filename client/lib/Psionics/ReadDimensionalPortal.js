const Psionic = require('../Psionic');

class ReadDimensionalPortal extends Psionic {
    constructor() {
        super();
        this.name = 'Read Dimensional Portal';
        this.group = 'Sensitive';
        this.range = 'Touch or one foot (0.3 m) per level of experience.';
        this.duration = 'One melee round per level of experience.';
        this.cost = '6 I.S.P.';
        this.limitations = `Applicable only to active (open) dimensional portals and devices that can create a dimensional portal.`;
        this.savingThrow = 'Not applicable.';
        this.description = `    This power allows the psychic to get impressions from the portal or dimension spanning device, which instills the character with the following information: 
• Destination is relatively dangerous/hostile or safe to the psychic. This includes whether or not the environment can support human life.
• Whether there is a strong (or numerous) presence of the supernatural (i.e. Alien Intelligence, gods, demons, etc.) and whether that presence is evil. 
• A psychic flash - a brief vision of who was the last person or per-sons to use the portal, if any (may be none if it is a random Rift that hasn't been used by any living force).
• Intuitively sense whether the portal or machine leads to any of the following dimensions: The Astral Plane, Xiticix home world, the Dreamstream, or to another location on Rifts Earth.
• If a mechanical gateway or device capable of dimensional travel/opening a dimensional portal, whether it is a creation of magic or science, the psychic will get a basic idea of how to operate it in or-der to open or close a dimensional portal (similar to Object Read).`;
    }
}

module.exports = ReadDimensionalPortal;