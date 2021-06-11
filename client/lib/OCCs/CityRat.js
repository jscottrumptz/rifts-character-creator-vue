const OCC = require('../OCC');

class CityRat extends OCC {
    constructor() {
        super();
        this.name = 'City Rat';
        this.group = 'Adventurers & Scholars';
        this.description = `    "The CS may think they own this place, and adults may run the show, but we 're the Kings and Queens of the streets. We know everything. " 
    City Rats are the denizens of the 'Burbs and big cities. In the fortress cities modeled after Chi-Town, those who live in the lower levels of such a metropolis are generally nicknamed "Downsiders," but "City Rat" is a designation for a Downsider troublemaker and the street urchins who run amok in the 'Burbs. They exist in most urban environments, but absolutely thrive in the ' Burbs and the lower levels, tunnels, and sewers of Chi-Town, Iron Heart and other mega-cities of the Coalition States, the New German Republic, Mexico and Japan. Most have never been beyond the city limits and have no desire to go adventuring beyond the urban sprawl. These are "city people" through and through. They know little about the outside world except what they read or hear on the street, and view it as wondrous, scary, and alien, but most of all, a place not for them. Their world is the rumbling and bustling city streets. Their secret havens, hideouts and lairs are the shadowy dark places that other city dwellers have forgotten about or fear to enter. 
    City Rats love the acrid mix of smells that is the living city: machine oil, vehicle exhaust, booze, and perspiration of the thronging multitudes. They are not afraid of the city's dark comers or its vermin. They know the back streets and, often, the alleys, sewer systems, and access tunnels in the belly of the beast that is the city. And they know them better than the average citizen knows the highways and avenues. 
    City Rats pride themselves on their knowledge of the streets and the movers and shakers who work them and the predators that prowl them. That means City Rats know where to find contraband, cybernetics, drugs, pawnshops, fences, Body-Chop-Shops, Black Market hangouts and hoods, the best food, the cheapest women, all night hot spots, and other places, resources and commodities on the streets. If you know where to look, you can find most anything you could need or want, and City Rats know all the ins and outs of their city. 
    The career of a City Rat is a way of life rather than an occupation. A lifestyle glamorized (and lived) as a sort of swashbuckling streetwise hacker and petty crook who travels the undercurrents of the city streets and the electronic super-highway with equal ease. It is a life of self-made intrigue, exploration, spying and thievery (of data if nothing else). City Rats are usually young men and women in their teens or twenties who walk on the wild side. They crave adventure and find it by bucking the system and dodging the law. A City Rat may be an idealistic rebel who seeks reform and justice in a corrupt and unjust society, or a simple thrill seeker who finds excitement and romance in the dark underbelly of the city and the subculture of the street scene. Many City Rats are computer hackers and information brokers, while others are little more than beggars and thieves, all surviving by the seat of their pants. The individual 's exact orientation and skills typically reflect his alignment, ideals, ethics, and goals.`
        this.image = 'assets/images/occ/CityRat.jpg';
        this.recommendedAttributes = `Generally the City Rat is fast, clever and agile, but there are no real requirements other than an I.Q. 10 or higher to be a hacker, P.P. of 10 or higher to be a thief, I.Q. 10 and P.P. 14 or higher to be an assassin, P. S. of 14 or higher to be a hero or thug/muscle man. `;
        this.spdBonus = { sides: 6, amount: 1, bonus: 1 };
        this.perceptionBonus = { bonus: 3 };
        this.ppe = { sides: 10, amount: 1, bonus: 4 };
        this.sdc = { sides: 4, amount: 2 };
        this.credits = { sides: 6, amount: 6, multiplier: 100 };
        this.blackMarketItems = { sides: 4, amount: 3, multiplier: 1000 };

        this.occSkillsList = `Literate in Native Language (+15%).
Language: Native Tongue at 92%.
Language: Other: One of choice (+10%).
Barter (+15%)
Computer Operation (+15%)
Streetwise (+20%)
Tailing (+20%)
Pilot: Automobile (+10%)
Pilot: Bicycle (+20%)
Pilot: Motorcycle (+15%) or Hovercycle (+10%)
Math: Basic (+10%)
Running
W.P.: One of choice.
Hand to Hand: Basic, which can be changed to Hand to Hand: Expert at the cost of one "O.C.C. Related Skill," or Martial Arts (or Assassin, if an evil alignment) for the cost of two O. C. C. Related Skills.`;
        this.occRelatedSkillsList = `Select 10 other skills, but at least three must be selected from Physical or Rogue skills, + 1 additional skill at levels 2, 4, 6, 9 and 1 2. All new skills start at level one proficiency.
Communications: Any (+ 1 0%).
Cowboy: None.
Domestic: Any (+5%).
Electrical: Basic and Computer Repair only (+5%).
Espionage: None.
Horsemanship: None.
Mechanical: Automotive and Basic Mechanics only (+ 10%).
Medical: First Aid or Paramedic (+ 10%), but the Paramedic skill
counts as two skill selections.
Military: None.
Physical: Any (+5% where applicable), except Fencing, Forced
March, Outdoorsmanship, and SCUBA.
Pilot: Any ground vehicles, Jet Pack, or Robot Combat Basic
(+ 10%), but no aircraft, boats, power armor, robots, or military vehicles.
Pilot Related: None.
Rogue: Any (+ 15%).
Science: Math: Basic and Advanced and Chemistry only.
Technical: Any (+ 10%).
W.P.: Any, except any Heavy Energy Weapons and military W.P.s.
Wilderness: None.
`;
        this.secondarySkillsList = `Eight Secondary skills from the Secondary Skills List in the Skill Section, + I additional at levels 3, 6, 10 and 15. These are additional areas of knowledge that do not get any bonuses, other than any possible bonus for having a high I.Q. All Secondary Skills start at the base skill level.`;
        this.cyberneticsDesc = `The City Rat Archetype starts with 1D4+2 basic cybernetic implants. It is entirely up to the player to decide whether his or her character has any implants, and if so, which ones. This initial implant selection is restricted to common, Commercial, and Black Market cybernetics. Exactly how much cybernetics a City Rat may acquire depends on the individual and his success on the street (i.e., what can he afford). See Rifts® Bionic Sourcebook for a large selection of cybernetics and B lack Market offerings.`
        this.equipmentDesc = `Two sets of "working colors," one set that is either gang colors or what is considered to be a fashion statement, and one set used for casual wear or disguise. Most City Rats tend toward the color black and leather, chains, high boots, gloves, and sometimes a cape or cloak. He or she also has a fashionable wardrobe of other clothing for play and entertainment located at home or in a tiny apartment in the worst part of town. Mega-Damage body armor can be of any "common" type of light suit, such as M.D.C. homemade armor, Urban Warrior, Plastic Man or Dog Boy riot armor (probably stolen or traded for on the Black Market).
Other equipment includes an S.D.C. knife ( I D6 S.D.C.), handgun (3D6 or 4D6 S. D. C. damage), an M.D. energy pistol (typically does 2D6 or 3D6 M . D . ) and two E-Clips, plus a flashlight, 900 pound (405 kg) test strength nylon cord/rope, a grappling hook, RMK/Robot Medical Kit ("Stitcher"), PDD/Pocket Digital Disc player and recorder, personal items such as wallet, comb, hat, bandana, and similar. The vehicle is a bicycle and a motorcycle ill: a junker of a hovercycle (half M. D. C. and maximum speed is 30% less) as per the applicable Pilot skill.`
        this.abilitiesDesc = `None`
        this.alignment = `Any, but typically Unprincipled, Anarchist, Miscreant or Aberrant.`
        this.startingHandToHand = 'HandToHandBasic',
        this.occRelatedNumber = 10;
        this.secondaryNumber = 8;
        this.languages = 1;
        this.literacies = 0;
        this.totalWP = 1;
        this.occSkills = {
            communication: {
                number: 0,
                free: [
                    {
                        name:'languageNativeTongue',
                        base: 92
                    },
                    {
                        name:'literacyNativeTongue',
                        occBonus: 15
                    },
                    {
                        name:'barter',
                        occBonus: 15
                    }
                ],
                choice: [
                    {
                        amount: 1,
                        available: [
                            {
                                name:'languageOther',
                                occBonus: 10
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
                    occBonus: 5
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
                        name: 'electricalEngineer',
                    },
                    {
                        name: 'electricityGeneration',
                    },
                    {
                        name: 'robotElectronics',
                    },
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
                        occBonus: 10
                    },
                    {
                        name: 'basicMechanics',
                        occBonus: 10
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
                available: [
                    {
                        name: 'firstAid',
                        occBonus: 10
                    },
                    {
                        name: 'paramedic',
                        occBonus: 10,
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
                        name: 'holisticMedicine'
                    },
                    {
                        name: 'medicalDoctor'
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
                number: 1,
                free: [
                    {
                        name: 'handToHandBasic',
                    },
                    {
                        name: 'running'
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
                        name: 'fencing',
                    },
                    {
                        name: 'forcedMarch',
                    },
                    {
                        name: 'outdoorsmanship',
                    },
                    {
                        name: 'sCUBA',
                    }
                ],
                only:[]
            },
            pilot: {
                number: 0,
                free: [
                    {
                        name: 'automobile',
                        occBonus: 10
                    },
                    {
                        name: 'bicycling',
                        occBonus: 20
                    }
                ],
                choice: [
                    {
                        amount: 1,
                        or: [
                            {
                                name: 'motorcyclesAndSnowmobiles',
                                occBonus: 15
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
                available: [],
                unavailable: [
                    {
                        name: 'All'
                    }
                ],
                only:[]
            },
            rogue: {
                number: 2,
                free: [
                    {
                        name: 'streetwise',
                        occBonus: 20
                    },
                    {
                        name: 'tailing',
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
                        occBonus: 15
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
                        occBonus: 10
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
                        name: 'Computer Operation',
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
            weaponProficienciesAncient: {
                number: 0,
                free: [
                    {
                        name: 'wPKnife'
                    }
                ],
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
                        available: [
                            {
                                name: 'Any'
                            }
                        ],
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
                available: [],
                unavailable: [
                    {
                        name: 'All'
                    }
                ],
                only:[]
            }
        }
        this.occRelatedAtLevel = { levels: [2, 4, 6, 9, 12], amounts: 1 };
        this.secondaryAtLevel = { levels: [3, 6, 9, 10, 15], amounts: 1 };
    }

    rollSecondary(character) {
        // must choose between occ skills
        character.skills.choices = true;
        character.abilities.ability = 'None';
    }
}

module.exports = CityRat;