const Race = require('../Race');

class Human extends Race {
    constructor() {
        super();
        this.name = 'Human';
        this.description = `    The Rifts world is Earth, but hundreds of years into the future. Ley lines, lines of magic energy, criss-cross the earth forming supernatural geographic areas such as the Bermuda Triangle. Points where Ley Lines intersect, called a nexus, are places of powerful magic, such as the Pyramids of Giza and Stonehenge. If a Ley Line nexus energy surges or is purposely activated,the very fabric of space and time can be torn, creating a rift, or a hole in space-time leading to another place, time, or a new/parallel dimension. Ley Lines in most lower capacity "realities" have less Potential Psychic Energy or PPE to allow them to be visible, but in the magic or PPE saturated worlds like Rifts Earth, they become visible based on PPE intensity. Some are visible during the day as evident by a slight blue shift of the surrounding environment. Otherwise at night or from space the massive bands of blue-white energy can be as large as half a mile wide in some places, and stretching for many miles.
    The Magic energy making up Ley lines as mentioned is Potential Psychic Energy or PPE. Found in various places, objects, and animals, one of the greatest sources of PPE is in young and prepubescent children. An adult's level of PPE can vary based on other factors. PPE also allows Psionics which uses energy known as Inner Strength Points or ISP. Psionics (more commonly called psychic phenomenon) can also vary from individuals, ranging from none at all to Master level abilities. Psychic abilities can manifest in virtually any way imaginable. Some psychics develop differently, such as psi-stalkers; human mutants that feed on psychic energy.`;
        this.image = 'assets/images/race/human.jpg';
        this.psionicsDesc = `Standard; there is a 25% probability of human possessing some level of psionic powers.`
        this.availableOCCs = `Humans can pick from any O.C.C. and from many that are exclusively for humans only.`
        this.heightMin = 5;
        this.heightMax = 6;
        this.weightMin = 110;
        this.weightMax = 190;
        this.abilitiesDesc = `Here is what humans get:
- Humans are used as the staple; the prototype. Some races out there that have penalties, for every -1 that another race gets, that's effectively a +1 that humans get. Many races also roll less than 3d6 for attributes. Not only that, but races that roll more than 3d6 for an attribute don't get the exploding dice for high rolls.
- The ability to be augmented by Juicer and MOM implants
- The ability to use magic
- The potential for psionics
- The ability to move through Coalition territory without getting shot (usually)
- The potential for HU-style super powers
- A huge selection of OCCs to choose from. Some races are stuck with only one option; their RCC.`;
        this.lifespan = { sides: 6, amount: 2, bonus: 70 };
        this.pronunciation = 'hyoo muhn.'
        this.iqRoll = { sides: 6, amount: 3 };
        this.meRoll = { sides: 6, amount: 3 };
        this.maRoll = { sides: 6, amount: 3 };
        this.psRoll = { sides: 6, amount: 3 };
        this.ppRoll = { sides: 6, amount: 3 };
        this.peRoll = { sides: 6, amount: 3 };
        this.pbRoll = { sides: 6, amount: 3 };
        this.spdRoll = { sides: 6, amount: 3 };
        this.sdc = { sides: 6, amount: 2, bonus: 12 };
        this.hpText = 'PE';
        this.hpLvl = { sides: 6, amount: 1};
    }

    getSecondary(character) {
        character.secondaryStats.hp.initialValue = character.attributes.pe.total;
    }

    rollSecondary(character) {
        character.psionics.randomPsionics = true;
    }
}

module.exports = Human;