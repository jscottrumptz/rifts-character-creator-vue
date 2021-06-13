const OCC = require('../OCC');

class RogueScholar extends OCC {
    constructor() {
        super();
        this.name = 'Rogue Scholar';
        this.group = 'Adventurers & Scholars';
        this.occQuote = `    "I will not be silenced. I will not submit. I will find the truth and shout it to the world."`;
        this.description = `    The Rogue Scholar may not be quite what you expect. Like the Body Fixer and Rogue Scientist, he or she is frequently a rugged, physically fit explorer and keeper of knowledge. He too is an enemy of the Coalition States and a "traitor to humanity," but is ranked at the top of the list. Also known as truth seekers, Rogue Scholars dig through facts and information to find and reveal the truth on all subject matters. This makes them outspoken opponents of the Coalition States ("rebels" ac-cording the CS). Far worse, and making them far more dangerous than other men of science, Rogue Scholars teach the illiterate masses and D-Bees the truths they know as well as mathematics, reading and writing. Rogue Scholars love ideas and try to instill in everyone they encounter such virtues as keeping an open mind, being curious, asking questions, freedom of speech and expression, tolerance to new ideas and cultures, and seeking wisdom and truth. These things make the Scholar the most dangerous of the Rogues. Science is confusing and intimidating to most people, medicine and cybernetics a rare talent and beyond the average person's grasp, but the Rogue Scholar is just an ordinary person armed with words and ideas anyone can understand. They connect with people on a visceral level and are identified with as one of their own. To give their words even greater impact and validity, Rogue Scholars frequently possess forbidden artifacts from the past. Terrible objects such as books, photographs, artwork, recordings, film, and other things that reflect the ideology and goals from the vaunted ''Golden Age of Man." And Erin Tarn stands as the figurehead of all that is good about this profession and their quest for truth (making her CS Public Enemy Number One).
    Simply instilling uneducated people with curiosity and teaching them how to read for themselves undermines the Coalition's carefully executed plan to keep its citizens and backwoods people illiterate, un-educated, and complacent. A curious mind will always ask questions and ultimately challenge the authority before it when those questions are not satisfactorily answered. Something the powers-that-be dislike. 
    Though they would never admit it, the Coalition leaders respect the scholars and scientists who dare to pursue and teach knowledge and truth, knowing full well that it may cost them their lives. The Coalition also recognizes that these men and women may have uncovered knowledge that could be vital to the CS. Remember, while the Coalition States promotes ignorance among its citizens, its political network, military elite, and own scientists are extremely well educated. As a rule, rogues are captured and interrogated. A cooperative individual who comes to sincerely realize that he was "misguided" and his actions potentially detrimental to (the Coalition's) human civilization may be released or asked to join the CS as one of their operatives (though prob-ably never a full citizen). Those too independent to accept such an offer or too stubborn to share anything with the CS will be imprisoned for ID6x 10 years. The most notorious and defiant rogues will have their knowledge painfully extracted during a period of imprisonment that could be a matter of weeks or years, before being executed as terrorists. 
    Rogue Scholars tend to be charismatic, socially adept, clever, resourceful, and given to thinking before they act. This can make for the beginnings of a good strategist, tactician, and diplomat as well as motivational speaker and teacher. Notorious collectors, Rogue Scholars adore books, artwork, film, television, and mementoes from the past. Consequently, they often accumulate large collections of new, reprinted and pre-Rifts books, video discs, art, statues, nicknacks, and artifacts from bottle caps and silverware to pop culture and technology. True pre-Rifts artifacts may be worth hundreds to thousands of credits on the Black Market, and a death sentence if apprehended by Coalition forces. The problem is that the scholar can seldom bear to sell the precious items and his hideout will be filled with them. Ah, the price of knowledge and art.
    
(see Rifts® Ultimate Edition pg. 93 for more information)`;
        this.image = 'assets/images/occ/RogueScholar.jpg';
        this.raceDesc = `None; at least 40% are D-Bees.`;
        this.alignment = `Any, but tends to be Good or Unprincipled.`;
        this.reqIq = 10;
        this.reqMa = 10;
        this.recommendedAttributes = `*( a high M.E. is helpful but not mandatory. )`;
        this.iqBonus = { bonus: 1 };
        this.maBonus = { bonus: 2 };
        this.perceptionBonus = { bonus: 5 };
        this.sdc = { sides: 6, amount: 2 };
        this.credits = { sides: 6, amount: 2, multiplier: 100 };
        this.blackMarketItems = { sides: 6, amount: 3, multiplier: 1000 };

        this.occSkillsList = `Literacy: Native Language (+50%)
Literacy: Other: Three of choice (+30%)
Language: Speaks Native Language at 98%
Language: Other: Two of choice (+25%)
Appraise Goods (+20%)
Basic Math (+25%)
Computer Operation (+20%)
Computer Programming (+15%)
Creative Writing (+15%)
Find Contraband (+15%)
History: Pre-Rifts (+22%)
History: Post-Apocalypse (+20%)
Public Speaking (+20%)
Research (+30%)
Pilot: Automobile or Hover Vehicle (+10%)
W.P. Ancient: One of choice.
W.P. Energy Pistol or Energy Rifle or any S.D.C. firearm.
Hand to Hand combat can be selected as an "O.C.C. Related" skill as follows: Basic counts as one skill selection, Expert as two, or Martial Arts as four.`;
        this.occRelatedSkillsList = `Select 11 other skills, but at least four must be selected from Technical. Plus select two additional skills at levels 3, 6, 9 and 12. All new skills start at level one proficiency.
Communications: Any (+10%).
Cowboy: None.
Domestic: Any (+10%).
Electrical: Basic Electronics and Computer Repair only (+5%).
Espionage: Forgery and Intelligence only.
Horsemanship: General only.
Mechanical: Basic Mechanics and Automotive Mechanics only
(+5%).
Medical: First Aid only (+10%).
Military: Naval History, NBC Warfare and Recognize Weapon Quality only.
Physical: Any, except Acrobatics, Gymnastics, Kick Boxing and
Wrestling.
Pilot: Any (+5%); excluding military, power armor and ' bots.
Pilot Related: Any (+10%).
Rogue: Any (+10% to Computer Hacking only).
Science: Any (+10%).
Technical: Any (+15%).
W.P.:  Any, excluding Military and Heavy Energy Weapons.
Wilderness: Any (+5%).`;
        this.secondarySkillsList = `Select three Secondary Skills from the Secondary Skills List in the Skill Section at first level, +1 at levels 2, 5 8, 12, and 15. These are additional areas of knowledge that do not get any bonuses, other than any possible bonus for having a high I.Q. All Secondary Skills start at the base skill level.`;
        this.cyberneticsDesc = `Starts with none. May or may not be opposed to cybernetics and bionics.`;
        this.equipmentDesc = `A suit of light M.D.C. body armor (never uses heavy), one weapon for each W.P. (if any), set of traveling and a set of dress clothes, portable compact disc recorder/player (CD that plays three and one inch audio discs) and headphones, video disc player (also plays one and three inch audio and video discs), digital camera (100 still photos and up to 30 minutes of video per video disc, triple the number of still photos if no video is used), portable language translator, two pocket notebooks, sketch pad or blank pa-per, a dozen pencils and markers, old-fashions dip pen and ink, magnifying glass, normal binoculars, hat, survival knife, bedroll, knapsack, backpack, carrying case for artifacts, extra pack or sack for books, a long-range radio, some personal items and a commercial vehicle that fits the character's Piloting skill; non-military type. Often a hover truck, or conventional, rough terrain pickup truck or jeep.`;
        this.abilitiesDesc = `Storyteller & Teacher
Rogue Scholars are natural born story-tellers and educators with a flair for making dry subjects like history, science and math sound exciting and fun. A passion that enables them to teach others over a period of time (equal to a Secondary Skill after 1D6+8 weeks of lessons; with at least 12 hours a week devoted to the teaching and another 10 hours of study by the student).

Find Books and Historical Artifacts
+20% to Find Contraband related to books, art, film and pre-Rifts artifacts in general. This bonus is added to the character's normal Find Contraband skill whenever such items are sought. Gets these items at a discount - 40% off list price as a professional courtesy from most other Rogue Scholars and Scientists and others who value knowledge and history. A 50% dis-count from the Black Market if he trades at least 24 hours of his time to work for them doing bookkeeping, translating text/books, transcribing passages, authenticating inventory acquired from adventurers and other sources, teaching, and other work applicable to the brainy character. Every 24 hours he puts in, he can get up to 30,000 credits worth of books, supplies (paper, notebook, writing or drawing implements, computer, recorder, camera, etc.) or relics and artifacts from the past for half (that's 15,000 credits, his cost). 

Recognize Authenticity
An exclusive skill that enables the Rogue Scholar to tell if an item is a true pre-Rifts artifact, an original edition, a recent facsimile copy (which may be just as good from an in-formation point of view), new or used, defective or incomplete or censored, a forgery, professionally restored, low or high quality, and a fair price.
Base Skill: 58% + 3% per level of experience. 

Professional Restoration
An exclusive skill that enables the Rogue Scholar to patch, repair and touch up books, binding, all paper products, and works of art (excluding 3D items), to improve their appearance and quality and value by 8% per level of experience, provided he makes his skill roll. A failed skill roll means no improvement, wait a week and try again. A second failure means it is beyond his ability to restore.
Base Skill: 58% +3% per level of experience.
Bonuses to Related Skills: + 10% to Art, Calligraphy, Forgery, and Photography.`;
        this.occRelatedNumber = 11;
        this.secondaryNumber = 3;
        this.languages = 2;
        this.literacies = 3;
        this.occSkills = {
            communication: {
                number: 0,
                free: [
                    {
                        name:'languageNativeTongue',
                        base: 98
                    },
                    {
                        name:'literacyNativeTongue',
                        occBonus: 50
                    },
                    {
                        name:'publicSpeaking',
                        occBonus: 20
                    },
                    {
                        name:'creativeWriting',
                        occBonus: 15
                    }
                ],
                choice: [
                    {
                        amount: 5,
                        available: [
                            {
                                name:'languageOther',
                                occBonus: 20
                            },
                            {
                                name:'literacyOther',
                                occBonus: 35
                            }
                        ],
                        unavailable: [
                            {
                                name:'barter'
                            },
                            {
                                name:'radioBasic'
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
                        occBonus: 10
                    }
                ],
                unavailable: [],
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
                available: [
                    {
                        name: 'basicElectronics',
                        occBonus: 5
                    },
                    {
                        name: 'computerRepair',
                        occBonus: 5
                    }
                ],
                unavailable: [
                    {
                        name: 'electricalEngineer'
                    },
                    {
                        name: 'electricityGeneration'
                    },
                    {
                        name: 'robotElectronics'
                    }
                ],
                only:[]
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
                        name: 'forgery'
                    },
                    {
                        name: 'intelligence'
                    }
                ],
                unavailable: [
                    {
                        name: 'detectAmbush'
                    },
                    {
                        name: 'detectConcealment'
                    },
                    {
                        name: 'disguise'
                    },
                    {
                        name: 'escapeArtist'
                    },
                    {
                        name: 'impersonation'
                    },
                    {
                        name: 'interrogation'
                    },
                    {
                        name: 'pickLocksEspionage'
                    },
                    {
                        name: 'pickPocketsEspionage'
                    },
                    {
                        name: 'sniper'
                    },
                    {
                        name: 'trackingHumansAndRobots'
                    },
                    {
                        name: 'undercoverOps'
                    },
                    {
                        name: 'wildernessSurvivalEspionage'
                    }
                ],
                only:[]
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
                        occBonus: 10
                    }
                ]
            },
            military: {
                number: 0,
                free: [
                    {
                        name: 'findContrabandMilitary',
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
                        name: 'navalHistory'
                    },
                    {
                        name: 'recogniseWeaponQuality'
                    },
                    {
                        name: 'nbcWarfare'
                    }
                ],
                unavailable: [
                    {
                        name: 'camouflage'
                    },
                    {
                        name: 'demolitions'
                    },
                    {
                        name: 'demolitionsDisposal'
                    },
                    {
                        name: 'demolitionsUnderwater'
                    },
                    {
                        name: 'fieldArmorerAndMunitions'
                    },
                    {
                        name: 'findContrabandMilitary'
                    },
                    {
                        name: 'forcedMarchMilitary'
                    },
                    {
                        name: 'militaryEtiquette'
                    },
                    {
                        name: 'militaryFortification'
                    },
                    {
                        name: 'navalTactics'
                    },
                    {
                        name: 'parachuting'
                    },
                    {
                        name: 'trapOrMineDetection'
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
                    }
                ],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [
                    {
                        name:'handToHandBasic',
                        skillCost: 1
                    },
                    {
                        name:'handToHandExpert',
                        skillCost: 2
                    },
                    {
                        name:'handToHandMartialArts',
                        skillCost: 4
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
                        name: 'kickBoxing',
                    },
                    {
                        name: 'wrestling',
                    },
                    {
                        name: 'handToHandCommando',
                    },
                    {
                        name:'handToHandAssassin',
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
                                name:'automobile',
                                occBonus: 10
                            },
                            {
                                name:'hoverCraftGround',
                                occBonus: 10
                            }
                        ],
                        unavailable: [
                            {
                                name: 'airplane'
                            },
                            {
                                name: 'bicycling'
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
                                name: 'combatDriving'
                            },
                            {
                                name: 'flightSystemCombat'
                            },
                            {
                                name: 'helicopter'
                            },
                            {
                                name: 'hovercyclesOrSkycyclesOrRocketBikes'
                            },
                            {
                                name: 'jetAircraft'
                            },
                            {
                                name: 'jetPacks'
                            },
                            {
                                name: 'jumpBikeCombat'
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
                                name: 'motorcyclesAndSnowmobiles'
                            },
                            {
                                name: 'robotsAndPowerArmor'
                            },
                            {
                                name: 'robotCombatBasic'
                            },
                            {
                                name: 'robotCombatElite'
                            },
                            {
                                name: 'trackedAndConstructionVehicles'
                            },
                            {
                                name: 'truck'
                            },
                            {
                                name: 'waterScooters'
                            },
                            {
                                name: 'waterSkiingAndSurfing'
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
                        name: 'robotsAndPowerArmor'
                    },
                    {
                        name: 'robotCombatBasic'
                    },
                    {
                        name: 'robotCombatElite'
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
                        name: 'Any',
                        occBonus: 10
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
                        name: 'Any'
                    },
                    {
                        name: 'computerHacking',
                        occBonus: 10
                    }
                ],
                unavailable: [],
                only:[]
            },
            science: {
                number: 0,
                free: [
                    {
                        name: 'mathematicsBasic',
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
            technical: {
                number: 4,
                free: [
                    {
                        name: 'computerOperation',
                        occBonus: 20
                    },
                    {
                        name: 'computerProgramming',
                        occBonus: 15
                    },
                    {
                        name: 'appraiseGoods',
                        occBonus: 20
                    },
                    {
                        name: 'historyPostApocalypse',
                        occBonus: 20
                    },
                    {
                        name: 'historyPreRifts',
                        occBonus: 22
                    },
                    {
                        name: 'research',
                        occBonus: 30
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
                        occBonus: 15
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
                        unavailable: [
                            {
                                name: 'wPPairedWeapons'
                            },
                            {
                                name: 'wPQuickDraw'
                            },
                            {
                                name: 'wPTargeting'
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
                        unavailable: [
                            {
                                name: 'wPHeavyMilitary'
                            },
                            {
                                name: 'wPHeavyMD'
                            },
                            {
                                name: 'wPMilitaryFlamethrowers'
                            },
                            {
                                name: 'wPSharpshooting'
                            }
                        ]
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
                        occBonus: 10
                    }
                ],
                unavailable: [],
                only:[]
            }
        };
        this.occRelatedAtLevel = { levels: [3, 6, 9, 12], amounts: 2 };
        this.secondaryAtLevel = { levels: [2, 5, 8, 12, 15], amounts: 1 };
    }

    rollSecondary(character) {
        // must choose between occ skills
        character.skills.choices = true;

        character.abilities.storytellerAndTeacher =
            {
                name: `Storyteller & Teacher`,
                description: `Rogue Scholars are natural born story-tellers and educators with a flair for making dry subjects like history, science and math sound exciting and fun. A passion that enables them to teach others over a period of time (equal to a Secondary Skill after 1D6+8 weeks of lessons; with at least 12 hours a week devoted to the teaching and another 10 hours of study by the student).`,
                type: 'Occupational'
            };

        character.abilities.findBooksAndHistoricalArtifacts =
            {
                name: `Find Books and Historical Artifacts`,
                description: `+20% to Find Contraband related to books, art, film and pre-Rifts artifacts in general. This bonus is added to the character's normal Find Contraband skill whenever such items are sought. Gets these items at a discount - 40% off list price as a professional courtesy from most other Rogue Scholars and Scientists and others who value knowledge and history. A 50% dis-count from the Black Market if he trades at least 24 hours of his time to work for them doing bookkeeping, translating text/books, transcribing passages, authenticating inventory acquired from adventurers and other sources, teaching, and other work applicable to the brainy character. Every 24 hours he puts in, he can get up to 30,000 credits worth of books, supplies (paper, notebook, writing or drawing implements, computer, recorder, camera, etc.) or relics and artifacts from the past for half (that's 15,000 credits, his cost).`,
                type: 'Occupational',
            };

        character.abilities.recognizeAuthenticity =
            {
                name: `Recognize Authenticity`,
                description: ` An exclusive skill that enables the Rogue Scholar to tell if an item is a true pre-Rifts artifact, an original edition, a recent facsimile copy (which may be just as good from an in-formation point of view), new or used, defective or incomplete or censored, a forgery, professionally restored, low or high quality, and a fair price.`,
                type: 'Occupational',
                baseSkill: "58% + 3% per level of experience."
            };

        character.abilities.professionalRestoration =
            {
                name: `Professional Restoration`,
                description: `An exclusive skill that enables the Rogue Scholar to patch, repair and touch up books, binding, all paper products, and works of art (excluding 3D items), to improve their appearance and quality and value by 8% per level of experience, provided he makes his skill roll. A failed skill roll means no improvement, wait a week and try again. A second failure means it is beyond his ability to restore.`,
                note: `Bonuses to Related Skills: + 10% to Art, Calligraphy, Forgery, and Photography.`,
                type: 'Occupational',
                baseSkill: "58% +3% per level of experience."
            };
    }
}

module.exports = RogueScholar;