const OCC = require('../OCC');

class WildernessScout extends OCC {
    constructor() {
        super();
        this.name = 'Wilderness Scout';
        this.group = 'Adventurers & Scholars';
        this.occQuote = `    "Some folks is afeared of the woods, but to me, they 's home sweet home. It's the city that makes me feel a might uncomfortable."`;
        this.description = `    A lot of city-folk look down on Wilderness Scouts as uneducated rabble, but in the savage wilderness, they are the lords and ladies of the forest. A Scout knows his way around the forest like the back of his hand. They consider themselves to be one of the woodland predators and are stealthy, cunning, resourceful and self-reliant. 
    A Wilderness Scout can be a native raised in the wilderness or a city slicker who has come to learn the ways of the wild. Regardless of their origin, the character is a walking encyclopedia about hunting, trapping, wildlife, and the land, but most are complete illiterates, unable to read or write a word. On the other hand, many are captivating storytellers who love to weave tales about the things they have seen and done. Most are also experts in Demon, Monster and Faerie Lore. The Wilder-ness Scout knows many of nature's secrets and can live off the land with ease and traverse the wilderness without leaving any trace that he was there. 
    Generally, a Wilderness Scout is a rough and tumble fellow who enjoys tests of skill, strength, and cunning, and who enjoys life to its fullest (and purest). The years of life in the outdoors means the individual is powerfully built, conditioned to harsh climates and environments and tough as nails. Their weathered skin makes them look ten years older than they really are. Although a Wilderness Scout may be sorely lacking in social graces, he is no stranger to technology and uses high tech M.D.C. body armor and Mega-Damage energy weapons, and pi-lots a hovercraft with the same skill as his horse. Still, the typical Scout, no matter how acquainted he is with technology, will be uncomfortable in the confines of a city. His place is the wide open spaces of the wilderness. That is his home and his choice.`;
        this.image = 'assets/images/occ/WildernessScout.jpg';
        this.raceDesc = `None`;
        this.reqIq = 8;
        this.reqPe = 12;
        this.recommendedAttributes = `a high P.S. and M.E. are helpful but not mandatory.`;
        this.psBonus = { sides: 4, amount: 1 };
        this.peBonus = { sides: 4, amount: 1 };
        this.initiativeBonus = { bonus: 1 };
        this.perceptionBonus = { bonus: 3 };
        this.rollBonus = { bonus: 2 };
        this.poisonBonus = { bonus: 2 };
        this.diseaseBonus = { bonus: 2 };
        this.comaBonus = { bonus: 10 };
        this.deathBonus = { bonus: 10 };
        this.sdc = { sides: 6, amount: 3, bonus: 10 };
        this.credits = { sides: 6, amount: 3, multiplier: 100 };
        this.blackMarketItems = { sides: 4, amount: 3, multiplier: 1000 };
        this.occSkillsList = `Language: Native Tongue 94%. 
Language: Other: Two of choice (+15%).
Athletics (General) 
Cooking (+15%) 
Climbing (+20%) 
Fishing (+15%) 
Horsemanship: General (+20%) 
Identify Fruits and Plants (+20%) 
Hunting 
Land Navigation (+20%) 
Pilot: Motorcycle (+14%) or Hovercycle (+10%) or Horsemanship: Exotic; pick one. 
Prowl (+15%) 
Radio: Basic (+10%) 
Track Animals (+20%) 
Wilderness Survival (+20%) 
W.P. Knife 
W.P. Ancient and/or Modern: Three of choice. 
Hand to Hand: Basic, but it can be changed to Hand to Hand: Expert at the cost of one "O.C.C. Related Skill," or Martial Arts (or Assassin, if an evil alignment) for the cost of two.`;
        this.occRelatedSkillsList = `Select two Physical skills, one Wilderness skill and six other skills, + 1 at levels 2, 5, 8, 11, and 14. All new skills start at level one proficiency. 
Communications: Barter, Language (any; + 10%), Literacy (any), Performance, and Public Speaking only. 
Cowboy: None. 
Domestic: Any (+10%). 
Electrical: Basic Electronics only. 
Espionage: Any (+ 10%), except Forgery and Pick Locks. 
Horsemanship: Exotic Animals (+5%) only. 
Mechanical: Automotive only. 
Medical: First Aid (+10%) or Holistic Medicine (+20%), but the latter counts as two skill selections. 
Military: None. 
Physical: Any, except Acrobatics (+10% when applicable). 
Pilot: Any, except robots, power armor, military or large, noisy vehicles.
Pilot Related: Any.
Rogue: Gambling, Imitate Voices & Sounds, and Tailing only (+5%).
Science: Math: Basic, Anthropology, Biology, and Botany only.
Technical: Any (+5% to most, a +15% bonus applies only to Breed Dogs, Lore (any) and Rope Works). 
W.P.: Any. 
Wilderness: Any (+20%).`;
        this.secondarySkillsList = `Select four Secondary Skills at first level from the Secondary Skills List in the Skill Section, +1 additional at levels 3, 6, 9 and 12. These are additional areas of knowledge that do not get any bonuses, other than any possible bonus for having a high I.Q. All Secondary Skills start at the base skill level.`;
        this.cyberneticsDesc = `Most avoid "unnatural" cybernetic augmentation except when needed as a prosthetic.`;
        this.equipmentDesc = `Suit of light M.D.C. body armor, one weapon for each W.P. +ID4 E-Clips for each, survival knife and hand axe (both do ID6 S.D.C. damage), Vibro-Knife or Saber, and a set of wilderness clothing; this can be anything from camouflage fatigues to buckskin. Extra pair of boots, hat or helmet, sunglasses or tinted visor, air filter, first-aid kit, knapsack, backpack, utility/ammo belt, a couple sacks, several short pieces of cord for tying things, 100 feet (30 m) of lightweight rope, 6 iron spikes, 6 wooden spikes (as much for vampires as anything else), wooden cross (8 inches/20 cm), a hammer and a mallet, hand axe, utility knife, animal skinning knife, fishing line and hooks (pole optional), animal snares, two canteens, six flares, infrared binoculars with digital distancing readout, a pair of passive nightvision goggles, and a telescopic sight for a gun. Also starts with an old or shabby looking, but reliable vehicle (missing 1D4x10 of its original M.D.C.) that matches Piloting skill.`;
        this.abilitiesDesc = `Trail Blazing
The ability to cut and mark trails through the wilderness for others to follow. A failed skill roll means the trail cannot be followed by others as intended. 
Base Skill: 20% +5% per level of experience.

Cross-Country Pacing
Wilderness Scouts are known for pacing themselves for cross-country travel. This not only includes pacing their physical exertion and speed, but also pacing their food and water in-take, enabling them to cover great distances on foot, horseback or by mountain bicycle for maximum speed at a pace that can be maintained for days. This skill combined with Land Navigation also enables them to accurately predict how long a trip will take (for them alone or with others in tow - the latter always taking twice as long) within 2D6x10 minutes, 6D6 hours if unfamiliar with the area. 
This makes the Wilderness Scout an excellent messenger between parties, able to cut across country avoiding roads and other well trafficked areas, in favor of little known back roads, hunting trails, water-ways and short cuts, often ensuring secrecy and safety for the travel. (Note: A Scout never reveals his most secret and favorite routes to clients or strangers accompanying him unless it is an absolute emergency.) These guys come and go without anyone knowing how, when or where they've been. Once a Scout travels out of sight, he seems to simply vanish into the wilderness. 
On a bicycle, this skill enables the Wilderness Scout to achieve three times his running speed on level ground, and travel cross-country at twice normal running speed. They can maintain this maximum bike speed for a time equal to their P.E.x10 in minutes without overexerting themselves. On foot, this skill enables the character to move at full run-ning speed cross-country for a time equal to his P.E.x5 in minutes with-out overexerting himself. 
Base Skill: 35% +5% per level of experience. 

Cartography
The specialized art of mapmaking, Cartography is one of the most important skills that a Wilderness Scout learns. Characters with this skill can produce highly accurate maps with a wide variety of tools, including pen and paper, computer plotting and even advanced holographic displays. (Computer mapping requires a character to ha e the Computer Operation skill.) 
The cartography skill also includes the rudiments of mathematics. A character with the Cartography skill has the equivalent of the Basic Math skill at a fixed base of 50%, plus any applicable bonus for an exceptional I.Q. attribute, or provides a bonus of +5% to Math: Basic if it is also selected as an O.C.C. Related Skill. 
A successful roll means the map is not only accurate and easy to use, but elegant and aesthetically pleasing. A failed roll indicates that some details are wrong, other details have been left out, and the scale and specified locations are off by 1D10 miles. 
Base Skill: 40% +5% per level of experience.

Save vs Horror Factor
+ 1 to save vs Horror Factor at levels 2, 4, 6, 9, 12 and 15.`;
        this.alignment = `Any.`;
        this.startingHandToHand = 'handToHandBasic';
        this.occRelatedNumber = 9;
        this.secondaryNumber = 4;
        this.languages = 2;
        this.literacies = 0;
        this.totalWP = 3;
        this.occSkills = {
            communication: {
                number: 0,
                free: [
                    {
                        name:'languageNativeTongue',
                        base: 94
                    },
                    {
                        name:'radioBasic',
                        occBonus: 10
                    }
                ],
                choice: [
                    {
                        amount: 2,
                        available: [
                            {
                                name:'languageOther',
                                occBonus: 15
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
                        name: 'languageOther',
                        occBonus: 10
                    }
                ],
                unavailable: [
                    {
                        name: 'creativeWriting'
                    },
                    {
                        name: 'cryptography'
                    },
                    {
                        name: 'electronicCountermeasures'
                    },
                    {
                        name: 'laser'
                    },
                    {
                        name: 'opticSystems'
                    },
                    {
                        name: 'sensoryEquipmentCommunication'
                    },
                    {
                        name: 'signLanguage'
                    },
                    {
                        name: 'singCommunication'
                    },
                    {
                        name: 'surveillance'
                    },
                    {
                        name: 'tVOrVideo'
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
                free: [
                    {
                        name: 'cook',
                        occBonus: 15
                    },
                    {
                        name: 'fishing',
                        occBonus: 15
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
                        name: 'basicElectronics'
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
                available: [
                    {
                        name: 'Any',
                        occBonus: 10
                    }
                ],
                unavailable: [
                    {
                        name: 'forgery'
                    },
                    {
                        name: 'pickLocksEspionage'
                    }
                ],
                only:[]
            },
            horsemanship: {
                number: 0,
                free: [
                    {
                        name: 'horsemanshipGeneral',
                        occBonus: 20
                    }
                ],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [],
                unavailable: [],
                only:[
                    {
                        name: 'horsemanshipExoticAnimalsHorsemanship',
                        occBonus: 5
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
                available: [],
                unavailable: [],
                only:[
                    {
                        name: 'automotiveMechanics'
                    }
                ]
            },
            medical: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [
                    {
                        name: 'firstAid',
                        occBonus: 10
                    },
                    {
                        name: 'holisticMedicine',
                        occBonus: 20,
                        skillCost: 2
                    }
                ],
                unavailable: [
                    {
                        name: 'animalHusbandry'
                    },
                    {
                        name: 'brewingMedicinal'
                    },
                    {
                        name: 'crimeSceneInvestigation'
                    },
                    {
                        name: 'cyberneticMedicine'
                    },
                    {
                        name: 'cyberneticMedicineMaster'
                    },
                    {
                        name: 'entomologicalMedicine'
                    },
                    {
                        name: 'fieldSurgery'
                    },
                    {
                        name: 'forensics'
                    },
                    {
                        name: 'medicalDoctor'
                    },
                    {
                        name: 'paramedic'
                    },
                    {
                        name: 'pathology'
                    },
                    {
                        name: 'psychology'
                    },
                    {
                        name: 'veterinaryScience'
                    }
                ],
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
                number: 2,
                free: [
                    {
                        name: 'handToHandBasic',
                        skillCost: 0
                    },
                    {
                        name: 'athleticsGeneral'
                    },
                    {
                        name: 'prowlPhysical',
                        occBonus: 15
                    },
                    {
                        name: 'climb',
                        occBonus: 20
                    }
                ],
                choice: [
                    {
                        amount: 0,
                    }
                ],
                available: [
                    {
                        name: 'Any',
                        occBonus: 10
                    },
                    {
                        name:'handToHandExpert',
                        skillCost: 1
                    },
                    {
                        name:'handToHandMartialArts',
                        skillCost: 2
                    },
                    {
                        name:'handToHandAssassin',
                        skillCost: 2
                    }
                ],
                unavailable: [
                    {
                        name: 'acrobatics',
                    },
                    {
                        name: 'handToHandCommando',
                    },
                    {
                        name: 'noHandToHandSkill',
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
                        or: [
                            {
                                name: 'motorcyclesAndSnowmobiles',
                                occBonus: 14
                            },
                            {
                                name: 'hovercyclesOrSkycyclesOrRocketBikes',
                                occBonus: 10
                            }
                        ]
                    }
                ],
                available: [
                    {
                        name: 'Any',
                        occBonus: 10
                    }
                ],
                unavailable: [
                    {
                        name: 'airplane'
                    },
                    {
                        name: 'boatsShips'
                    },
                    {
                        name: 'flightSystemCombat'
                    },
                    {
                        name: 'helicopter'
                    },
                    {
                        name: 'jetAircraft'
                    },
                    {
                        name: 'militaryCombatHelicopter'
                    },
                    {
                        name: 'militaryJetFighter'
                    },
                    {
                        name: 'militarySubmersibles'
                    },
                    {
                        name: 'militaryTanksAndApcs'
                    },
                    {
                        name: 'militaryWarshipsAndPatrolBoats'
                    },
                    {
                        name: 'robotCombatElite'
                    },
                    {
                        name: 'robotCombatBasic'
                    }
                ],
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
                available: [
                    {
                        name: 'Any',
                        occBonus: 5
                    }
                ],
                unavailable: [
                    {
                        name: 'cardsharp'
                    },
                    {
                        name: 'computerHacking'
                    },
                    {
                        name: 'concealment'
                    },
                    {
                        name: 'findContrabandRogue'
                    },
                    {
                        name: 'gamblingDirtyTricks'
                    },
                    {
                        name: 'iDUndercoverAgents'
                    },
                    {
                        name: 'palming'
                    },
                    {
                        name: 'pickLocksRogue'
                    },
                    {
                        name: 'pickPocketsRogue'
                    },
                    {
                        name: 'prowlRogue'
                    },
                    {
                        name: 'roadwise'
                    },
                    {
                        name: 'safeCracking'
                    },
                    {
                        name: 'seduction'
                    },
                    {
                        name: 'streetwise'
                    }
                ],
                only:[]
            },
            science: {
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
                        name: 'archaeology'
                    },
                    {
                        name: 'artificialIntelligence'
                    },
                    {
                        name: 'astronomyAndNavigation'
                    },
                    {
                        name: 'astrophysics'
                    },
                    {
                        name: 'chemistry'
                    },
                    {
                        name: 'chemistryAnalytical'
                    },
                    {
                        name: 'chemistryPharmaceutical'
                    },
                    {
                        name: 'mathematicsAdvanced'
                    },
                    {
                        name: 'xenology'
                    },
                    {
                        name: 'zoology'
                    },
                    {
                        name: 'zoologySpecialized'
                    }
                ],
                only:[]
            },
            technical: {
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
                    },
                    {
                        name: 'breedDogs',
                        occBonus: 15
                    },
                    {
                        name: 'ropeWorks',
                        occBonus: 15
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
                        amount: 3,
                        available: [
                            {
                                name: 'Any'
                            }
                        ]
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
                        amount: 3,
                        available: [
                            {
                                name: 'Any'
                            }
                        ],
                        unavailable: []
                    }
                ],
                available: [],
                unavailable: [],
                only:[]
            },
            wilderness: {
                number: 1,
                free: [
                    {
                        name: 'hunting',
                        occBonus: 20
                    },
                    {
                        name: 'identifyPlantsAndFruits',
                        occBonus: 20
                    },
                    {
                        name: 'landNavigation',
                        occBonus: 20
                    },
                    {
                        name: 'trackAndTrapAnimals',
                        occBonus: 20
                    },
                    {
                        name: 'wildernessSurvivalWilderness',
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
                        occBonus: 20
                    }
                ],
                unavailable: [],
                only:[]
            }
        };
        this.occRelatedAtLevel = { levels: [2, 4, 6, 9, 12], amounts: 1 };
        this.secondaryAtLevel = { levels: [3, 6, 9, 10, 15], amounts: 1 };
    }

    rollSecondary(character) {
        // must choose between occ skills
        character.skills.choices = true;

        character.abilities.trailBlazing =
            {
                name: `Trail Blazing`,
                description: `The ability to cut and mark trails through the wilderness for others to follow. A failed skill roll means the trail cannot be followed by others as intended.`,
                type: 'Occupational',
                baseSkill: '20% +5% per level of experience.'
            };

        character.abilities.crossCountryPacing =
            {
                name: `Cross-Country Pacing`,
                description: `Wilderness Scouts are known for pacing themselves for cross-country travel. This not only includes pacing their physical exertion and speed, but also pacing their food and water in-take, enabling them to cover great distances on foot, horseback or by mountain bicycle for maximum speed at a pace that can be maintained for days. This skill combined with Land Navigation also enables them to accurately predict how long a trip will take (for them alone or with others in tow - the latter always taking twice as long) within 2D6x10 minutes, 6D6 hours if unfamiliar with the area. 
This makes the Wilderness Scout an excellent messenger between parties, able to cut across country avoiding roads and other well trafficked areas, in favor of little known back roads, hunting trails, water-ways and short cuts, often ensuring secrecy and safety for the travel. (Note: A Scout never reveals his most secret and favorite routes to clients or strangers accompanying him unless it is an absolute emergency.) These guys come and go without anyone knowing how, when or where they've been. Once a Scout travels out of sight, he seems to simply vanish into the wilderness. 
On a bicycle, this skill enables the Wilderness Scout to achieve three times his running speed on level ground, and travel cross-country at twice normal running speed. They can maintain this maximum bike speed for a time equal to their P.E.x10 in minutes without overexerting themselves. On foot, this skill enables the character to move at full run-ning speed cross-country for a time equal to his P.E.x5 in minutes with-out overexerting himself.`,
                type: 'Occupational',
                baseSkill: '35% +5% per level of experience.'
            };

        character.abilities.cartography =
            {
                name: `Cartography`,
                description: `The specialized art of mapmaking, Cartography is one of the most important skills that a Wilderness Scout learns. Characters with this skill can produce highly accurate maps with a wide variety of tools, including pen and paper, computer plotting and even advanced holographic displays. (Computer mapping requires a character to ha e the Computer Operation skill.) 
The cartography skill also includes the rudiments of mathematics. A character with the Cartography skill has the equivalent of the Basic Math skill at a fixed base of 50%, plus any applicable bonus for an exceptional I.Q. attribute, or provides a bonus of +5% to Math: Basic if it is also selected as an O.C.C. Related Skill.`,
                note: `A successful roll means the map is not only accurate and easy to use, but elegant and aesthetically pleasing. A failed roll indicates that some details are wrong, other details have been left out, and the scale and specified locations are off by 1D10 miles.`,
                type: 'Occupational',
                baseSkill: '40% +5% per level of experience.'
            };

        character.abilities.savVsHorror =
            {
                name: `Save vs Horror Factor`,
                type: 'Occupational',
                description: `+ 1 to save vs Horror Factor at levels 2, 4, 6, 9, 12 and 15.`
            };
    }
}

module.exports = WildernessScout;