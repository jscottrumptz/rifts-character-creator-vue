const OCC = require('../OCC');

class Operator extends OCC {
    constructor() {
        super();
        this.name = 'Operator';
        this.group = 'Adventurers & Scholars';
        this.occQuote = `    "What can I say, I like taking things apart to see how they tick. Nothin' like fixing or building something with your own hands."`;
        this.description = `    The Operator is a super-mechanic and repairman. A mechanical and electrical whiz-kid who can fix just about anything that has gears and wires. As such, they are always a welcome sight in any community and are treated with respect and admiration. An Operator rarely has to pay for his own meals or a bed to lay on. Of course, the proprietor or town council may have some little repair job that they'd like him to do for a reasonable fee. There are no set fees for a particular job, so the fee and currency changes from place to place. Repairing an irrigation system at a wealthy town may mean 30,000 in credits, at a poor town payment may be a hot meal, a broken-down horse, and some basic supplies.
Remember, while pre-Rifts machines and technology are in use, there are few individuals who fully understand how they work. Consequently, they cannot successfully maintain and repair them. The Coalition charges highly for their services. Often the price includes an oath of fealty to a Coalition State, binding the community to it financially and obligating the town to perform certain services, or provide goods, or to support the CS. This is how the Coalition increases its power base and territory, slowly absorbing the smaller communities around them. The next step is official union with a Coalition State, usually in ex-change for military protection, economic support, even better technical aid, and forgiving one's previous debt. Of course, once this happens, the Coalition sends in its advisors and makes the town conform to its standards, rooting out magic users, seizing all books and historical documents, and eliminating dangerous dissidents. Consequently, the Operator represents the only means for many small communities to maintain their independence. They are also the only people outlaws and undesirables, like adventurers and men at arms, can consult to get their gear, 'bots and vehicles repaired, modified or improved. 
Although the Operators have no formal organization or guild, they are an unofficial class within the civilized human societies of the Americas, similar to the Freemasons of old. They have no leader, no gathering place, nor doctrine to which all Operators adhere. Instead, they are a loose knit group of like-minded men and women who share a love and knowledge of machines and forgotten science. How Operators came to be is not exactly known. Most will tell you that some of those who survived the Coming of the Rifts also saved many of the old secrets. These secrets were handed down from father to son, generation to generation, until today. Indeed, if there is any common thread among Operators, it is secrecy. They will not share their knowledge with any-body except a fellow Operator, relative, or an apprentice. 
As a rule, an Operator tends to disguise the extent of his knowledge with false modesty and cryptic talk about the Time of Man or Time Be-fore the Rifts, and ancient secrets. In reality, the character is as knowledgeable about modern, high-tech engineering as any Coalition engineer. Furthermore, their love of mechanics keeps them looking and learning more. These characters love their work and take fanatical pride in their craft. They are hard workers, inventive, and resourceful.

(see Rifts® Ultimate Edition pg. 91 for more information)`;
        this.image = 'assets/images/occ/Operator.jpg';
        this.raceDesc = `None. At least 35% are D-Bees.`;
        this.reqIq = 9;
        this.recommendedAttributes = `*( a high P.P. and P.S. are handy but not mandatory. )`;
        this.iqBonus = { bonus: 1 };
        this.psBonus = { bonus: 2 };
        this.ppBonus = { bonus: 1 };
        this.diseaseBonus = { bonus: 2 };
        this.fatigueBonus = { bonus: 2 };
        this.sdc = { sides: 6, amount: 2, bonus: 6 };
        this.credits = { sides: 4, amount: 4, multiplier: 1000 };

        this.occSkillsList = `Language: Native Tongue at 92%. 
Language: Other: One of choice (+20%). 
Basic Math (+20%) 
Computer Operation (+10%) 
Computer Repair(+10%) 
Electrical Engineer (+20%) 
Find Contraband(+15%) 
Jury-Rig (+20%) 
Mechanical Engineer (+20%) 
Pilot: Three of choice (+15%) 
Radio: Basic (+15%) 
Sensory Equipment (+20%) 
Weapons Engineer(+ 15%) 
W.P. Blunt 
W.P. Modern: One of choice. 
Hand to Hand: Basic; can be changed to Hand to Hand: Expert at the cost of one "O.C.C. Related Skill," or Martial Arts ( or Assassin, if an evil alignment) for the cost of two.`;
        this.occRelatedSkillsList = `Select eight other skills, but at least two must be selected from Mechanical, +2 additional skills at levels 3, 6, 9 and 12. All new skills start at level one proficiency. Communications: Any (+15%). 
Cowboy: None. 
Domestic: Any. 
Electrical: Any (+10%). 
Espionage: None. 
Horsemanship: None. 
Mechanical: Any (+10%). 
Medical: First Aid only. 
Military: Any (+5%; +10% to Field Armorer and Military Fortification). 
Physical: Any, except Acrobatics, Gymnastics, or Wrestling(+10% to SCUBA). 
Pilot: Any(+10%). 
Pilot Related: Any(+10%). 
Rogue: Computer Hacking, Lock Picking, and Roadwise only (+15%). 
Science: Math: Advanced, Chemistry, and Chemistry: Analytical only(+5%). 
Technical: Any (+10%). 
W.P.: Any. 
Wilderness: Boat Building and Carpentry (+5%) only.`;
        this.secondarySkillsList = `Select four Secondary Skills at first level from the Secondary Skills list in the Skill Section, +1 Secondary Skill at levels 4, 8, 12 and 14. These are additional areas of knowledge that do not get any bonuses, other than any possible bonus for having a high l.Q. All Secondary Skills start at the base level skill.`;
        this.psionicsDesc = `Optional - Psi-Operator (special)
It has recently come to light that some Operators have developed a degree of psychic power that helps them in their work. Approximately 15% to 20% are psychic. The focus of their psychic abilities is mechanics. Note that all Psi-Operators are considered to be Major psychics. Pick three abilities from the following, plus one additional at levels 4, 8, and 12. Note: Reduce the number of available O.C.C. Related Skills by half.
Electrokinesis (Super, varies; counts as 2 selections). 
Machine Ghost (12) 
Object Read (6; limited to the history and operation of the device). Resist Fatigue (4) 
Sense Magic (3) 
Sense Time (2) 
Speed Reading (2)
Total Recall (2) 
Telemechanics (Super, 10) 
Telemechanic Mental Operation (Super, 12; counts as 2 selections). Telemechanic Paralysis (Super, 20; counts as 2 selections).`;
        this.cyberneticsDesc = `The City Rat Archetype starts with 1D4+2 basic cybernetic implants. It is entirely up to the player to decide whether his or her character has any implants, and if so, which ones. This initial implant selection is restricted to common, Commercial, and Black Market cybernetics. Exactly how much cybernetics a City Rat may acquire depends on the individual and his success on the street (i.e., what can he afford). See Rifts® Bionic Sourcebook for a large selection of cybernetics and B lack Market offerings.`;
        this.equipmentDesc = `None to start. However, many Operators do acquire cybernetic optics, sensors and tools to help them in their work. The majority prefer to use machines in their work, not to become a machine themselves.`;
        this.abilitiesDesc = `Note: None of these abilities apply to bionics or cybernetics (can't do it), and there is a -20% skill penalty when working on robots and power armor (unless the character also has the Robot Mechanics and Electronics skills). 

Jury-Rig Repairs
The Operator can slap together solid temporary repairs in half the time that last twice as long. See the Jury-Rig skill for details.

Find Parts and Components
+20% to Find Contraband related to vehicular M.D. weapons, M.D.C. materials, power supplies, communications systems, electronics, generators, fuel, mechanical parts and components. This bonus is added to his normal Find Contraband skill whenever such items are involved. Gets these items at a discount -30% off as a professional courtesy from most other Operators and the Black Market, 50% discount from junkyards and salvage companies, and a 65% discount if he trades at least 12 hours of his time to work at a garage, machine shop, or factory for free. Every 12 hours he puts in, he can get up to I 00,000 credits worth of parts or materials at the dis-count (that's 35,000 credits, his cost). 

Recognize Machine Quality
An exclusive skill that enables the Operator to tell if an item is new or used, defective, rebuilt, low or high quality, a fair price, and whether it's exactly what he needs or not. Skill applies to all most vehicles, machines, parts, tools, and electronics. Base Skill: 58% + 3% per level of experience.

Repair and Soup-Up Machines & Vehicles
Repairs for Cheap: Can completely repair most parts, machines and vehicles at a cost of 25% of its original list price (plus his time if he's charging for it; typically another 30% to 50%). Requires the right parts and time to make the repair. 
Replace M.D.C.: on the main body and key sections at a cost of 1200 credits per every one M.D.C. point restored. Cannot exceed the original M.D.C. amount.
Add M.D.C.: to brand new vehicles and body armor. The percentage increase depends on the Operator's level of skill and experience; +5% at levels 2, 4, 6, 8, 10, 12, and 14. 
Maximize Performance: Can tweak a vehicle or most any machine to perform better. Can increase Spd 20%, range (of weapons, radio signals, sensors, etc.) by 10%, reduce weight by 10%, and add one extra weapon or feature per each body area of a vehicle or standing fortification (front/nose, mid-section, rear section, top/roof, bottom/undercarriage, and wing).`;
        this.alignment = `Any.`
        this.startingHandToHand = 'handToHandBasic';
        this.occRelatedNumber = 8;
        this.secondaryNumber = 4;
        this.languages = 1;
        this.literacies = 0;
        this.occSkills = {
            communication: {
                number: 0,
                free: [
                    {
                        name:'languageNativeTongue',
                        base: 92
                    },
                    {
                        name:'radioBasic',
                        occBonus: 15
                    },
                    {
                        name:'sensoryEquipmentCommunication',
                        occBonus: 20
                    }
                ],
                choice: [
                    {
                        amount: 1,
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
                        occBonus: 15
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
                    name: 'Any'
                    }
                ],
                unavailable: [],
                only:[]
            },
            electrical: {
                number: 0,
                free: [
                    {
                        name: 'computerRepair',
                        occBonus: 10
                    },
                    {
                        name: 'electricalEngineer',
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
            mechanical: {
                number: 2,
                free: [
                    {
                        name: 'mechanicalEngineer',
                        occBonus: 20
                    },
                    {
                        name: 'weaponsEngineer',
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
                        name: 'firstAid'
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
                        name: 'Any',
                        occBonus: 5
                    },
                    {
                        name: 'fieldArmorerAndMunitions',
                        occBonus: 10
                    },
                    {
                        name: 'militaryFortification',
                        occBonus: 10
                    }
                ],
                unavailable: [],
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
                    },
                    {
                        name: 'sCUBA',
                        occBonus: 10
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
                        amount: 3,
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
                        name: 'computerHacking',
                        occBonus: 15
                    },
                    {
                        name: 'pickLocksRogue',
                        occBonus: 15
                    },
                    {
                        name: 'roadwise',
                        occBonus: 15
                    }
                ],
                unavailable: [
                    {
                        name: 'cardsharp'
                    },
                    {
                        name: 'concealment'
                    },
                    {
                        name: 'findContrabandRogue'
                    },
                    {
                        name: 'gamblingStandard'
                    },
                    {
                        name: 'gamblingDirtyTricks'
                    },
                    {
                        name: 'iDUndercoverAgents'
                    },
                    {
                        name: 'imitateVoicesAndSounds'
                    },
                    {
                        name: 'palming'
                    },
                    {
                        name: 'pickPocketsRogue'
                    },
                    {
                        name: 'prowlRogue'
                    },
                    {
                        name: 'safeCracking'
                    },
                    {
                        name: 'seduction'
                    },
                    {
                        name: 'streetwise'
                    },
                    {
                        name: 'tailing'
                    }
                ],
                only:[]
            },
            science: {
                number: 0,
                free: [
                    {
                        name: 'mathematicsBasic',
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
                        name: 'mathematicsAdvanced',
                        occBonus: 5
                    },
                    {
                        name: 'chemistry',
                        occBonus: 5
                    },
                    {
                        name: 'chemistryAnalytical',
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
                        name: 'astronomyAndNavigation'
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
                        name: 'computerOperation',
                        occBonus: 10
                    },
                    {
                        name: 'juryRig',
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
            weaponProficienciesAncient: {
                number: 0,
                free: [
                    {
                        name: 'wPBlunt'
                    }
                ],
                choice: [
                    {
                        amount: 0,
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
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [
                    {
                        name: 'boatBuilding',
                        occBonus: 5
                    },
                    {
                        name: 'carpentry',
                        occBonus: 5
                    }
                ],
                unavailable: [
                    {
                        name: 'dowsing'
                    },
                    {
                        name: 'fasting'
                    },
                    {
                        name: 'hunting'
                    },
                    {
                        name: 'identifyPlantsAndFruits'
                    },
                    {
                        name: 'landNavigation'
                    },
                    {
                        name: 'preserveFood'
                    },
                    {
                        name: 'skinAndPrepareAnimalHides'
                    },
                    {
                        name: 'spelunking'
                    },
                    {
                        name: 'trackAndTrapAnimals'
                    },
                    {
                        name: 'wildernessSurvivalWilderness'
                    }
                ],
                only:[]
            }
        };
        this.occRelatedAtLevel = { levels: [3, 6, 9, 12], amounts: 2 };
        this.secondaryAtLevel = { levels: [4, 8, 12, 14], amounts: 1 };
    }

    rollSecondary(character) {
        // must choose between occ skills
        character.skills.choices = true;

        character.abilities.note =
            {
                name: `Note:`,
                description: `None of these abilities apply to bionics or cybernetics (can't do it), and there is a -20% skill penalty when working on robots and power armor (unless the character also has the Robot Mechanics and Electronics skills).`,
                type: 'Occupational'
            };

        character.abilities.juryRigRepairs =
            {
                name: `Jury-Rig Repairs`,
                description: `The Operator can slap together solid temporary repairs in half the time that last twice as long. See the Jury-Rig skill for details.`,
                type: 'Occupational'
            };

        character.abilities.findPartsAndComponents =
            {
                name: `Find Parts and Components`,
                description: `+20% to Find Contraband related to vehicular M.D. weapons, M.D.C. materials, power supplies, communications systems, electronics, generators, fuel, mechanical parts and components. This bonus is added to his normal Find Contraband skill whenever such items are involved. Gets these items at a discount -30% off as a professional courtesy from most other Operators and the Black Market, 50% discount from junkyards and salvage companies, and a 65% discount if he trades at least 12 hours of his time to work at a garage, machine shop, or factory for free. Every 12 hours he puts in, he can get up to I 00,000 credits worth of parts or materials at the dis-count (that's 35,000 credits, his cost).`,
                type: 'Occupational'
            };

        character.abilities.recognizeMachineQuality =
            {
                name: `Recognize Machine Quality`,
                description: `An exclusive skill that enables the Operator to tell if an item is new or used, defective, rebuilt, low or high quality, a fair price, and whether it's exactly what he needs or not. Skill applies to all most vehicles, machines, parts, tools, and electronics. Base Skill: 58% + 3% per level of experience.`,
                type: 'Occupational',
                baseSkill: "58% + 3% per lvl"
            };

        character.abilities.repairAndSoupUpMachinesAndVehicles =
            {
                name: `Repair and Soup-Up Machines & Vehicles`,
                description: `Repairs for Cheap: Can completely repair most parts, machines and vehicles at a cost of 25% of its original list price (plus his time if he's charging for it; typically another 30% to 50%). Requires the right parts and time to make the repair. 

Replace M.D.C.: on the main body and key sections at a cost of 1200 credits per every one M.D.C. point restored. Cannot exceed the original M.D.C. amount.

Add M.D.C.: to brand new vehicles and body armor. The percentage increase depends on the Operator's level of skill and experience; +5% at levels 2, 4, 6, 8, 10, 12, and 14. 

Maximize Performance: Can tweak a vehicle or most any machine to perform better. Can increase Spd 20%, range (of weapons, radio signals, sensors, etc.) by 10%, reduce weight by 10%, and add one extra weapon or feature per each body area of a vehicle or standing fortification (front/nose, mid-section, rear section, top/roof, bottom/undercarriage, and wing).`,
                type: 'Occupational'
            };

        character.abilities.optional =
            {
                name: `Optional`,
                description: `Psi-Operator (special): It has recently come to light that some Operators have developed a degree of psychic power that helps them in their work. Approximately 15% to 20% are psychic. The focus of their psychic abilities is mechanics. Note that all Psi-Operators are considered to be Major psychics. Pick three abilities from the following, plus one additional at levels 4, 8, and 12. Note: Reduce the number of available O.C.C. Related Skills by half.
Electrokinesis (Super, varies; counts as 2 selections). 
Machine Ghost (12) 
Object Read (6; limited to the history and operation of the device). Resist Fatigue (4) 
Sense Magic (3) 
Sense Time (2) 
Speed Reading (2)
Total Recall (2) 
Telemechanics (Super, 10) 
Telemechanic Mental Operation (Super, 12; counts as 2 selections). Telemechanic Paralysis (Super, 20; counts as 2 selections).`,
                type: 'Occupational'
            };
    }
}

module.exports = Operator;