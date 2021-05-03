const Race = require('../Race');
const { Random } = require('random-js');
const random = new Random;

class Dnorr extends Race {
    constructor() {
        super();
        this.name = `D'norr Devilmen`;
        this.description = `    The D'norr are more commonly known as "Devilmen" because of their appearance. They are bipedal humanoids with a light reddish-tan skin, and a darker red (for males) or purple (for females) back and top portion of the head. The backs of their heads are rather gourd shaped, not unlike a squash or pumpkin, and dotted with tiny red spines. In addition to the color of their skin, the D'norr's devilish appearance comes from their red complexion accented by dark blue eyes, gnarled, pointed ears, and a pair of horns that protrude from the forehead. Four small spines run along the top of each eyebrow and males have 4-6 protruding from their chins. Female D'norr have breasts (they are mammals), a smaller frame and feminine shape. 

    Despite their name and demonic appearance, Devilmen are actually highly intelligent, thoughtful, and compassionate. Most study social behavior, philosophy, the arts, and scholastic pursuits. As a result, many find the sciences and the pursuit of magic to their liking. Moreover, they are much less aggressive than humans and prefer to find a peaceful resolution to problems. This makes these peace-loving D-Bees natural team players and trustworthy teachers, negotiators and diplomats. 

    The Devilmen thrive on social interaction, and accept most intelligent beings until they are proven unworthy of their trust. Rifts Earth is a social and cultural paradise for the D'norr, filled with scores of alien beings with whom they can share their knowledge, philosophies and ideas, as well as learn many new things themselves. They welcome new people and new ideas like hungry children seeking to satisfy a hunger they can never quite quell. Devilmen are especially aware and respectful of the customs and beliefs of other people, which has made them welcomed among Native Americans, Fennodi, Lyn-Srial, Psi-Stalkers, and even Simvan. Most D'norr detest violence and a third are devout pacifists who fight only to defend themselves or to protect the innocent, and even then only long enough to es-cape. This admirable sentiment and lifestyle has made the Devilmen known and respected by Cyber-Knights, the Justice Rangers, Tundra Rangers, and lawmen throughout the New West, as well as at Lazio and New Lazio. Many supported Tolkeen the best they could and perished by the thousands for their effort.

(see Rifts® World Book 30: D - Bees of North America pg. 71 for more information)`;
        this.image = 'assets/images/race/dnorr.jpg';
        this.availableOCCs = `    Any, including Men at Arms, but most lean toward Adventurers and Scholars, or Practitioners of Magic (excluding those involving demons or the dark arts). D'norr are attracted to magic, science, medicine, education, language, lore, philosophy, history and law. 
        
Note: On the D'norr home world, there was no magic, so D'norr are fascinated by the very concept. As a result, a full half of all Devilmen are practitioners of magic, typically Ley line Walker, Conjurer, Techno-Wizard or Warlock, but other disciplines as well. Only Witchery and all forms of demon worship are completely avoided.

Cannot select psionic O.C.C.s including the Mystic because D'norr don't possess any psychic abilities.`
        this.psionics = `None. Devilmen have no psychic capabilities, making it a phenomenon that fascinates them.`
        this.heightMin = 5;
        this.heightMax = 6;
        this.weightMin = 120;
        this.weightMax = 180;
        this.lifespan = 200;
        this.abilities = ['No Psionics']
        this.iqRoll = { sides: 6, amount: 2, bonus: 6 };
        this.meRoll = { sides: 6, amount: 2, bonus: 4 };
        this.maRoll = { sides: 6, amount: 2, bonus: 12 };
        this.psRoll = { sides: 6, amount: 3 };
        this.ppRoll = { sides: 6, amount: 3 };
        this.peRoll = { sides: 6, amount: 3 };
        this.pbRoll = { sides: 6, amount: 2, bonus: 3 };
        this.spdRoll = { sides: 6, amount: 3 };
        this.hp = { sides: 6, amount: 1, bonus: 2 };
        this.sdc = { bonus: 20 };
        this.horror = { bonus: 12 };
        this.perceptionBonus = { bonus: 4 };
        this.mindControlBonus = { bonus: 1 };
        this.illusionBonus = { bonus: 1 };
        this.possessionBonus = { bonus: 3 };
        this.horrorBonus = { bonus: -1 };
        this.insanityBonus = { bonus: -1 };
    }

    rollSecondary(character) {
        character.secondaryStats.ppe.raceBonus = character.attributes.pe.total + random.dice(6,6).reduce((a, b) => a + b, 0);
        character.skills.total = 4;

        let ma = character.attributes.ma
        if (ma.raceTotal > 17) {
            ma.attributeRoll.push(random.die(6));
            ma.raceTotal = ma.attributeRoll.reduce((a, b) => a + b, 0) + ma.bonus;
        }
        character.skills.science.total = 3;
        character.skills.technical.total =1;
        character.skills.science.anthropology = { known: true, required: true, raceBonus: 10};
        character.skills.science.mathmaticsBasic = { known: true, required: true, raceBonus: 15};
        character.skills.science.mathmaticsAdvanced = { known: true, required: true, raceBonus: 15};
        // character.skills.technical.known.push(new Skill ('Art', true, [], 20, 35, 5))
    }
}

module.exports = Dnorr;