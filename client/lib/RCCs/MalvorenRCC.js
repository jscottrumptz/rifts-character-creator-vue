const OCC = require('../OCC');

class MalvorenRCC extends OCC {
    constructor() {
        super();
        this.name = 'RCC';
        this.startingHandToHand = 'handToHandMartialArts';
        this.occRelatedNumber = 4;
        this.secondaryNumber = 4;
        this.languages = 0;
        this.literacies = 0;
        this.totalWP = 6;
        this.occSkills = {
            communication: {
                number: 0,
                free: [
                    {
                        name:'languageNativeTongue',
                        occBonus: 30
                    },
                    {
                        name:'literacyNativeTongue',
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
                        name: 'Any'
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
                        name:'All'
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
                available: [],
                unavailable: [
                    {
                        name: 'All'
                    }
                ],
                only:[]
            },
            electrical: {
                number: 0,
                free: [
                    {
                        name: 'basicElectronics',
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
                        name: 'electricalEngineer',
                    },
                    {
                        name: 'computerRepair',
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
                        name: 'Any'
                    }
                ],
                unavailable: [],
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
                available: [

                    {
                        name: 'Any'
                    }
                ],
                unavailable: [],
                only:[]
            },
            mechanical: {
                number: 0,
                free: [
                    {
                        name: 'biowareMechanics'
                    },
                    {
                        name: 'mechanicalEngineer'
                    },
                    {
                        name: 'vehicleArmorer',
                        occBonus: 20
                    },
                    {
                        name: 'weaponsEngineer',
                        occBonus: 50
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
                        occBonus: -5
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
                unavailable: [
                    {
                        name: 'All'
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
                available: [
                    {
                        name: 'Any'
                    }
                ],
                unavailable: [],
                only:[]
            },
            physical: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 1,
                        or: [
                            {
                                name:'handToHandMartialArts',
                                skillCost: 1
                            },
                            {
                                name:'handToHandAssassin',
                                skillCost: 1
                            }
                        ]
                    }
                ],
                available: [
                    {
                        name: 'Any'
                    }
                ],
                unavailable: [
                    {
                        name: 'acrobatics'
                    },
                    {
                        name:'handToHandBasic'
                    },
                    {
                        name:'handToHandExpert'
                    },
                    {
                        name: 'handToHandCommando'
                    },
                    {
                        name: 'noHandToHandSkill'
                    },
                    {
                        name:'handToHandMartialArts'
                    },
                    {
                        name:'handToHandAssassin'
                    }
                ],
                only:[]
            },
            pilot: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 2,
                        available: [
                            {
                                name: 'Any'
                            },
                            {
                                name: 'combatDriving',
                                occBonus: 10
                            },
                            {
                                name: 'flightSystemCombat',
                                occBonus: 10
                            },
                            {
                                name: 'militaryCombatHelicopter',
                                occBonus: 10
                            },
                            {
                                name: 'militaryJetFighter',
                                occBonus: 10
                            },
                            {
                                name: 'militarySubmersibles',
                                occBonus: 10
                            },
                            {
                                name: 'militaryTanksAndApcs',
                                occBonus: 10
                            },
                            {
                                name: 'militaryWarshipsAndPatrolBoats',
                                occBonus: 10
                            },
                            {
                                name: 'robotCombatElite',
                                occBonus: 10
                            },
                            {
                                name: 'robotCombatBasic',
                                occBonus: 10
                            }
                        ]
                    }
                ],
                available: [
                    {
                        name: 'Any'
                    },
                    {
                        name: 'combatDriving',
                        occBonus: 10
                    },
                    {
                        name: 'flightSystemCombat',
                        occBonus: 10
                    },
                    {
                        name: 'militaryCombatHelicopter',
                        occBonus: 10
                    },
                    {
                        name: 'militaryJetFighter',
                        occBonus: 10
                    },
                    {
                        name: 'militarySubmersibles',
                        occBonus: 10
                    },
                    {
                        name: 'militaryTanksAndApcs',
                        occBonus: 10
                    },
                    {
                        name: 'militaryWarshipsAndPatrolBoats',
                        occBonus: 10
                    },
                    {
                        name: 'robotCombatElite',
                        occBonus: 10
                    },
                    {
                        name: 'robotCombatBasic',
                        occBonus: 10
                    }
                ],
                unavailable: [],
                only:[]
            },
            pilotRelated: {
                number: 0,
                free: [
                    {
                        name: 'sensoryEquipmentPilotRelated',
                        occBonus: 5
                    },
                    {
                        name: 'weaponSystems',
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
                        name: 'Any'
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
                        base: 98
                    },
                    {
                        name: 'mathematicsAdvanced',
                        occBonus: 20
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
                        name: 'mathematicsAdvanced'
                    },
                    {
                        name: 'mathematicsBasic'
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
                available: [],
                unavailable: [
                    {
                        name: 'appraiseGoods'
                    },
                    {
                        name: 'appraiseGoodsSpecialized'
                    },
                    {
                        name: 'art'
                    },
                    {
                        name: 'begging'
                    },
                    {
                        name: 'breedDogs'
                    },
                    {
                        name: 'calligraphy'
                    },
                    {
                        name: 'cyberneticsBasic'
                    },
                    {
                        name: 'excavation'
                    },
                    {
                        name: 'firefighting'
                    },
                    {
                        name: 'gemology'
                    },
                    {
                        name: 'generalRepairAndMaintenance'
                    },
                    {
                        name: 'historyPostApocalypse'
                    },
                    {
                        name: 'historyPreRifts'
                    },
                    {
                        name: 'lawGeneral'
                    },
                    {
                        name: 'leatherWorking'
                    },
                    {
                        name: 'loreAmericanIndiansTechnical'
                    },
                    {
                        name: 'loreCattleAndAnimals'
                    },
                    {
                        name: 'loreDBee'
                    },
                    {
                        name: 'loreDemonsAndMonsters'
                    },
                    {
                        name: 'loreFaerieAndCreaturesOfMagic'
                    },
                    {
                        name: 'loreJuicers'
                    },
                    {
                        name: 'loreMagic'
                    },
                    {
                        name: 'lorePsychicsAndPsionics'
                    },
                    {
                        name: 'masonry'
                    },
                    {
                        name: 'mining'
                    },
                    {
                        name: 'mythology'
                    },
                    {
                        name: 'philosophy'
                    },
                    {
                        name: 'photography'
                    },
                    {
                        name: 'prospecting'
                    },
                    {
                        name: 'recycleTechnical'
                    },
                    {
                        name: 'research'
                    },
                    {
                        name: 'ropeWorks'
                    },
                    {
                        name: 'salvage'
                    },
                    {
                        name: 'ventriloquism'
                    },
                    {
                        name: 'whittlingAndSculpting'
                    }
                ],
                only:[]
            },
            weaponProficienciesAncient: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 6,
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
                        amount: 6,
                        available: [
                            {
                                name: 'Any'
                            }
                        ]
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
                available: [],
                unavailable: [],
                only:[
                    {
                        name: 'landNavigation'
                    }
                ]
            }
        };
        this.occRelatedAtLevel = { levels: [4, 8, 12], amounts: 1 };
        this.secondaryAtLevel = { levels: [3, 9], amounts: 2 };
    }

    rollSecondary(character) {
        // must choose between occ skills
        character.skills.choices = true;
    }
}

module.exports = MalvorenRCC;