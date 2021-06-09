const Race = require('../Race');
const { Random } = require('random-js');
const random = new Random;
const Art = require('../Skills/Art');
const Anthropology = require('../Skills/Anthropology');
const MathematicsBasic = require('../Skills/MathematicsBasic');
const MathematicsAdvanced = require('../Skills/MathematicsAdvanced');

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
        this.psionicsDesc = `None. Devilmen have no psychic capabilities, making it a phenomenon that fascinates them.`
        this.abilitiesDesc = `Their high I.Q. and M.A. automatically make them smart, affable and "devilish charmers" and, sometimes, even con-artists. Physical abilities are on par with humans.`;
        this.magicDesc = `By O.C.C. only. D'norr possess a natural high amount of P.P.E., 6D6 points +P.E. attribute number to start, whether a practitioner of magic or not. This amount is in addition to those gained in the pursuit of magic.`;
        this.cyberneticsDesc = `Most Devilmen avoid even minor implants, especially if they are practitioners of magic. D'norr scholars and adventurers sometimes get a few implants or minor bionic augmentation (typically the minimum for that O.C.C.). They also consider cybernetic prosthetics for medical reasons.`;
        this.skillsDesc = `All D'norr Devilmen have the following skills regardless of what O.C.C. they select. Anthropology (+10%), Art (+20%), and Mathematics: Basic and Advanced(+ 15%).`;
        this.heightMin = 5;
        this.heightMax = 6;
        this.weightMin = 120;
        this.weightMax = 180;
        this.lifespan = {sides:6, amount:5, bonus: 170};
        this.lifespanDesc = `years. Long Lived. Physical maturity is attained by age 18. Females give birth to one child after a nine month pregnancy and can bear young till the age of 80.`;
        this.weightDesc = `lbs; tend to be slender, rarely overweight`;
        this.disposition = `The D'norr are very caring and compassionate beings of high ideals and tolerance. Most are playful, kind, thoughtful, intelligent, open-minded, gentle, forgiving and friendly. They love intellectual pursuits, the arts, science, learning; philosophy, and love to debate, discuss and share their ideas. Though all Devilmen seek a peaceful and fulfilling life, only a third are true pacifists, the rest take up arms and engage in the same sort of adventures and enterprises as humans.`;
        this.habitat = `Their interests in magic, learning and diverse cultures have made communities like Tolkeen, Lazio and New Lazio Meccas that attract the D'norr in droves. The diverse people and cultures of the American and Canadian West are also ap-pealing. While Devilmen can be found throughout the Americas, North and South, they are found in greatest numbers at Tolkeen, Lazio, New Lazio and the Midwestern portion of North America. Attracted to knowledge like moths to a flame, some have gravitated to the Magic Zone and Atlantis. However, only the most aggressive and forceful, or conniving, D'norr can make it in the Magic Zone. A few selfish and evil Devilman mages are counted among the fellowship of the Federation of Magic. Those so foolish to visit Atlantis have become slaves and suffer a fate of captivity and forced labor. Those who stayed and fought for the Kingdom of Tolkeen either perished when the kingdom fell or are counted among the refugees who fled. Many still serve humanity by using their skills and magic to protect and care for the multitude of refugees.`;
        this.allies = `Most D'norr make many diverse friends and acquaintances. They are generally regarded well by Cyber-Knights, lawmen and those who know them to be noble and honorable beings. Many are held in the highest es-teem, greatly trusted and their word taken over that of other less reputable people.`;
        this.rivals = `Since so many of these D-Bees are practitioners of magic, they are at the top of the Coalition States' extermination list. Likewise, the moral and trustworthy Devilmen often earn the disdain and wrath of monsters, villains and cutthroats. Their high level of P.P.E. and peaceful ways also make them easy targets for Psi-Stalkers and other P.P.E. vampires. Most D'norr Devilmen try to get along with everybody, cherishing differences and embracing new ideas. Even Psi-Stalkers who get to know them, come to like and respect the homed D-Bees.`;
        this.pronunciation = `Duh nor.`;
        this.alias = `"Melonheads" by Coalition soldiers, "Devils," and "Horned Red Brother" by many Native Americans.`;
        this.alignment = `Any, but the majority are Principled (30%), Scrupulous (30%), Unprincipled (15%) or Anarchist (15%).`;
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
        character.psionics.randomPsionics = false;
        character.secondaryStats.ppe.raceBonus = character.attributes.pe.total + random.dice(6,6).reduce((a, b) => a + b, 0);

        let ma = character.attributes.ma
        if (ma.raceTotal > 17) {
            ma.attributeRoll.push(random.die(6));
            ma.raceTotal = ma.attributeRoll.reduce((a, b) => a + b, 0) + ma.bonus;
        }

        character.skills.known.art = new Art;
        character.skills.known.art.raceBonus = 20;

        character.skills.known.anthropology = new Anthropology;
        character.skills.known.anthropology.raceBonus = 10;

        character.skills.known.mathematicsBasic = new MathematicsBasic;
        character.skills.known.mathematicsBasic.raceBonus = 15;

        character.skills.known.mathematicsAdvanced = new MathematicsAdvanced;
        character.skills.known.mathematicsAdvanced.raceBonus = 15;
    }
}

module.exports = Dnorr;