const OCC = require('../OCC');

class BodyFixer extends OCC {
    constructor() {
        super();
        this.name = 'Body Fixer';
        this.group = 'Adventurers & Scholars';
        this.occQuote = `    "I'm a healer. I fix people. I don't judge them or decide who should live and die based on their genetic makeup. That's for God . . or maybe Emperor Prasek and his goon squads. If that makes me a criminal, so be it."`;
        this.description = `    Saying that a Body Fixer is just a doctor does a disservice to these brave men and women of this noble profession, and only tells part of their story. "Body Fixer" is the slang term for a medical doctor (M.D.) in North America who performs medicine on anybody - human and nonhuman. That latter distinction makes the Body Fixers criminals, rogues and dissidents in the eyes of the Coalition States. Anybody caught "harboring, aiding and abetting a criminal of the State" - a distinction given to all D-Bees for not having been born human - is punishable by death! And that includes providing them with medical aid. Better to let a D-Bee die in the gutter than give "it" comfort or aid. 
    Body Fixers are doctors who cannot tum their backs on the sick and injured based on their race. A choice that has branded them as "traitors to humanity" by the CS. 
    Conservative estimates suggest the D-Bee population among sentient (intelligent) life forms in North America is 34%. Less conservative numbers place the number at closer to 42%. Most Rogue Scholars and Scientists believe a more accurate number is probably 50-55%. Perhaps all the more reason for human supremacists like the leaders of the Coalition States to want D-Bees dead. Even in the Chi-Town 'Burbs, where being caught by CS Police, soldiers and undercover agents is death for D-Bees, they make up an estimated 16% to 22% of the population! In the New West, D-Bees make up at least 60% to 80% of the population, in the east and north into Canada that number is probably 40%-50%, possibly higher, and that does not include Psi-Stalkers, who the CS considers to be mutant humans. 
    It is difficult to determine exact numbers because most D-Bees live in poverty or low-tech communities in thousands of tiny villages, towns and tribes. Gathering in a large community, especially within view of the CS, is to invite a Coalition extermination squad to come knocking. Likewise, because humans are the dominant power in North America and D-Bees second class citizens at most places that accept them, predominantly D-Bee communities are raided and attacked with impunity by other D-Bees and human meres, raiders, bandits and adventurers. D-Bees only have rights if they have the firepower to fight back, which many do not. And because the Coalition States have been so tenacious at breaking down and wiping out large gatherings of D-Bees before they can tum into full-fledged cities or kingdoms, most D-Bees have adopted the practice of trying to integrate (and lose) themselves into an established, predominantly human community where the CS is much less likely to attack. 
    However one cuts the numbers, they are far too many people for a dedicated healer to ignore. Furthermore, because D-Bees are, generally, forced to live in substandard conditions, abused, and refused conventional medical treatment, they need someone like the Body Fixer more than anyone.
    As a result, Body Fixers are tough adventurers who often make house calls up to 300 miles ( 480 km) away from their base of operation. Around half are traveling doctors who may follow a regular circuit of towns, farms, homesteads and stops, or hook up with a group of adventurers, helping them and those in need encountered along the way. Consequently, most Body Fixers are rather like super-country doctors and are no strangers to traveling the wilderness. Although Body Fixers are idealistic healers, they aren't fools. They understand better than most people the dangers of Rifts Earth, and know sometimes one must kill or be killed. Fewer than 12% are dedicated pacifists who refuse to use a gun or fight back to protect themselves. On the contrary, many Body Fixers will not hesitate to use a weapon and threats to protect themselves and/or their patients. Considering the prejudice leveled at their nonhuman clients, Body Fixers are by nature rather stubborn, tenacious and militant, risking their lives every day for what they believe in. 
    Why do it? Why especially risk the retribution of the Coalition? Because Body Fixers are compassionate people who don't see much of a choice. Walk away and let someone they can save die, or do what they believe is right and save that life. Besides, half of all Body Fixers are D-Bees themselves devoted to helping all people. Person-al profit and power mean nothing to a dedicated Body Fixer. Most of them will offer their expert services to anybody who needs them for a hot meal, a dry place to sleep, and whatever seems like a fair and reasonable trade, all things considered. This has earned them the reputation for being kind and compassionate humanitarians and champions of the downtrodden. Some are practically living folk heroes.
    Of course, not all Body Fixers are the soul of compassion. Some are quacks and brigands who charge an arm and a leg (sometimes, quite literally) for their services, and gouge those in need, especially D-Bees and fugitives wanted by the authorities. Burn outs, hacks and greedy, cold-hearted Fixers seem to be the embodiment of those employed at most Black Market Body-Chop-Shops. Some are downright evil. These callous and insensitive doctors are in it for the money. Only 1 in 10 Fixers at a Chop-Shop seem to genuinely care about their patients. If the money's right, they'll work on anybody. No questions asked. 
    Perhaps because they know and cherish the pure physical body so much, many Body Fixers refuse to use cybernetics on themselves, unless it is a lifesaving organ or prosthetic. They may also try to dissuade their patients from getting augmentation of any kind. On the other hand, about a third will get a handful of cybernetic enhancements, mainly optics and sensors. However, a solid 10% will get plenty of them, although again, limited mainly to optics, sensors and things that help them to be better doctors.

(see Rifts® Ultimate Edition pg. 86 for more information)`;
        this.image = 'assets/images/occ/BodyFixer.jpg';
        this.raceDesc = `None; half are D-Bees.`;
        this.reqIq = 10;
        this.recommendedAttributes = `*( a high PP and MA are suggested but not mandatory. )`;
        this.maBonus = { bonus: 1 };
        this.psBonus = { bonus: 1 };
        this.ppBonus = { bonus: 1 };
        this.peBonus = { bonus: 1 };
        this.perceptionBonus = { bonus: 2 };
        this.insanityBonus = { bonus: 3 };
        this.diseaseBonus = { bonus: 3 };
        this.dodgeBonus = { bonus: 1 };
        this.disarmBonus = { bonus: 1 };
        this.poisonBonus = { bonus: 2 };
        this.drugsBonus = { bonus: 2 };
        this.horrorBonus = { bonus: 2 };
        this.sdc = { sides: 6, amount: 1, bonus: 4 };
        this.credits = { sides: 6, amount: 1, multiplier: 1000 };
        this.blackMarketItems = { sides: 6, amount: 3, multiplier: 1000 };

        this.occSkillsList = `Language: Native Tongue at 96%.
Language: Other: Two of choice (+20%). 
Literacy: Native Language (+30%; typically American). 
Athletics (General) or Body Building
Basic Math (+15%)
Biology (+30%)
Brewing: Medicinal (+20%)
Chemistry (+20%)
Lore: D-Bees (+25%)
Medical Doctor (+20%)
Outdoorsmanship
Pathology (+30%)
Pilot: One of choice (+10%). 
Sensory Equipment (+20% on medical, only +5% on all others). 
W.P. Knife (Special bonus of +1 to strike).
Xenology (+20%)
Hand to Hand Combat: None to start, but can be selected as an O.C.C. Related Skill as follows: Hand to Hand: Basic counts as one skill selection or Expert as two.`;
        this.occRelatedSkillsList = `Select three additional skills from the Medical category, and select 8 other skills (may include more from the Medical category) at level one. Plus select two additional skills at levels 3, 6, 9, and 12. All new skills start at level one proficiency. 
Communications: Barter, Creative Writing, Language, Literacy, Public Speaking, and Radio: Basic only (+5%). 
Cowboy: None.
Domestic: Any (+10%). 
Electrical: Basic only (+5%).
Espionage: Wilderness Survival only (+10%). 
Horsemanship: General only.
Mechanical: Basic Mechanics and Automotive only. 
Medical: Any (+15%).
Military: None.
Physical: Any, excluding Acrobatics, Boxing and Wrestling. 
Pilot: Any (+5%). 
Pilot Related: Any.
Rogue: Streetwise only (+4%). 
Science: Any (+10%). 
Technical: Any (+10%).
W. P.: Any; except Heavy Military Weapons and Heavy Energy Weapons.
Wilderness: Any (+5%, but the bonus counts only for country/adventuring Body Fixers, not city-docs).`;
        this.secondarySkillsList = `Six Secondary Skills from the Secondary Skill list in the Skills Section, + 1 additional Secondary Skill at levels 3, 6, 9, 12 and 15. These are additional areas of knowledge that do not get any bonuses, other than any possible bonus for having a high I.Q. All Secondary Skills start at the base skill level.`;
        this.cyberneticsDesc = `Starts with none. May or may not be opposed to cybernetics and bionics.`;
        this.equipmentDesc = `One suit of light M.D.C. body armor, Two surgical gowns, a dozen pair of disposable surgical gloves, one pair of reusable surgical gloves, surgical kit (includes scalpels, clamps, suture, needles, etc.), medical kit (first-aid kit, bandages, antiseptics, protein healing salve, aspirin, painkiller, antibiotics, hypodermic gun, stethoscope, pen flashlight), IRMSS/Internal Robot Micro-Surgeon System, RMK/Robot Medical Kit, hand-held computer, hand-held blood pressure machine (computerized), thermo-meter, six unbreakable vials, and other basic items, portable compu-drug dispenser, portable laboratory, backpack, medical bag or satchel, one weapon for each W.P. and two E-Clips for each, one Vibro-Knife (ID6 M.D.), two scalpels (ID4 S.D.C. damage), one Wilk's Laser Scalpel, flashlight, pen flashlight, a commercial vehicle (as per Pilot skill) or a horse (if he can ride), hat with a brim, hooded cape or poncho, canteen, a pair of sunglasses, air filter, a pocket note pad and two pens, and some personal items.`;
        this.abilitiesDesc = `Familiarity with D-Bees
No skill penalty when working on common/known D-Bees; only a -20% penalty when dealing with extremely alien physiology, rare or previously unknown D-Bees. 
The Body Fixer is -20% whenever working on bionic modifications, and -30% when working on alien cybernetics, -50% on alien bionics. 

Disease Diagnostic Specialist
Diagnose disease with extreme clarity and accuracy. Skill Bonuses: +20% to that percentile number of the Medical Doctor skill, and + 10% to Brewing and Holistic Medicine skills to whip up a cure. He is so good, that he can reduce the symptoms (i.e., the penalties and duration) by half. Can also recognize possession and magical illnesses and curses.

Perception Rolls
Additional +2 when the Perception Roll involves making an observation about a medical condition, diagnosis/health or medical procedure, as well as when dealing with drugs/chemicals, and poison.

W.P. Knife Bonus
Along with the standard W.P. Knife bonuses, receive an Additional +1 to Strike.`
        this.alignment = `Any, but tends to be Principled, Scrupulous, Unprincipled or Aberrant.`
        this.occRelatedNumber = 11;
        this.secondaryNumber = 6;
        this.languages = 2;
        this.literacies = 0;
        this.occSkills = {
            communication: {
                number: 0,
                free: [
                    {
                        name:'languageNativeTongue',
                        base: 96
                    },
                    {
                        name:'literacyNativeTongue',
                        occBonus: 30
                    },
                    {
                        name:'sensoryEquipmentCommunication',
                        occBonus: 20
                    }
                ],
                choice: [
                    {
                        amount: 2,
                        available: [
                            {
                                name:'languageOther',
                                occBonus: 20
                            }
                        ],
                        unavailable: [
                            {
                                name:'barter'
                            },
                            {
                                name:'creativeWriting'
                            },
                            {
                                name:'cryptography'
                            },
                            {
                                name:'electronicCountermeasures'
                            },
                            {
                                name:'laser'
                            },
                            {
                                name:'opticSystems'
                            },
                            {
                                name:'performance'
                            },
                            {
                                name:'publicSpeaking'
                            },
                            {
                                name:'radioBasic'
                            },
                            {
                                name:'sensoryEquipmentCommunication'
                            },
                            {
                                name:'signLanguage'
                            },
                            {
                                name:'singCommunication'
                            },
                            {
                                name:'surveillance'
                            },
                            {
                                name:'tVOrVideo'
                            }
                        ]
                    }
                ],
                available: [
                    {
                        name: 'Any',
                        occBonus: 5
                    }
                ],
                unavailable: [
                    {
                        name:'cryptography'
                    },
                    {
                        name:'electronicCountermeasures'
                    },
                    {
                        name:'laser'
                    },
                    {
                        name:'opticSystems'
                    },
                    {
                        name:'performance'
                    },
                    {
                        name:'signLanguage'
                    },
                    {
                        name:'singCommunication'
                    },
                    {
                        name:'surveillance'
                    },
                    {
                        name:'tVOrVideo'
                    }
                ],
                only:[]
            },
            cowboy: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [],
                unavailable: [
                    {
                        name:'All',
                    }
                ],
                only:[]
            },
            domestic: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [
                    {
                    name: 'Any',
                    occBonus: 10
                    }
                ],
                unavailable: [],
                only:[]
            },
            electrical: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [],
                unavailable: [],
                only:[
                    {
                        name: 'basicElectronics',
                        occBonus: 5
                    }
                ]
            },
            espionage: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [],
                unavailable: [],
                only:[
                    {
                        name: 'wildernessSurvivalEspionage',
                        occBonus: 10
                    }
                ]
            },
            horsemanship: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [],
                unavailable: [],
                only:[
                    {
                        name: 'horsemanshipGeneral'
                    }

                ]
            },
            mechanical: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [

                    {
                        name: 'automotiveMechanics'
                    },
                    {
                        name: 'basicMechanics'
                    }
                ],
                unavailable: [
                    {
                        name: 'aircraftMechanics'
                    },
                    {
                        name: 'biowareMechanics'
                    },
                    {
                        name: 'locksmith'
                    },
                    {
                        name: 'mechanicalEngineer'
                    },
                    {
                        name: 'robotMechanics'
                    },
                    {
                        name: 'vehicleArmorer'
                    },
                    {
                        name: 'weaponsEngineer'
                    }
                ],
                only:[]
            },
            medical: {
                number: 3,
                free: [
                    {
                        name: 'brewingMedicinal',
                        occBonus: 20
                    },
                    {
                        name: 'medicalDoctor',
                        occBonus: 20
                    },
                    {
                        name: 'pathology',
                        occBonus: 30
                    },
                ],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [
                    {
                        name: 'Any',
                        occBonus: 15
                    }
                ],
                unavailable: [],
                only:[]
            },
            military: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [],
                unavailable: [
                    {
                        name: 'All'
                    }
                ],
                only:[]
            },
            physical: {
                number: 0,
                free: [
                    {
                        name: 'noHandToHandSkill',
                        skillCost: 0
                    },
                    {
                        name: 'outdoorsmanship'
                    }
                ],
                choice: [
                    {
                        amount: 1,
                        or: [
                            {
                                name: 'athleticsGeneral'
                            },
                            {
                                name: 'bodyBuildingAndWeightLifting'
                            }
                        ]
                    }
                ],
                available: [
                    {
                        name:'handToHandExpert',
                        skillCost: 2
                    }
                ],
                unavailable: [
                    {
                        name: 'acrobatics',
                    },
                    {
                        name: 'boxing',
                    },
                    {
                        name: 'wrestling',
                    },
                    {
                        name: 'handToHandCommando',
                    },
                    {
                        name:'handToHandMartialArts',
                        skillCost: 3
                    },
                    {
                        name:'handToHandAssassin',
                        skillCost: 4
                    }
                ],
                only:[]
            },
            pilot: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 1,
                        available: [
                            {
                                name: 'Any',
                                occBonus: 10
                            }
                        ]
                    }
                ],
                available: [
                    {
                        name: 'Any',
                        occBonus: 5
                    }
                ],
                unavailable: [],
                only:[]
            },
            pilotRelated: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [
                    {
                        name: 'Any'
                    }
                ],
                unavailable: [],
                only:[]
            },
            rogue: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [],
                unavailable: [],
                only:[
                    {
                        name: 'streetwise',
                        occBonus: 4
                    }
                ]
            },
            science: {
                number: 0,
                free: [
                    {
                        name: 'biology',
                        occBonus: 30
                    },
                    {
                        name: 'mathematicsBasic',
                        occBonus: 15
                    },
                    {
                        name: 'chemistry',
                        occBonus: 20
                    },
                    {
                        name: 'xenology',
                        occBonus: 20
                    }
                ],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [
                    {
                        name: 'Any',
                        occBonus: 10
                    }
                ],
                unavailable: [],
                only:[]
            },
            technical: {
                number: 0,
                free: [
                    {
                        name: 'loreDBee',
                        occBonus: 25
                    }
                ],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [
                    {
                        name: 'Any',
                        occBonus: 10
                    }
                ],
                unavailable: [],
                only:[]
            },
            weaponProficienciesAncient: {
                number: 0,
                free: [
                    {
                        name: 'wPKnife'
                    }
                ],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [
                    {
                        name: 'Any'
                    }
                ],
                unavailable: [],
                only:[]
            },
            weaponProficienciesModern: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [],
                unavailable: [
                    {
                        name: 'wPHeavyMD'
                    },
                    {
                        name: 'wPHeavyMilitary'
                    },
                    {
                        name: 'wPMilitaryFlamethrowers'
                    }
                ],
                only:[]
            },
            wilderness: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [
                    {
                        name: 'Any',
                        occBonus: 5
                    }
                ],
                unavailable: [],
                only:[]
            }
        };
        this.occRelatedAtLevel = { levels: [3, 6, 9, 12], amounts: 2 };
        this.secondaryAtLevel = { levels: [3, 6, 9, 12, 15], amounts: 1 };
    }

    rollSecondary(character) {
        // must choose between occ skills
        character.skills.choices = true;

        character.abilities.familiarityWithDBees =
        { 
            name: `Familiarity with D-Bees`,
            description: `No skill penalty when working on common/known D-Bees; only a -20% penalty when dealing with extremely alien physiology, rare or previously unknown D-Bees. 
The Body Fixer is -20% whenever working on bionic modifications, and -30% when working on alien cybernetics, -50% on alien bionics. 
`,
            type: 'Occupational'
        };

        character.abilities.diseaseDiagnosticSpecialist =
        { 
            name: `Disease Diagnostic Specialist`,
            description: `Diagnose disease with extreme clarity and accuracy. Skill Bonuses: +20% to that percentile number of the Medical Doctor skill, and + 10% to Brewing and Holistic Medicine skills to whip up a cure. He is so good, that he can reduce the symptoms (i.e., the penalties and duration) by half. Can also recognize possession and magical illnesses and curses.`,
            type: 'Occupational'
        };

        character.abilities.perceptionRolls =
        { 
            name: `Perception Rolls`,
            description: `Additional +2 when the Perception Roll involves making an observation about a medical condition, diagnosis/health or medical procedure, as well as when dealing with drugs/chemicals, and poison.`,
            type: 'Occupational'
        };

        character.abilities.wPKnifeBonus =
            {
                name: `W.P. Knife Bonus`,
                description: `Along with the standard W.P. Knife bonuses, receive an Additional +1 to Strike.`,
                type: 'Occupational'
            };
    }
}

module.exports = BodyFixer;