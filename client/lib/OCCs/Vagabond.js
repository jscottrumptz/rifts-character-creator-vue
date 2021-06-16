const OCC = require('../OCC');

class Vagabond extends OCC {
    constructor() {
        super();
        this.name = 'Vagabond';
        this.group = 'Adventurers & Scholars';
        this.occQuote = `    "Unskilled? Are you kidding? I'm a student of the world. I know a little bit about everything. Well . . . at least the things that interest me most"`;
        this.description = `    Not everybody who gets involved in adventure is a specialist in combat or some other area of training. Some are just ordinary people who get swept up in the flow of events or decide that it is time they make a change in their Jives. Others are individuals who possess some natural power (psionics or racial ability), but do not have great training or education other than in the use of their powers. These folks tend to take low-end jobs or drift from place to place, and job to job. Vagabonds are the ultimate Bohemians of this group. They actually like the freedom of not being tied down and drifting along from one adventure to the next. They put their trust in fate and make the best of every situation. Vagabonds are laid-back, easygoing and friendly. They like to travel, like meeting new people, like trying new things (even if it's baling hay or chopping wood), and like not having to worry about supporting a family or answering to anybody but themselves. For a Vagabond, each new face is a welcomed encounter, each new place an opportunity for adventure, even if it's on a small, personal scale. "See, I didn't know that," and "oh, how interesting," are words anyone traveling with a Vagabond is likely to hear over and over again. 
    Those who choose the life of a Vagabond are usually spirited individuals full of life and curiosity, but rarely very educated in any formal sense, nor literate, and seldom seek higher education. They tend to live by the seat of their pants and rely on their wits, luck, and the kindness of strangers. Many nomads, wilderness folk, peasants, farmers, Major psychics and mutants are Vagabonds.
            
(seeRifts® Ultimate Edition pg. 97 for more information)`;
        this.image = 'assets/images/occ/Vagabond.jpg';
        this.raceDesc = `None.`;
        this.maBonus = { sides: 4, amount: 1 };
        this.psBonus = { bonus: 1 };
        this.peBonus = { bonus: 2 };
        this.perceptionBonus = { bonus: 4 };
        this.sdc = { sides: 6, amount: 2, bonus: 10 };
        this.possessionBonus = { bonus: 1 };
        this.psionicBonus = { bonus: 1 };
        this.horrorBonus = { bonus: 2 };
        this.credits = { sides: 6, amount: 2, multiplier: 100 };
        this.blackMarketItems = { sides: 6, amount: 2, multiplier: 100 };

        this.occSkillsList = `Language: Native Tongue at 88%. 
Language: Other: Two of choice (+15%). 
Barter (+16%) 
Begging (10%) 
Cook (+15%)
Domestic: Two skills of choice (+15%) on a professional level.
I.D. Undercover Agent (+10%)
Pilot: Automobile (+10%) or Motorcycle (+12%) 
General Repair (+10%) or Horsemanship: General (+5%) 
Radio: Basic (+5%)
Streetwise (+10%) 
W.P. Ancient: One of choice. 
W.P. Energy Pistol or Energy Rifle.
Hand to Hand: Basic, but can be changed to Hand to Hand: Expert at the cost of one "O.C.C. Related Skill," or Martial Arts (or Assassin, if an evil alignment) for the cost of two.`;
        this.occRelatedSkillsList = `Select five skills at level one, + 1 at levels 3, 6, 9, and 12. All new skills start at level one proficiency. These selections get the benefit of any bonuses that may be noted below. 
Communications: Any, except Cryptography, Laser Communication, Optic Systems, and Surveillance.
Cowboy: Branding, Breaking Horses, or Herding Cattle only. 
Domestic: Any (+10%).
Electrical: Basic Electronics (+5%) only. 
Espionage: None. 
Horsemanship: General only. 
Mechanical: Basic Mechanics and Automotive only (+5%).
Medical: First Aid only (+5%).
Military: None. 
Physical: Any, except Acrobatics, Gymnastics and Wrestling. 
Pilot: Any (+5%), except Jets, Ships, Power Armor, Robots and Military vehicles.
Pilot Related: Any.
Rogue: Any (+4%). 
Science: Astronomy & Navigation, and Mathematics only (+5%). 
Technical: Any (+5%). 
W.P.: Any, except any Military or Heavy Weapons. 
Wilderness: Any.`;
        this.secondarySkillsList = `Eight Secondary Skills at first level, + 1 additional Secondary Skill at levels 3, 5, 7, 9, 11 and 13. Selections are made from the list of Secondary Skills in the Skill Section. These are additional areas of knowledge that do not get any bonuses, other than any possible bonus for having a high I.Q. All Secondary Skills start at the base skill level.`;
        this.cyberneticsDesc = `None to start. May purchase implants later, if desired.`
        this.equipmentDesc = `Suit of light or medium M.D.C. body armor (looks beaten and battered), the clothes on his back and an extra set baseball cap, jacket or coat, knife, gun with one extra clip of ammo'. flashlight, backpack, sleeping bag, small duffle bag, wallet with 1.D., a couple bandages, pack of aspirin, comb, toothbrush and paste, a bar of soap, several pieces of candy, a sturdy plastic bag for extra stuff, canteen, a pair of sunglasses, and an old, rusty junker of a car or motorcycle or a basic horse.`;
        this.abilitiesDesc = `Eyeball a Fella
The character knows people so well that he casually size up a person just by observing him or her for a few minute r Can discern the following about the person: Educated or not, rich or poor, works hard or works at a desk for a living, from what part of the country the person originates, artist or skilled laborer or management, currently flush with money or operating on a budget, if the person is being honest and genuine or lying or putting on airs, happy or discontented, being genuinely friendly or looking to get something outta the exchange (e.g. looking for information, a good deal, a particular person, food, etc.).
Base Skill: 56% +3% per level of experience. 
Bonuses: Adds a bonus of +10% to the skills Barter, Cardsharp, Gambling, I.D. Undercover Agent, Research (by talking to people), and Seduction.`;
        this.alignment = `Any, but 70% seem to be Unprincipled or Anarchist.`;
        this.startingHandToHand = 'handToHandBasic';
        this.occRelatedNumber = 5;
        this.secondaryNumber = 8;
        this.languages = 2;
        this.literacies = 0;
        this.occSkills = {
            communication: {
                number: 0,
                free: [
                    {
                        name:'languageNativeTongue',
                        base: 88
                    },
                    {
                        name:'barter',
                        occBonus: 16
                    },
                    {
                        name:'radioBasic',
                        occBonus: 5
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
                        name: 'Any',
                    }
                ],
                unavailable: [
                    {
                        name: 'cryptography'
                    },
                    {
                        name: 'laser'
                    },
                    {
                        name: 'opticSystems'
                    },
                    {
                        name: 'surveillance'
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
                        name: 'horsemanshipCowboyCowboy'
                    },
                    {
                        name: 'horsemanshipExoticAnimalsCowboy'
                    },
                    {
                        name: 'loreAmericanIndiansCowboy'
                    },
                    {
                        name: 'loreCattleOrAnimals'
                    },
                    {
                        name: 'roping'
                    },
                    {
                        name: 'trickRiding'
                    },
                    {
                        name: 'wPRopeCowboy'
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
                    }
                ],
                choice: [
                    {
                        amount: 2,
                        available: [
                            {
                                name: 'Any',
                                occBonus: 15
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
                unavailable: [
                    {
                        name: 'All'
                    }
                ],
                only:[]
            },
            horsemanship: {
                number: 0,
                free: [
                    {
                        name: 'horsemanshipGeneral',
                        occBonus: 5
                    }
                ],
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
                        name: 'automotiveMechanics',
                        occBonus: 5
                    },
                    {
                        name: 'basicMechanics',
                        occBonus: 5
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
                        name: 'firstAid',
                        occBonus: 5
                    }
                ]
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
                        name: 'handToHandBasic',
                        skillCost: 0
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
                        occBonus: 5
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
                        name: 'gymnastics',
                    },
                    {
                        name: 'wrestling',
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
                                occBonus: 12
                            },
                            {
                                name: 'automobile',
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
                unavailable: [
                    {
                        name: 'airplane'
                    },
                    {
                        name: 'boatsMotorAndHydrofoils'
                    },
                    {
                        name: 'boatsPaddleTypes'
                    },
                    {
                        name: 'boatsSailTypes'
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
                        name: 'waterScooters'
                    },
                    {
                        name: 'waterSkiingAndSurfing'
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
                free: [
                    {
                        name: 'streetwise',
                        occBonus: 10
                    },
                    {
                        name: 'iDUndercoverAgents',
                        occBonus: 10
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
                        occBonus: 4
                    }
                ],
                unavailable: [],
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
                available: [

                    {
                        name: 'astronomyAndNavigation',
                        occBonus: 5
                    },
                    {
                        name: 'mathematicsBasic',
                        occBonus: 5
                    },
                    {
                        name: 'mathematicsAdvanced',
                        occBonus: 5
                    }
                ],
                unavailable: [
                    {
                        name: 'anthropology'
                    },
                    {
                        name: 'archaeology'
                    },
                    {
                        name: 'artificialIntelligence'
                    },
                    {
                        name: 'astrophysics'
                    },
                    {
                        name: 'biology'
                    },
                    {
                        name: 'botany'
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
                free: [
                    {
                        name: 'generalRepairAndMaintenance',
                        occBonus: 10
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
                        occBonus: 5
                    }
                ],
                unavailable: [],
                only:[]
            },
            weaponProficienciesAncient: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 1,
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
                        amount: 1,
                        or: [
                            {
                                name: 'wPEnergyPistol'
                            },
                            {
                                name: 'wPEnergyRifle'
                            }
                        ],
                        unavailable: []
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
                        name: 'Any'
                    }
                ],
                unavailable: [],
                only:[]
            }
        };
        this.occRelatedAtLevel = { levels: [3, 6, 9, 12], amounts: 1 };
        this.secondaryAtLevel = { levels: [3, 5, 7, 9, 11, 13], amounts: 1 };
    }

    rollSecondary(character) {
        // must choose between occ skills
        character.skills.choices = true;
        character.abilities.eyeballAFella =
            {
                name: `Eyeball a Fella`,
                description: `few minute r Can discern the following about the person: Educated or not, rich or poor, works hard or works at a desk for a living, from what part of the country the person originates, artist or skilled laborer or management, currently flush with money or operating on a budget, if the person is being honest and genuine or lying or putting on airs, happy or discontented, being genuinely friendly or looking to get something outta the exchange (e.g. looking for information, a good deal, a particular person, food, etc.).`,
                note: `Adds a bonus of +10% to the skills Barter, Cardsharp, Gambling, I.D. Undercover Agent, Research (by talking to people), and Seduction.`,
                type: 'Occupational',
                baseSkill: "56% +3% per level of experience."
            };
    }
}

module.exports = Vagabond;