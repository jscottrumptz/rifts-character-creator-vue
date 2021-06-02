const OCC = require('../OCC');

class RogueScientist extends OCC {
    constructor() {
        super();
        this.name = 'Rogue Scientist';
        this.group = 'Adventurers & Scholars';
        this.description = `    The rogue scientist is not the stereotypical bookworm or lab rat of the 21st Century, but a tough, self-reliant explorer of a harsh and unforgiving world. They are usually versed in survival skills and proficient in a wide range of science, technical, mechanical and electrical skills. In many cases, they look more like your average Headhunter than a scientist. These men and women suffer from an insatiable lust for knowledge that drives them into the wastelands and wilderness, digging through ruins to unearth pre-Rifts artifacts and technology and trying to explain magic, the Rifts, time, dimensional travel, and rediscovering humankind's past. They explore the ruins of toppled cities and study the habits and physiology of creatures from the Rifts. 
        Far from the Coalition States, they are highly regarded as men of science and learning. They are a welcome and, sometimes, desperately needed addition to most adventurer groups, mercenary companies, and wilderness towns. Yet these rugged explorers of our future Earth are frequently feared by superstitious wilderness folk and by the average people of the CS. Coalition propaganda has painted these Rogues as mad scientists who care about science and knowledge above the safety of people. Reckless fools who toy with alien technology and flirt with disaster. Rumor has it that Rogue Scientists and Rogue Scholars cavort with all manner of alien beings, monsters, and worse. They also dare to enter forbidden places and hell-spawned dimensions where no god-fearing man would set foot. All propaganda from the Coalition States that fuels the flames of fear and superstition. The illiterate are constantly bombarded by talk, radio and video telecasts about insane or rebellious rogues who threatened the sanctity of the city or who support alien life over human. Reports frequently offer an inflammatory statement like, "Only the demented mind of a Rogue Scientist (or Scholar) could have conceived of anything so diabolical." Or "Several books were found among the assailant's possessions, obviously the source of his delusions." Or warnings like, "Remember, these self-proclaimed men of science are liars and pawns of alien forces. Report any suspicious activity to the authorities at once! The life you save may be your own!" 
        The Coalition intentionally paints a scary picture of the Rogue Scientist, because its leaders fear their knowledge. The Coalition knows all too well the power of pre-Rifts and alien technology, and a curious mind. They are concerned that if left unhampered, these scientists may disrupt CS society and affect the status quo. To the CS, these characters are indeed rogues who question everything they see and seek answers and truths the CS would rather not have revealed. Independent and strong in body and mind, these independent crusaders are not the sheep that typifies the average CS citizen. They are wolves among the sheep. Wolves who, by their words and actions, may show the sheep how to step out of their roles and question their masters. And that is not an acceptable contingency. Thus, they are vilified, discredited and branded dangerous enemies of the States. 
        An inventive and resourceful scavenger, the Rogue Scientist combines all levels of knowledge and technology to his area of expertise. Some are practically Operators with expertise in mechanics and technology, others study genetics, physiology and zoology, some are naturalists and explorers, and still others study a little bit of everything.`;
        this.image = 'assets/images/occ/RogueScientist.jpg';
        this.reqIq = 12;
        this.recommendedAttributes = `a high ME and PE are helpful but not mandatory.`;
        this.iqBonus = { bonus: 2 };
        this.perceptionBonus = { bonus: 4 };
        this.insanityBonus = { bonus: 2 };
        this.diseaseBonus = { bonus: 2 };
        this.sdc = { sides: 6, amount: 1, bonus: 6 };
        this.credits = { sides: 6, amount: 1, multiplier: 1000 };
        this.blackMarketItems = { sides: 6, amount: 3, multiplier: 1000 };

        this.occSkillsList = `Literacy in two Languages of choice (+ 35%). 
Language: Native Tongue at 96%. 
Language: Other: Three of choice (+20%). 
Astronomy & Navigation (+20%) 
Basic and Advanced Math (both+ 30%) 
Basic Electronics (+20%) 
Computer Operation (+20%) 
Find Contraband (+10%) 
Pilot Automobile (+10%)
Radio: Basic (+10%) 
Recycle (+20%) 
Salvage (+20%) 
W.P. Energy Pistol or Energy Rifle. 

Hand to Hand combat can be selected as an "O.C.C. Related" skill as follows: 
Basic counts as one skill selection, Expert as two, Martial Arts three, or Assassin (if evil) as four selections.`;
        this.occRelatedSkillsList = `Select three Science skills, two Medical skills, and two Technical skills, and eight other skills (including others from the previous categories if so desired), +2 additional skills at levels 3, 6, 9, 12, and 15. All new skills start at level one proficiency. 

Communications: Any (+5%; but +15% to Cryptography, Laser Communications and Optic Systems). 
Cowboy: None. 
Domestic: Any (+5%). 
Electrical: Any (+10%). 
Espionage: Wilderness Survival only (+10%). 
Horsemanship: General only. 
Mechanical: Any (+5%). 
Medical: Any (+ 10%). 
Military: Trap/Mine Detection (+5%) only. 
Physical: Any, excluding Acrobatics, Gymnastics and Wrestling. Pilot: Any (+5%). 
Pilot Related: Any (+10%). 
Rogue: Any. 
Science: Any (+20%).
Technical: Any (+15%). 
W.P.: Any, excluding Heavy Weapons of any kind. 
Wilderness: Any (+10%).
`;
        this.secondarySkillsList = `Select four skills from the Secondary Skills List in the Skill Section, + 1 at levels 2, 4, 7, 10 and 13. These are additional areas of knowledge that do not get any bonuses, other than any possible bonus for having a high I.Q. All Secondary Skills start at the base skill level.`;
        this.cyberneticsDesc = `Starts with none. May or may not be opposed to cybernetics and bionics.`
        this.equipmentDesc = `One suit of light M.D.C. body armor, one weapon for each W.P. and two E-Clips, one laser scalpel or Vibro-Knife, a P.D.D. pocket audio digital disc recorder & player (plays one inch discs, two hours per disc, powered by a tiny one year battery) and a dozen blank discs, note pad, variety of markers, mechanical pencil, portable hand-held computer with micro-printer, pocket laser distance finder, conventional tape measure, digital camera (100 still photos and up to 30 minutes of video per video disc, triple the number of still photos if no video is used) and a dozen video discs, multi-optics band, pen flashlight, large flashlight, hand pick ( 1D4 damage), survival knife ( 1D6 damage), backpack, knapsack, utility belt, ammo-belt, canteen, sunglasses and goggles, walkie-talkie radio, air filter, gas mask, 100 feet (30 m) of lightweight rope, and tool kit. If applicable, the character may also have a half dozen specimen cases, a dozen specimen dishes, six test tubes, 1D4 specimen jars, two dozen microscope slides, portable microscope, scalpel, pins, and tweezers. Weapons, armor, and equipment can be upgraded over time.`
        this.abilitiesDesc = `Analyze
A skill-like ability that enables a character to break patterns, solve strange equations. and otherwise gain insight and analysis to a situation, event or character. It also applies to strategy, finance, or just "working all the angles." Adds a bonus of+ 10% to skills such as Anthropology, Chemistry: Analytical, Computer Hacking, Cryptography, Entomological Medicine, Jury-Rig, Sensory Equipment, Trap/ Mine Detection, Zoology and Xenology, and + 1 on Perception Rolls when the scientist is focused on analyzing/figuring something out.

Hypothesize
A skill-like ability that enables a character to brainstorm out an answer to an impossible question. Given all of the information at hand, the character can make a quantum leap in logic to arrive at a new, and possibly radical solution to a problem that no one else has made, or is likely to understand. The catch is the odds of being able to duplicate it again. Adds a +20% bonus to Jury-Rig and Brewing.
GM Note: Use this as a sudden flash of insight or realization and a quick fix (temporary) in which the character knows what to do about some critical problem. This ability does NOT apply to finding a cure for cancer or figuring out how to use, build or improve every-thing, but it does reduce all penalties for extremely alien physiology or alien technology by half.

Find the Exotic
Find the Exotic. +20% bonus to Find Contraband related to scientific equipment, medicinal drugs, rare herbs and chemicals, exotic specimens (plant, herb, insect, animal, etc.) as ingredients and component parts, or as live subjects for study or testing. May also include rare parts and pre-Rifts science related books and artifacts. Only + 10% bonus to find electrical, mechanical, scholastic, or bionic contraband. These bonuses are added to the character's normal Find Contraband skill whenever such items are being sought. Gets science and medical equipment, medicinal drugs, and exotic specimens at a discount - 30% off as a professional courtesy from most other Scientists, doctors, medical suppliers and the Black Market, 50% discount from the Black Market, labs and clinics if he trades at least 12 hours of his time to work at one of their facilities, like a Body-Chop-Shop, underground lab or illegal clinic. Every 12 hours he puts in, he can get up to 100,000 credits worth of equipment or specimens at the discount (that's 50,000 credits, his cost).

Recognize Scientific Authenticity and Quality
An exclusive skill that enables the Rogue Scientist to tell if scientific equipment is new or used, defective, low or high quality, and if a chemical, drug, specimen or sample is genuine, a fair price and if it is exactly what he needs or not. Reduce this skill by half when dealing with unknown alien items, bionics, electronics and mechanical items. Not applicable to magic items.`
        this.occSkills = [];
        this.reqOcc = [];
        this.occRelatedNumber = 15;
        this.occRelatedSkills = [];
        this.occRelatedAtLevel = [{ level: 1, amount: 15, levels: [3, 6, 9, 12, 15], amounts: 2 }];
        this.reqOccRelated = [{ group: 'Science', amount: 3 }, { group: 'Medical', amount: 2 }, { group: 'Technical', amount: 2 }];
        this.secondarySkills = [];
        this.secondaryAtLevel = [{ level: 1, amount: 4, levels: [2, 4, 7, 10, 13], amounts: 1 }];
    }

    rollSecondary(character) {
        character.abilities.analyze = 
        { 
            name: `Analyze`,
            description: `A skill-like ability that enables a character to break patterns, solve strange equations. and otherwise gain insight and analysis to a situation, event or character. It also applies to strategy, finance, or just "working all the angles." Adds a bonus of+ 10% to skills such as Anthropology, Chemistry: Analytical, Computer Hacking, Cryptography, Entomological Medicine, Jury-Rig, Sensory Equipment, Trap/ Mine Detection, Zoology and Xenology, and + 1 on Perception Rolls when the scientist is focused on analyzing/figuring something out.`,
            type: 'Occupational',
        };

        character.abilities.hypothesize = 
        { 
            name: `Hypothesize`,
            description: `A skill-like ability that enables a character to brainstorm out an answer to an impossible question. Given all of the information at hand, the character can make a quantum leap in logic to arrive at a new, and possibly radical solution to a problem that no one else has made, or is likely to understand. The catch is the odds of being able to duplicate it again. Adds a +20% bonus to Jury-Rig and Brewing.`,
            gmNote: `Use this as a sudden flash of insight or realization and a quick fix (temporary) in which the character knows what to do about some critical problem. This ability does NOT apply to finding a cure for cancer or figuring out how to use, build or improve every-thing, but it does reduce all penalties for extremely alien physiology or alien technology by half.`,
            type: 'Occupational',
        };

        character.abilities.findExotic = 
        { 
            name: `Find the Exotic`,
            description: `Find the Exotic. +20% bonus to Find Contraband related to scientific equipment, medicinal drugs, rare herbs and chemicals, exotic specimens (plant, herb, insect, animal, etc.) as ingredients and component parts, or as live subjects for study or testing. May also include rare parts and pre-Rifts science related books and artifacts. Only + 10% bonus to find electrical, mechanical, scholastic, or bionic contraband. These bonuses are added to the character's normal Find Contraband skill whenever such items are being sought. Gets science and medical equipment, medicinal drugs, and exotic specimens at a discount - 30% off as a professional courtesy from most other Scientists, doctors, medical suppliers and the Black Market, 50% discount from the Black Market, labs and clinics if he trades at least 12 hours of his time to work at one of their facilities, like a Body-Chop-Shop, underground lab or illegal clinic. Every 12 hours he puts in, he can get up to 100,000 credits worth of equipment or specimens at the discount (that's 50,000 credits, his cost).`,
            type: 'Occupational',
        };

        character.abilities.recognizeScientific = 
        { 
            name: `Recognize Scientific Authenticity and Quality`,
            description: `An exclusive skill that enables the Rogue Scientist to tell if scientific equipment is new or used, defective, low or high quality, and if a chemical, drug, specimen or sample is genuine, a fair price and if it is exactly what he needs or not. Reduce this skill by half when dealing with unknown alien items, bionics, electronics and mechanical items. Not applicable to magic items.`,
            type: 'Occupational',
            baseSkill: "57% + 3% per lvl"
        };

        character.skills.known.analyze =
            {
                name: `Analyze`,
                description: `A skill-like ability that enables a character to break patterns, solve strange equations. and otherwise gain insight and analysis to a situation, event or character. It also applies to strategy, finance, or just "working all the angles." Adds a bonus of+ 10% to skills such as Anthropology, Chemistry: Analytical, Computer Hacking, Cryptography, Entomological Medicine, Jury-Rig, Sensory Equipment, Trap/ Mine Detection, Zoology and Xenology, and + 1 on Perception Rolls when the scientist is focused on analyzing/figuring something out.`,
                type: 'Occupational',
            };
    }
}

module.exports = RogueScientist;