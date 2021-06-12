const OCC = require('../OCC');

class CyberDoc extends OCC {
    constructor() {
        super();
        this.name = 'Cyber-Doc';
        this.group = 'Adventurers & Scholars';
        this.occQuote = `    "I can take your broken body and, not only restore it, but turn it into something exceptional. A beautiful work of art made of flesh and steel. Trust me, you'll love the new you."`;
        this.description = `    Thanks to bionics being illegal to the public in the Coalition 'Burbs and many other places, bionic augmentation has gone underground. It is often available only through underworld sources like the Black Market and independent entrepreneurs. In fact, the Black Market dominates the bionics and cybernetics markets, so there are seldom any industry standards for quality. The buyer gets whatever service and quality is available to him at the time. Horror stories abound about bionic Body-Chop-Shops that are more like butcher shops, and give the Cyber-Doc profession a bad reputation. 
    In the broadest sense of the word, a Cyber-Doc is any doctor, surgeon, or scientist who specializes in cybernetics and/or bionics. How-ever, the term "Cyber-Doc" has come to refer to the notorious underworld figure found in the Downside, 'Burbs and underworld of most cities and mercenary outposts. A character who is, all too often, a self-serving illegal doctor who works outside the law for his own profit.
    The Cyber-Doc is a cybernetics specialist who offers his illegal ser-vices on the Black Market, not unlike the old abortion clinics of 1950s and 60s America. The Doc can be well-trained, well-meaning, and professional, or he can be an opportunist and/or a butcher. Since the operations are illegal, the patient has little say about the success or failure of the surgery. Medical treatment and authorized bionics is generally re-served for the military, political leaders, and the wealthy. Comparable cybernetics and bionics for the underprivileged are available at Black Market clinics and are always seem to be in unbelievably high demand. This demand is what has spawned the cut-rate, Black Market clinics known as "Body-Chop-Shops." Filthy, crude facilities operated by the most nefarious underworld malefactors one can find. 
    The proprietors of these "Chop-Shops" pay fair prices (20% to 40% of list) for cybernetics and bionic "parts" and components - no questions asked. This has led to the creation of gruesome criminals known as Cyber-Snatchers. Fiends who attack, and steal bionics and cybernetics, pulling and chopping the artificial limbs or implants out of their victim for resale at a Body-Chop-Shop. Perhaps needless to say, the victim is usually maimed or killed in the process. 
    On the flip side, not all Cyber-Docs are evil or butchers. True professionals are experts in cybernetics and surgical wizards able to blend flesh and machine into something amazing. The Cyber-Doc player character is, presumably, one of the good guys. A healer who uses his unique gifts and knowledge to help the less fortunate and to empower freedom fighters, mercenaries or adventurers with muscles of steel. The Cyber-Doc is versed in all aspects of cybernetics, skin grafting, organ transplant, artificial organ replacement, robot prosthetics, cybernetic implants, and bionics, as well as internal medicine, neurology, and cybernetic theory and mechanics. The focus on cybernetics is surgery and grafting, so the Cyber-Doc is an expert surgeon, but not so good as a general practitioner or in recognizing and treating more mundane disease, illnesses and minor injury (no O.C.C. bonus to Medical Doctor skill). But ask him to replace a lost limb with a bionic one, or a heart or eye, and he can do it in record time with no complications. His expertise in cybernetics means he can also remove and install all forms of cybernetic and bionic devices, as well as work on the machine parts, to service, clean, repair and even build them from scratch, provided he has the right parts and access to the proper facility and equipment; even a Body-Chop-Shop or mechanic's garage will do. 
    A Cyber-Doc is part mechanic, part surgeon and part medical doc-tor. Someone who can help the crippled to walk, the blind to see and maimed to feel whole again. Cyber-Docs who treat D-Bees are black-listed and marked for death as "traitors to humanity" by the Coalition States, just like the Body Fixer. Since he's already a wanted man, many Cyber-Docs deal in stolen Coalition bionics and encourage raids on CS facilities. However, more often than not, the bionics are secondhand (don't ask), acquired from a mere, bandit or adventurer, or as a deal at a Black Market Body-Chop-Shop. Reputable Cyber-Docs often offer their services to the Black Market in exchange for bionics and cybernetics at wholesale prices (50% below list price). 
    A Cyber-Doc may be an independent operative or hooked up with a medical team, mercenary outfit, adventure group, or freelance for a town or army. Like the Body-Fixer, the Cyber-Doc is usually considered a rogue, malcontent and outlaw by the CS. However, to those in the wastelands, the Cyber-Doc (or any man of medicine) is a miracle worker and a godsend. Note: In the aftermath of Tolkeen's fall, Cyber-Docs are in high demand to give the maimed and injured a new lease on life via cybernetic medicine. The Coalition Army knows this, and has made a point to track down rebel field hospitals and gun down all "criminals and rebels consorting with the enemy" along with the D-Bee enemy.`;
        this.image = 'assets/images/occ/CyberDoc.jpg';
        this.raceDesc = `None; about 30% are D-Bees.`;
        this.reqIq = 11;
        this.reqPp = 12;
        this.recommendedAttributes = `*( a high M.E. is also helpful but not mandatory. )`;
        this.meBonus = { bonus: 1 };
        this.ppBonus = { bonus: 2 };
        this.painBonus = { bonus: 2 };
        this.diseaseBonus = { bonus: 1 };
        this.poisonBonus = { bonus: 1 };
        this.drugsBonus = { bonus: 1 };
        this.horrorBonus = { bonus: 4 };
        this.credits = { sides: 6, amount: 4, multiplier: 1000 };

        this.occSkillsList = `Literacy in Native Language (+40%).
Language : Native Tongue at 96%.
Language : Other: One of choice (+20%).
Advanced Mathematics (+10%)
Basic Mathematics (+30%)
Basic Mechanics (+20%)
Basic Electronics (+15%)
Biology (+20%)
Chemistry (+10%)
Computer Operation (+5%)
Find Contraband (+10%)
Medical Doctor
Cybernetic Medicine (+10%)
Pathology (+10%)
W.P. Knife (Special bonus of + 1 to strike).
Hand to Hand combat can be selected as an "O.C.C. Related" skill as follows: Basic counts as one skill selection or Expert as two.`
        this.occRelatedSkillsList = `Select 9 other skills, but at least two must be selected from Technical, +1 additional skill at levels 2, 4, 6, 8, 1 0, 12, and 14. All new skills start at level one proficiency.
Communications: Any, except Cryptography and Performance.
Cowboy : None.
Domestic: Any.
Electrical : Any (+5%).
Espionage : None.
Horsemanship: General only.
Mechanical : Any (+5%; but + 15% to Bioware Mechanics).
Medical : Any (+10%).
Military : None.
Physical : Any, excluding Acrobatics and Wrestling.
Pilot: Any (+5%).
Pilot Related : Any (+10%).
Rogue: Streetwise and Palming only.
Science: Any (+5%).
Technical : Any (+10%).
W.P. : Any.
Wilderness: Hunting and Skin Animals only (+5%).`;
        this.secondarySkillsList = `Four Secondary Skills at first level selected from the Secondary Skills list in the Skill Section, + 1 additional Secondary Skill at levels 3, 6, 9, 1 2 and 1 5 . These are additional areas of knowledge that do not get any bonuses, other than any possible bonus for having a high I.Q. All Secondary Skills start at the base skill level.`;
        this.cyberneticsDesc = `The Cyber-Doc, unlike the Body Fixer, sees cybernetics and 'augmentation of the human body as a good and wondrous thing, and 'is likely to have cybernetic implants and even bionics. Whether the character has cybernetic implants/body parts is left up to the player. If the decision is yes, the Cyber-Doc can select 1D4+2 cybernetic mechanisms (Accessories and Optics & Sensors as described under the Combat 'Borg O.C.C.).`
        this.equipmentDesc = `Light or medium M.D.C. body armor with good flexibility, two surgical gowns, a dozen pair of disposable surgical gloves, one pair of reusable surgical gloves, surgical kit (includes scalpels, clamps, suture, needles, etc.), medical kit (first-aid kit, bandages, antiseptics, protein healing salve, aspirin, painkiller, antibiotics, hypodermic gun, stethoscope, pen flashlight, hand-held blood pressure machine (computerized), thermometer, six unbreakable vials, and other basic items), IRMSS/robot micro-surgeon kit, portable compu-drug dispenser, pocket computer, portable laboratory, backpack, large satchel, one weapon for each W.P. and two E-Clips for each, one Vibro-Knife (1D6 M.D.), a set of six scalpels (1D4 S.D.C. damage each), pocket note pad, two pens, and some personal items.`
        this.abilitiesDesc = `Install Bionics
A Cyber-Doc can install and remove cybernetic implants and bionics, but requires at least a makeshift operating room. Cybernetic implants are fast and easy (no skill penalty), but bionics are very complicated and demanding on the character's time and skill. Penalties: -5% to Cyber-Doc skill to remove bionics or any prosthetic, -5% if working in poor conditions, another -5% if working with inadequate tools, -10% if the bionics are more advanced or a different but comparable technology than what he is familiar with, -20% when dealing with extremely alien physiology and/or alien cybernetics. All penalties are accumulative. A consummate pro, if there is any penalty for working under pressure or on a time limit, it should be reduced by half Taking the M.D. in Cybernetics skill twice eliminates (or reduces by half) most penalties. 

Find Bionics and Cybernetics Contraband
+20% to Find Contraband related to medicine, cybernetics and bionics. This bonus is added to his normal Find Contraband skill whenever cybernetics or bionics are involved. Gets bionics, cybernetics and Bio-Systems at wholesale - 35% discount as professional courtesy at most Body-Chop-Shops and clinics, 50% discount if he trades at least 12 hours of his time to work at the Shop or clinic for free. Every 12 hours he puts in, he can get up to 100,000 credits worth of cyber-gear for half-off (that's 50,000 credits, his cost). 60% discount if the character is the owner or a partner in a Body-Chop-Shop or medical clinic in the Cyber-Doc's own home town/place of residence. 

Recognize Quality of Bionics & Cybernetics
An exclusive skill that enables the Cyber-Doc to tell if an item is new or used, defective, low or high quality, and a fair price. He will automatically know the capability (damage, range, payload, etc.) of bionic weapons and prosthetics (M.D.C., P.S., Speed, etc.) and whether it's exactly what he needs or not. Base Skill: 60% + 3% per level of experience. 

Repair and Soup-Up Bionics
Repairs for Cheap: Can completely repair bionics and cybernetics at a cost of 25% of its original list price (plus his time if he's charging for it; typically another 25%). Re-quires the right parts and ID6+2 hours to work on each item (hand, arm, shoulder, one forearm weapon, then another, etc.). 
Replace M.D.C. on a bionic appendage, main body, and cyber-armor at a cost of 1000 credits per every one M.D.C. point restored. Can-not exceed the original M.D.C. amount. 
Maximize Bionics (not cybernetics). Can tweak bionic systems to get a little more out of them. Can increase Spd 20%, P.S. 10%, increase range 10% (of weapons, transmissions, sensors, etc.), reduce size and weight of a specific item by 10%, and add ONE extra weapon or feature per each body area (head, hand, forearm, shoulder, foot, leg, chest, back).

Interrogation Resistance
Interrogation involving torture is performed at a -10% penalty on the Doc.
                
W.P. Knife Bonus
Along with the standard W.P. Knife bonuses, receive an Additional +1 to Strike.`
        this.alignment = `Any.`
        this.occRelatedNumber = 9;
        this.secondaryNumber = 4;
        this.languages = 1;
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
                        occBonus: 40
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
                        name: 'Any'
                    }
                ],
                unavailable: [
                    {
                        name:'cryptography'
                    },
                    {
                        name:'performance'
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
                        name: 'basicElectronics',
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
                unavailable: [],
                only:[
                    {
                        name: 'horsemanshipGeneral'
                    }

                ]
            },
            mechanical: {
                number: 0,
                free: [
                    {
                        name: 'basicMechanics',
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
                        occBonus: 5
                    },
                    {
                        name: 'biowareMechanics',
                        occBonus: 15
                    }
                ],
                unavailable: [],
                only:[]
            },
            medical: {
                number: 0,
                free: [
                    {
                        name: 'cyberneticMedicine',
                        occBonus: 10
                    },
                    {
                        name: 'medicalDoctor'
                    },
                    {
                        name: 'pathology',
                        occBonus: 10
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
                        occBonus: 10
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
                    }
                ],
                unavailable: [
                    {
                        name: 'acrobatics',
                    },
                    {
                        name: 'wrestling',
                    },
                    {
                        name: 'handToHandCommando',
                    },
                    {
                        name:'handToHandMartialArts',
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
                free: [
                    {
                        name: 'findContrabandRogue',
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
                        name: 'cardsharp'
                    },
                    {
                        name: 'computerHacking'
                    },
                    {
                        name: 'concealment'
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
                        name: 'tailing'
                    }
                ],
                only:[]
            },
            science: {
                number: 0,
                free: [
                    {
                        name: 'biology',
                        occBonus: 20
                    },
                    {
                        name: 'mathematicsBasic',
                        occBonus: 30
                    },
                    {
                        name: 'mathematicsAdvanced',
                        occBonus: 10
                    },
                    {
                        name: 'chemistry',
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
            technical: {
                number: 2,
                free: [
                    {
                        name: 'computerOperation',
                        occBonus: 5
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
                        name: 'skinAndPrepareAnimalHides',
                        occBonus: '5'
                    },
                    {
                        name: 'hunting',
                        occBonus: '5'
                    }
                ],
                unavailable: [
                    {
                        name: 'boatBuilding'
                    },
                    {
                        name: 'carpentry'
                    },
                    {
                        name: 'dowsing'
                    },
                    {
                        name: 'fasting'
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
        }
        this.occRelatedAtLevel = { levels: [2, 4, 6, 8, 10, 14], amounts: 1 };
        this.secondaryAtLevel = { levels: [3, 6, 9, 12, 15], amounts: 1 };
    }

    rollSecondary(character) {
        // must choose between occ skills
        character.skills.choices = true;

        character.abilities.installBionics =
            {
                name: `Install Bionics`,
                description: `A Cyber-Doc can install and remove cybernetic implants and bionics, but requires at least a makeshift operating room. Cybernetic implants are fast and easy (no skill penalty), but bionics are very complicated and demanding on the character's time and skill. Penalties: -5% to Cyber-Doc skill to remove bionics or any prosthetic, -5% if working in poor conditions, another -5% if working with inadequate tools, -10% if the bionics are more advanced or a different but comparable technology than what he is familiar with, -20% when dealing with extremely alien physiology and/or alien cybernetics. All penalties are accumulative. A consummate pro, if there is any penalty for working under pressure or on a time limit, it should be reduced by half Taking the M.D. in Cybernetics skill twice eliminates (or reduces by half) most penalties.`,
                type: 'Occupational'
            };

        character.abilities.findBionicsAndCyberneticsContraband =
            {
                name: `Find Bionics and Cybernetics Contraband`,
                description: `+20% to Find Contraband related to medicine, cybernetics and bionics. This bonus is added to his normal Find Contraband skill whenever cybernetics or bionics are involved. Gets bionics, cybernetics and Bio-Systems at wholesale - 35% discount as professional courtesy at most Body-Chop-Shops and clinics, 50% discount if he trades at least 12 hours of his time to work at the Shop or clinic for free. Every 12 hours he puts in, he can get up to 100,000 credits worth of cyber-gear for half-off (that's 50,000 credits, his cost). 60% discount if the character is the owner or a partner in a Body-Chop-Shop or medical clinic in the Cyber-Doc's own home town/place of residence.`,
                type: 'Occupational'
            };

        character.abilities.recognizeQualityOfBionicsAndCybernetics =
            {
                name: `Recognize Quality of Bionics & Cybernetics`,
                description: `An exclusive skill that enables the Cyber-Doc to tell if an item is new or used, defective, low or high quality, and a fair price. He will automatically know the capability (damage, range, payload, etc.) of bionic weapons and prosthetics (M.D.C., P.S., Speed, etc.) and whether it's exactly what he needs or not. Base Skill: 60% + 3% per level of experience. `,
                type: 'Occupational',
                baseSkill: "60% + 3% per lvl"
            };

        character.abilities.repairAndSoupUpBionics =
            {
                name: `Repair and Soup-Up Bionics`,
                description: `Repairs for Cheap: Can completely repair bionics and cybernetics at a cost of 25% of its original list price (plus his time if he's charging for it; typically another 25%). Re-quires the right parts and ID6+2 hours to work on each item (hand, arm, shoulder, one forearm weapon, then another, etc.). 
Replace M.D.C. on a bionic appendage, main body, and cyber-armor at a cost of 1000 credits per every one M.D.C. point restored. Can-not exceed the original M.D.C. amount. 
Maximize Bionics (not cybernetics). Can tweak bionic systems to get a little more out of them. Can increase Spd 20%, P.S. 10%, increase range 10% (of weapons, transmissions, sensors, etc.), reduce size and weight of a specific item by 10%, and add ONE extra weapon or feature per each body area (head, hand, forearm, shoulder, foot, leg, chest, back).`,
                type: 'Occupational'
            };

        character.abilities.interrogationResistance =
            {
                name: `Interrogation Resistance`,
                description: `Interrogation involving torture is performed at a -10% penalty on the Doc.`,
                type: 'Occupational',
            };

        character.abilities.wPKnifeBonus =
            {
                name: `W.P. Knife Bonus`,
                description: `Along with the standard W.P. Knife bonuses, receive an Additional +1 to Strike.`,
                type: 'Occupational',
            };
    }
}

module.exports = CyberDoc;