const OCC = require('../OCC');
const { Random } = require('random-js');
const random = new Random;

class Burster extends OCC {
    constructor() {
        super();
        this.name = 'Burster';
        this.group = 'Psychics';
        this.description = `    A Burster is a Master Psychic with dramatic psychic powers that manifest themselves in physical ways, most significant of which is a highly developed Pyrokinesis, the creation and manipulation o fire. These psychics can create fire out of thin air, cause things to simply burst into flames, and use fire as a weapon. This rather spectacular display of psychic power has made the Burster one of the most feared of all the psychic characters, second only to the Mind Melter. Although other powerful psychics may possess the Super-Psionic power of Pyrokinesis, the abilities of the Burster far outstrip those of the fundamental ability possessed by others In addition to being able to create fire with a thought, the psychic can actually "burst" into flame. Flames that provide a warm and protective covering and which give the character a frightening visage and enhanced power.
    Bursters are extremely passionate about ... well, everything. They feel their emotions and beliefs deeply and are not shy about showing them. The more intense emotions, joy, love, hate and anger, burn the hottest within Bursters and are the most likely to elicit an intense react10n. Few Bursters are wishy-washy about anything. They are steadfast and outspoken in their beliefs and quick to action. While some are quite literally ''hot heads" with short tempers and explosive anger, most tend to be warm, sincere people who generally exhibit a fair amount of self-control. It's just that they are deeply committed to whatever beliefs, feelings and/or people they care about and are not afraid to take a stand or fight those who threaten them or their loved ones. 
    Many observers have noted that Bursters are a study of duality d extremes. Most Bursters are either Principled and Scrupulous or Miscreant and Diabolic - extreme good or extreme evil - rarely anything in between. They are notorious for their hot emotions, terrible anger and powers of destruction, yet they are just as likely to be generous and kind to strangers in need, and amazingly loyal to friends and loved ones. A symbol of destruction and fiery violence, the Burster often seeks peace and order, and looks to build and nurture (a belief, place, people, ideal, etc.) rather than destroy Good or evil, idealistic or sardonic, the Burster will be passionate about his position, purpose and goals, and enjoys what he does.
    Part of this comes from the very nature of fire, one of the four ancient, mystical elements. Fire itself plays important dual roles in human life. It can be used to provide light, warmth, protection from animals, the power (through heat and chemical reaction) to change and shape other elements (rock, metal, water) into useful building materials, or serve as a source of energy. In this capacity, fire nurtures, protects, helps and builds, but then there is the other side of fire, the destroyer. Fire can rage uncontrolled and destroy everything it touches In this capacity, it becomes a wild thing that leaps from place to place and down that which it helped to build. It kills without mercy and without conscience. It is a destructive force to be feared. Paradoxically, the Burster tends to be the living embodiment of fire - a builder and destroyer, a warm and noble spirit who, i f hurt or provoked, can transform into a cold-hearted destroyer with a fiery wrath.
    As hot and extreme personalities, Bursters who choose an evil course are wicked in the extreme (Miscreant or Diabolic) and relish causing pain and suffering. They destroy that which offends or annoys them and, often, that which they cannot understand. On the other hand, a good Burster can be astonishingly virtuous and compassionate. They fight for those who cannot do so for themselves and take up worthy causes. They fight with passion and conviction that is hard to find, and can be as honorable and heroic as the best Cyber-Knight. Of course, there are those who don't quite fit either mold. An Aberrant aligned Burster, for example, will never waver from his (twisted) code of ethics. Anarchist individuals are likely to be selfish in the extreme or uncharacteristic in their lack of conviction or purpose. An Unprincipled Burster will be all too aware of his dual nature and constantly at odds with himself, always struggling to do the right thing despite emotions to the contrary. 
           
(seeRifts® Ultimate Edition pg. 139 for more information)

Player Note
Like most Master Psychics, the Burster has minimal education, having spent much of the time learning and mastering his or her pyrokinetic powers. The individual has come to rely on those powers, wits, and experience. The typical Burster is a cocky, self-confident adventurer who prefers to use his or her powers and courage rather than skills or machines.`;
        this.image = 'assets/images/occ/Burster.jpg';
        this.raceDesc = `Most common among humans (87%), Elves (5%), Ogres (5%) and 3% others, typically human-like races.`;
        this.recommendedAttributes = `None. A high M.E. and at least an I.Q. 8 are suggested, but not required.`
        this.perceptionBonus = { bonus: 1 };
        this.initiativeBonus = { bonus: 2 };
        this.ispText = 'ME+4D4x10';
        this.ispLvl = { bonus: 10 };
        this.ppe = { sides: 6, amount: 2 };
        this.strikeBonus = { bonus: 1 };
        this.pullBonus = { bonus: 2 };
        this.rollBonus = { bonus: 2 };
        this.horrorBonus = { bonus: 3 };
        this.credits = { sides: 6, amount: 4, multiplier: 100 };
        this.blackMarketItems = { sides: 4, amount: 4, multiplier: 1000 };

        this.occSkillsList = `Language: Native Tongue at 98%.
Language: Other: One of choice (+30%).
Athletics (General)
Land Navigation (+10%)
Math: Basic(+15%)
Pilot: Two of choice(+10%; any except Military Vehicles).
Streetwise(+10%)
W.P. Ancient: Two of choice (any).
W.P. Modern: One of choice (any except Heavy Weapons).
Hand to Hand: Expert, can be changed to Martial Arts (or Assassin if an evil alignment) for the cost of two O.C.C. Related Skills.`;
        this.occRelatedSkillsList = `Select six skills at level one, +1 additional skill at levels 4, 9, and 12.
Communications: Any (+10%).
Cowboy: None.
Domestic· Any(+10%).
Electrical: Basic only.
Espionage: None.
Horsemanship: General and Exotic Animals only.
Mechanical: Basic and Automotive only.
Medical: First Aid, Animal Husbandry, Brewing only.
Military: None.
Physical: Any, except Acrobatics and Wrestling.
Piloting: Any (+10%), except 'bots, power armor or military.
Pilot Related: Any (+5%).
Rogue: Any, except Seduction.
Science: Math only.
Technical: Any ( + 10% ).
W.P.: Any, except heavy weapons.
Wilderness: Any.`;
        this.secondarySkillsList = `Select six Secondary Skills from the Secondary Skills List in the Skills Section, +2 additional Secondary Skills at levels 3, 6, 9 and 12. These are additional areas of knowledge that do not get any bonuses, other than any possible bonus or having a high I.Q. All Secondary Skills start at the base skill level.`;
        this.cyberneticsDesc = `Starts with none. Tends to avoid implants in favor of natural powers.`;
        this.psionicsDesc = `Select Three Minor Psionic Powers from the following list at level one, and one additional at levels 3, 6, 9, and 12.
Bio-Regenerate (self; 6)
Deaden Pain (4)
Deaden Senses (4)
Death Trance (1)
Empathy (4)
Levitation (varies)
Mind Block (4)
Resist Fatigue (4)
Resist Hunger (2)
Resist Thirst (6)
See Aura (6)
Sense Time (2)
Suppress Fear (8)
Telekinesis (varies)
Telepathy (4)
Psychic Body Field (Super - 30; counts as two selections).
Radiate Horror Factor (Super - 8; counts as two selections).

I.S.P. Base
Roll 3D4x10 plus the character's M.E. attribute
number to determine the base Inner Strength Points. The character
gets another 10 I.S.P. for each additional level of experience. The
Burster is considered a Master Psychic. 

I.S.P. Recovery
Two I.S.P. per hour of sleep or total relaxation, or 12 per hour of meditation.

Saving Throw Versus Psionic Attack
As a Master Psychic, the character needs a 10 or higher to save vs psionic attacks.`;
        this.equipmentDesc = `A couple sets of clothing, light M.D.C. body armor, sleeping bag, backpack, utility/ammo-belt, two canteens, sunglasses or tinted goggles, air filter, food rations for a week, and some personal items. One weapon for each W.P. +ID4 E-Clips for each. Starts with a commercial`;
        this.abilitiesDesc = `The Influence of Ley Line Energy
The duration and range of the Burster's pyrokinetic and other psychic powers are increased by 50% whenever on or near (within one mile/1.6 km) a ley line. The duration, range, and damage of his powers are doubled when at or near (one mile/1.6 km) a ley line nexus point!

Impervious to Fire and Heat
A psionic aura radiates around the Burster, making him and what he is wearing, completely impervious to fire and heat. Even Mega-Damage plasma, napalm, a dragon's fire breath, and magic fires do nothing but minor cosmetic damage (singe clothing or armor, damage a delicate item, etc.). Even the most intense Mega-Damage blaze does no damage whatsoever. This also means the character can pick up and hold hot coals, burning timbers, eat fire (for show, not nourishment), and walk or stand in fire without discomfort or catching on fire; it feels natural and invigorating. This natural ability also means the Burster is unaffected by smoke. He can breathe unimpaired in the thickest billowing clouds of smoke. Vision is only slightly obscured, roughly half the usual distance and clarity of sight, speed is reduced by a meager 10%, and combat penalties are only -1 to strike, parry, and dodge; most humans and D-Bees are blinded by smoke (-10 on all combat rolls, -25% on skills and -50% on Spd) and choke on the noxious fumes (roughly the same as tear gas) and a normal person will choke to death from smoke inhalation in a matter of 1D6+4 minutes.
This protective aura even helps protect against electricity (M.D. attacks inflict half damage, S.D.C. attacks just tingle), and this character never sweats.

Extinguish Fires
The Burster can instantly put out flames without need of chemicals or water. The fire just disappears because the character can psionically channel and control the energy to make it stop spreading and quickly go out.
Range: 100 feet (30.5 m) + 10 feet (3 m) per level of experience.
Radius of Effect: The psychic can extinguish a 200 foot (61 m) radius per level of experience. His/her level of control is such that the Burster can either go for the maximum (usually in an effort to save lives and/or property) or narrowly focus it to affect a comparatively small area. Duration: Permanent; until the fire is reignited.
I.S.P. Cost: 4.

Flame Burst (Self)
The psychic can seemingly cause himself to burst into flames and become completely engulfed in fire. In reality, this is a fiery aura around him. Nothing on the Burster's person is actually on fire, so nothing is damaged. Furthermore, the character can move around without difficulty. However, the fire will ignite anything he touches, such as carpeting, drapes, furniture, paper, wood, etc.
Range: Self.
Duration: Two minutes per level of experience. S.D.C.
Damage: 6D6 S.D.C. damage per strike to anyone or thing that he touches. Damage is accumulative. Plus, all combustible articles such as clothing will catch on fire, doing an additional 6D6 S.D.C. damage per melee round until extinguished. The flames are not powerful enough to damage M.D.C. items/armor unless within a mile (1.6 km) of a ley line nexus point, then the damage can be increased to 1D4 MD. (and 2D4 directly at a nexus), but costs two extra Inner Strength Points.
Mega-Damage: 1D6 M.D. (or 1D6xl00 S.D C.) can be inflicted (2D6 M.D. at ley lines and 3D6 M.D. at a nexus) if the Burster concentrates intensely to inflict maximum damage. This 1D6 M.D. can be added to damage from the Burster's punches, kicks, or simply by being touched!
Note: Additional cost of 8 I.S.P. for the M.D. attacks, lasts only one melee round per level of experience and each M.D. fire attack (punch, kick, head butt, grapple, etc.) counts as two melee actions/attacks.
I.S.P. Cost: 4.

Flame Burst Body Protection (Special)
The aura of fire from the Flame Burst also prov1Des a limited M.D.C. field of protection equal to 30 M.D.C. +6 per level of experience, and which renews itself at a rate of 3D6 M.D.C. per melee round (never more than the normal maximum).
Note: There is no extra I.S.P. cost for this aura of protection; it comes with the Flame Burst.

Fire Bolt
A fiery energy bolt can be hurled or fired from the forehead or hands ( even if the latter is an artificial appendage).
Range: 200 feet (61 m) +20 feet (6 m) per level of experience.
Duration: Instant; counts as one melee action/attack.
Bonus to Strike: +4; line of sight.
Damage: Mini-bolt 2D6 S.D.C./Hit Points, medium bolt 4D6 S.D.C., heavy bolt 6D6 S.D.C., or Mega-Damage plasma bolt: 2D6 M.D.
I.S.P. Cost: Two, regardless of the size and damage for an S.D.C. blast, and four points to create an M.D. blast.

Fire Eruption
The pyrokinetic can cause a fire to erupt in front of somebody or an area (never directly on a living creature) instantly and without the need of combustible material. The size of the flame can be controlled to be only a few inches tall and cover only an inch or two area, or several yards/meters tall and across. The flame will burn as long as its creator wills it to (costs one additional I.S.P. per 10 minutes) and cannot be extinguished by normal means because it is fueled by psychic energy. If the Burster is rendered unconscious, blinded or distracted, the flame disappears. If the Fire Eruption is created in an area where other combustible items are located ( carpet, wood, flooring, walls, ceiling, paper, fuel depot, etc.), they will catch fire within 1D4 melee rounds (i.e. one minute or less). The burning of these materials is a separate, regular fire that can be extinguished normally, but will spread and may cause immense damage just as any fire would.
Range: 100 feet (30 m) +20 feet (6 m) per level of experience. A specific target must be visible, while a target area does not have to be visible, but its precise location must be known to the Burster, i.e. causing a fire to erupt in the adjoining room or the room directly above him, etc.
Note: -25% to accurately hit a target he cannot see if it is smaller than 20 feet ( 6 m) in diameter.
Duration: The flame eruption will stay ignited for 10 minutes or until the Burster cancels the effect, which can be done at will. The psychic can keep the fire burning y expending an additional one I.S.P. every 10 minutes, but must stay within range and concentrate on maintaining the fire.
Penalties: Melee actions are reduced by half and fighting is impossible unless the Burster breaks his concentration, causing the fire to disappear. However, any combustible items set ablaze by it will continue to burn and the fire spreads until extinguished, even after the psionic fire is gone.
Bonus to Strike: This is a little different than the usual strike attack. The Burster must learn to judge distances and focus his thoughts in order to create the eruption exactly where he wants it. So instead of an attack bonus, there is a
Base Skill: 48% +4% per additional level of experience (roll percentile dice). A failed roll means the eruption happens 2D6 yards/meters off target. The Bursters -25% to accurately hit a target he cannot see if it is smaller than 20 feet (6.1 m) in diameter. Huge targets are easier to hit, but even then the blinded Burster is -5% to strike.
S.D.C. Damage: Tiny flame 1D4 S.D.C., 1-2 yards/meters fire 4D6 S.D.C., a towering pillar or wall (6 feet/1.8 m tall or bigger) 1D4x10 S.D.C., filling a room or 20 square foot (6 m) area or larger causes 2D4x10 S.D.C. damage ( or one M.D. point) per melee round or whenever somebody attempts to run through it.
Mega-Damage: The fire can be increased to Mega-Damage destruction by expending twice as many,l.S.P.; applicable only to the larger fires, walls, pillars, and areas. An M.D. fire wall or pillar inflicts 2D6 M.D., 20 foot (6 m) area does 4D6 M.D. and 40 feet (12.2 m) or bigger does 6D6 M.D. per melee round or whenever somebody tries to run through it. Combustible items burn hotter and the fire spreads four times faster than a normal S.D.C. fire.
I.S.P. Cost: 10 for S.D.C. fires regardless of size. 20 I.S.P. to create a Mega-Damage fire. Maximum Size Limitations: 20 foot area (6.1 m) +5 feet (1.5 m) per level of experience.

Sense Fire
This psionic ability enables the character to sense if there is a fire as small as a burning candle nearby. To sense the fire, the Burster must stop and concentrate for a moment (15 seconds/one melee round). A moment later, he receives psychic impressions that indicate the approximate size (big, medium,
small, tiny) and the approximate distance (near or far), the general direction (north, south, east, west, and, if in a building, up or down). He can also tell whether it is contained, spreading slowly, or raging out of control, as well as whether it is a natural/acc1Dental fire or an intentional/man-made or magical fire (arson), and how long it has been burning (minutes, hours, days). The psychic can also examine burnt objects or ashes and effectively "object read" them to get an impression of how long ago the fire last burned and whether it was natural or man-made. This affinity with fire also enables the Burster to recognize Fire Elementals and sense the presence of supernatural creatures of fire, including Fire Elementals of all kinds, fire-based demons, Fire Demon Automatons (see Rifts® Federation of Magic'™) and Fire/Water Elemental Fusionists, but not Fire Dragons or other Bursters, unless the latter has burst into flames or is controlling a psionic induced Fire Eruption.
Note: This psychic power does not disclose who made the fire, nor how many people may have been involved, nor are exact locations revealed, although it can be used to track down a fire in a search. Also note that the Sense Fire ability applies to fires, not machines or engines that radiate heat.
Range: Sensing for a burning fire will cover an 800 foot (244 m) radius + 100 feet (30.5 m) per level of experience. Examining ashes or burnt debris requires touching it.
Duration: Requires 15 seconds of preparatory concentration, but the psychic impressions and being in tune to the fire(s) lasts for four minutes, thus the character can use this ability to track down fires, i.e. "we're getting close" ... "oh no, it's spreading" ... "it's behind that door," and so on.
Damage: None.
I.S.P. Cost: Two.
Note: If a Burster uses the power of Telepathy, Empathy or See Aura, he can also sense if the target of his psychic probe is a fire bug/arsonist.

Super Fuel Flame
The character can feed a fire with psychic energy, increasing its size by as little as twofold or as much as 10 times.
Range: 100 feet (30.5 m) per level of experience.
Area of Effect: 20 foot (6 m) area per level of experience.
Damage: Increased proportional to the size of the fire; G.M. discretion.
I.S.P. Cost: 8.`;
        this.alignment = `Any, but tends to lean toward strong good (Principled and Scrupulous) or very evil (Miscreant or Diabolic).`;
        this.startingHandToHand = 'handToHandExpert';
        this.occRelatedNumber = 6;
        this.secondaryNumber = 6;
        this.languages = 1;
        this.literacies = 0;
        this.occSkills = {
            communication: {
                number: 0,
                free: [
                    {
                        name:'languageNativeTongue',
                        base: 98
                    }
                ],
                choice: [
                    {
                        amount: 1,
                        available: [
                            {
                                name:'languageOther',
                                occBonus: 30
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
                        occBonus:10
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
                        name: 'All'
                    }
                ],
                only:[]
            },
            domestic: {
                number: 0,
                free: [],
                choice: [
                    {
                        amount: 0,
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
                available: [

                    {
                        name: 'horsemanshipGeneral'
                    },

                    {
                        name: 'horsemanshipExoticAnimalsHorsemanship'
                    }
                ],
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
                number: 0,
                free: [
                    {
                        name: 'handToHandExpert',
                        skillCost: 0
                    },
                    {
                        name: 'athleticsGeneral'
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
                        name: 'wrestling',
                    },
                    {
                        name: 'handToHandCommando',
                    },
                    {
                        name: 'noHandToHandSkill',
                    },
                    {
                        name:'handToHandBasic'
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
                                name: 'Any',
                                occBonus: 10
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
                                name: 'robotCombatElite'
                            },
                            {
                                name: 'robotCombatBasic'
                            },
                            {
                                name: 'robotsAndPowerArmor'
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
                    },
                    {
                        name: 'robotsAndPowerArmor'
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
                        occBonus: 5
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
                        name: 'seduction'
                    }
                ],
                only:[]
            },
            science: {
                number: 0,
                free: [
                    {
                        name: 'mathematicsBasic',
                        occBonus: 15
                    }
                ],
                choice: [
                    {
                        amount: 0
                    }
                ],
                available: [
                ],
                unavailable: [],
                only:[
                    {
                        name: 'mathematicsAdvanced'
                    }
                ]
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
                        occBonus: 10
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
                        amount: 2,
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
                        unavailable: [
                            {
                                name: 'wPHeavyMD'
                            },
                            {
                                name: 'wPHeavyMilitary'
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
                free: [
                    {
                        name: 'landNavigation',
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
                        name: 'Any'
                    }
                ],
                unavailable: [],
                only:[]
            }
        };
        this.occRelatedAtLevel = { levels: [4, 9, 12], amounts: 1 };
        this.secondaryAtLevel = { levels: [3, 6, 9, 12], amounts: 2 };
    }

    getSecondary(character) {
        character.secondaryStats.isp.initialValue = character.attributes.me.total;
    }

    rollSecondary(character) {
        // must choose between occ skills
        character.skills.choices = true;

        character.secondaryStats.isp.occBonus = random.dice(4,3).reduce((a, b) => a + b, 0) * 10;

        character.abilities.influenceOfLeyLineEnergy =
            {
                name: `The Influence of Ley Line Energy`,
                description: `The duration and range of the Burster's pyrokinetic and other psychic powers are increased by 50% whenever on or near (within one mile/1.6 km) a ley line. The duration, range, and damage of his powers are doubled when at or near (one mile/1.6 km) a ley line nexus point!`,
                type: 'Occupational',
            };

        character.abilities.imperviousToFireAndHeat =
            {
                name: `Impervious to Fire and Heat`,
                description: `A psionic aura radiates around the Burster, making him and what he is wearing, completely impervious to fire and heat. Even Mega-Damage plasma, napalm, a dragon's fire breath, and magic fires do nothing but minor cosmetic damage (singe clothing or armor, damage a delicate item, etc.). Even the most intense Mega-Damage blaze does no damage whatsoever. This also means the character can pick up and hold hot coals, burning timbers, eat fire (for show, not nourishment), and walk or stand in fire without discomfort or catching on fire; it feels natural and invigorating. 
This natural ability also means the Burster is unaffected by smoke. He can breathe unimpaired in the thickest billowing clouds of smoke. Vision is only slightly obscured, roughly half the usual distance and clarity of sight, speed is reduced by a meager 10%, and combat penalties are only -1 to strike, parry, and dodge; most humans and D-Bees are blinded by smoke (-10 on all combat rolls, -25% on skills and -50% on Spd) and choke on the noxious fumes (roughly the same as tear gas) and a normal person will choke to death from smoke inhalation in a matter of 1D6+4 minutes. 
This protective aura even helps protect against electricity (M.D. attacks inflict half damage, S.D.C. attacks just tingle), and this character never sweats.`,
                type: 'Occupational',
            };

        character.abilities.extinguishFires =
            {
                name: `Extinguish Fires`,
                description: `The Burster can instantly put out flames without need of chemicals or water. The fire just disappears because the character can psionically channel and control the energy to make it stop spreading and quickly go out.`,
                range: `100 feet (30.5 m) + 10 feet (3 m) per level of experience.`,
                duration: `Permanent; until the fire is reignited.`,
                cost: `4 I.S.P.`,
                radius: `The psychic can extinguish a 200 foot (61 m) radius per level of experience. His/her level of control is such that the Burster can either go for the maximum (usually in an effort to save lives and/or property) or narrowly focus it to affect a comparatively small area.`,
                type: 'Occupational'
            }

        character.abilities.flameBurstSelf =
            {
                name: `Flame Burst (Self)`,
                description: `The psychic can seemingly cause himself to burst into flames and become completely engulfed in fire. In reality, this is a fiery aura around him. Nothing on the Burster's person is actually on fire, so nothing is damaged. Furthermore, the character can move around without difficulty. However, the fire will ignite anything he touches, such as carpeting, drapes, furniture, paper, wood, etc.
                
Flame Burst Body Protection (Special)
The aura of fire from the Flame Burst also prov1Des a limited M.D.C. field of protection equal to 30 M.D.C. +6 per level of experience, and which renews itself at a rate of 3D6 M.D.C. per melee round (never more than the normal maximum).

Note: There is no extra I.S.P. cost for this aura of protection; it comes with the Flame Burst.`,
                range: `Self.`,
                duration: `Two minutes per level of experience.`,
                cost: `4 I.S.P.`,
                sdcDamage: `6D6 S.D.C. damage per strike to anyone or thing that he touches. Damage is accumulative. Plus, all combustible articles such as clothing will catch on fire, doing an additional 6D6 S.D.C. damage per melee round until extinguished. The flames are not powerful enough to damage M.D.C. items/armor unless within a mile (1.6 km) of a ley line nexus point, then the damage can be increased to 1D4 MD. (and 2D4 directly at a nexus), but costs two extra Inner Strength Points.`,
                megaDamage: `1D6 M.D. (or 1D6xl00 S.D C.) can be inflicted (2D6 M.D. at ley lines and 3D6 M.D. at a nexus) if the Burster concentrates intensely to inflict maximum damage. This 1D6 M.D. can be added to damage from the Burster's punches, kicks, or simply by being touched!
Note: Additional cost of 8 I.S.P. for the M.D. attacks, lasts only one melee round per level of experience and each M.D. fire attack (punch, kick, head butt, grapple, etc.) counts as two melee actions/attacks.`,
                type: 'Occupational'
            }

        character.abilities.fireBolt =
            {
                name: `Fire Bolt`,
                description: `A fiery energy bolt can be hurled or fired from the forehead or hands ( even if the latter is an artificial appendage).`,
                range: `200 feet (61 m) +20 feet (6 m) per level of experience.`,
                duration: `Instant; counts as one melee action/attack.`,
                cost: ` S.D.C. Bolt: 2 I.S.P. / M.D. Bolt: 4 I.S.P.`,
                bonus: `+4 to strike; line of sight.`,
                sdcDamage: `Mini-bolt 2D6 S.D.C./Hit Points, medium bolt 4D6 S.D.C., heavy bolt 6D6 S.D.C`,
                megaDamage: `Mega-Damage plasma bolt: 2D6 M.D.`,
                type: 'Occupational'
            }

        character.abilities.fireEruption =
            {
                name: `Fire Eruption`,
                description: `The pyrokinetic can cause a fire to erupt in front of somebody or an area (never directly on a living creature) instantly and without the need of combustible material. The size of the flame can be controlled to be only a few inches tall and cover only an inch or two area, or several yards/meters tall and across. The flame will burn as long as its creator wills it to (costs one additional I.S.P. per 10 minutes) and cannot be extinguished by normal means because it is fueled by psychic energy. If the Burster is rendered unconscious, blinded or distracted, the flame disappears. If the Fire Eruption is created in an area where other combustible items are located ( carpet, wood, flooring, walls, ceiling, paper, fuel depot, etc.), they will catch fire within 1D4 melee rounds (i.e. one minute or less). The burning of these materials is a separate, regular fire that can be extinguished normally, but will spread and may cause immense damage just as any fire would.`,
                range: `100 feet (30 m) +20 feet (6 m) per level of experience. A specific target must be visible, while a target area does not have to be visible, but its precise location must be known to the Burster, i.e. causing a fire to erupt in the adjoining room or the room directly above him, etc.
Note: -25% to accurately hit a target he cannot see if it is smaller than 20 feet ( 6 m) in diameter.`,
                duration: `The flame eruption will stay ignited for 10 minutes or until the Burster cancels the effect, which can be done at will. The psychic can keep the fire burning y expending an additional one I.S.P. every 10 minutes, but must stay within range and concentrate on maintaining the fire.`,
                cost: `10 I.S.P. for S.D.C. fires regardless of size. 20 I.S.P. to create a Mega-Damage fire.`,
                bonus: `This is a little different than the usual strike attack. The Burster must learn to judge distances and focus his thoughts in order to create the eruption exactly where he wants it. So instead of an attack bonus, there is a
Base Skill`,
                baseSkill: `48% +4% per additional level of experience (roll percentile dice). A failed roll means the eruption happens 2D6 yards/meters off target. The Bursteris -25% to accurately hit a target he cannot see if it is smaller than 20 feet (6.1 m) in diameter. Huge targets are easier to hit, but even then the blinded Burster is -5% to strike.`,
                sdcDamage: `Tiny flame 1D4 S.D.C., 1-2 yards/meters fire 4D6 S.D.C., a towering pillar or wall (6 feet/1.8 m tall or bigger) 1D4x10 S.D.C., filling a room or 20 square foot (6 m) area or larger causes 2D4x10 S.D.C. damage ( or one M.D. point) per melee round or whenever somebody attempts to run through it.`,
                megaDamage: `The fire can be increased to Mega-Damage destruction by expending twice as many,l.S.P.; applicable only to the larger fires, walls, pillars, and areas. An M.D. fire wall or pillar inflicts 2D6 M.D., 20 foot (6 m) area does 4D6 M.D. and 40 feet (12.2 m) or bigger does 6D6 M.D. per melee round or whenever somebody tries to run through it. Combustible items burn hotter and the fire spreads four times faster than a normal S.D.C. fire.`,
                penalties: `Melee actions are reduced by half and fighting is impossible unless the Burster breaks his concentration, causing the fire to disappear. However, any combustible items set ablaze by it will continue to burn and the fire spreads until extinguished, even after the psionic fire is gone.`,
                type: 'Occupational',
                limitations: `Maximum Size Limitations are a 20 foot area (6.1 m) +5 feet (1.5 m) per level of experience.`
            }

        character.abilities.senseFire =
            {
                name: `Sense Fire`,
                description: `This psionic ability enables the character to sense if there is a fire as small as a burning candle nearby. To sense the fire, the Burster must stop and concentrate for a moment (15 seconds/one melee round). A moment later, he receives psychic impressions that indicate the approximate size (big, medium, small, tiny) and the approximate distance (near or far), the general direction (north, south, east, west, and, if in a building, up or down). He can also tell whether it is contained, spreading slowly, or raging out of control, as well as whether it is a natural/acc1Dental fire or an intentional/man-made or magical fire (arson), and how long it has been burning (minutes, hours, days). The psychic can also examine burnt objects or ashes and effectively "object read" them to get an impression of how long ago the fire last burned and whether it was natural or man-made. This affinity with fire also enables the Burster to recognize Fire Elementals and sense the presence of supernatural creatures of fire, including Fire Elementals of all kinds, fire-based demons, Fire Demon Automatons (see Rifts® Federation of Magic'™) and Fire/Water Elemental Fusionists, but not Fire Dragons or other Bursters, unless the latter has burst into flames or is controlling a psionic induced Fire Eruption.`,
                note: `This psychic power does not disclose who made the fire, nor how many people may have been involved, nor are exact locations revealed, although it can be used to track down a fire in a search. Also note that the Sense Fire ability applies to fires, not machines or engines that radiate heat.
                
Another Note: If a Burster uses the power of Telepathy, Empathy or See Aura, he can also sense if the target of his psychic probe is a fire bug/arsonist.`,
                range: `Sensing for a burning fire will cover an 800 foot (244 m) radius + 100 feet (30.5 m) per level of experience. Examining ashes or burnt debris requires touching it.`,
                duration: `Requires 15 seconds of preparatory concentration, but the psychic impressions and being in tune to the fire(s) lasts for four minutes, thus the character can use this ability to track down fires, i.e. "we're getting close" ... "oh no, it's spreading" ... "it's behind that door," and so on.`,
                cost: `2 I.S.P.`,
                type: 'Occupational'
            }

        character.abilities.superFuelFlame =
            {
                name: `Super Fuel Flame`,
                description: `The character can feed a fire with psychic energy, increasing its size by as little as twofold or as much as 10 times.`,
                range: `100 feet (30.5 m) per level of experience.`,
                cost: `8 I.S.P.`,
                damage: `Increased proportional to the size of the fire; G.M. discretion.`,
                radius: `20 foot (6 m) area per level of experience.`,
                type: 'Occupational'
            }

        character.psionics.ability = 'OCC'
        character.psionics.selected = false;
        character.psionics.total = 3;
        character.psionics.type = 'Master';

        character.psionics.healingPsionics = {
            unavailable: [
                {
                    name: 'detectPsionics'
                },
                {
                    name: 'exorcism'
                },
                {
                    name: 'healingTouch'
                },
                {
                    name: 'increasedHealing'
                },
                {
                    name: 'induceSleep'
                },
                {
                    name: 'meditationHealing'
                },
                {
                    name: 'psychicDiagnosis'
                },
                {
                    name: 'psychicPurification'
                },
                {
                    name: 'psychicSurgery'
                },
                {
                    name: 'resistFatigueHealing'
                },
                {
                    name: 'restorePPE'
                },
                {
                    name: 'stopBleeding'
                }
            ]
        }

        character.psionics.physicalPsionics = {
            unavailable: [
                {
                    name: 'alterAura'
                },
                {
                    name: 'ectoplasm'
                },
                {
                    name: 'ectoplasmicDisguise'
                },
                {
                    name: 'imperviousToCold'
                },
                {
                    name: 'imperviousToFire'
                },
                {
                    name: 'imperviousToPoison'
                },
                {
                    name: 'meditationPhysical'
                },
                {
                    name: 'mindBlockPhysical'
                },
                {
                    name: 'nightvision'
                },
                {
                    name: 'summonInnerStrength'
                },
                {
                    name: 'telekineticLeap'
                },
                {
                    name: 'telekineticLift'
                },
                {
                    name: 'telekineticPunch'
                },
                {
                    name: 'telekineticPush'
                }
            ]
        }

        character.psionics.sensitivePsionics = {
            unavailable: [
                {
                    name: 'astralProjection'
                },
                {
                    name: 'clairvoyance'
                },
                {
                    name: 'communeWithSpirits'
                },
                {
                    name: 'intuitiveCombat'
                },
                {
                    name: 'machineGhost'
                },
                {
                    name: 'maskISPAndPsionics'
                },
                {
                    name: 'maskPPE'
                },
                {
                    name: 'meditationSensitive'
                },
                {
                    name: 'objectRead'
                },
                {
                    name: 'presenceSense'
                },
                {
                    name: 'readDimensionalPortal'
                },
                {
                    name: 'remoteViewing'
                },
                {
                    name: 'seeTheInvisible'
                },
                {
                    name: 'senseDimensionalAnomaly'
                },
                {
                    name: 'senseEvil'
                },
                {
                    name: 'senseMagic'
                },
                {
                    name: 'sixthSense'
                },
                {
                    name: 'speedReading'
                },
                {
                    name: 'totalRecall'
                }
            ]
        }

        character.psionics.superPsionics = {
            available: [
                {
                    name: 'psychicBodyField',
                    selectionCost: 2
                },
                {
                    name: 'radiateHorrorFactor',
                    selectionCost: 2
                }
            ],
            unavailable: [
                {
                    name: 'bioManipulation'
                },
                {
                    name: 'bioRegenerationSuper'
                },
                {
                    name: 'electrokinesis'
                },
                {
                    name: 'empathicTransmission'
                },
                {
                    name: 'groupMindBlock'
                },
                {
                    name: 'groupTrance'
                },
                {
                    name: 'hydrokinesis'
                },
                {
                    name: 'hypnoticSuggestion'
                },
                {
                    name: 'mentallyPossessOthers'
                },
                {
                    name: 'mindBlockAutoDefense'
                },
                {
                    name: 'mindBolt'
                },
                {
                    name: 'mindBond'
                },
                {
                    name: 'mindWipe'
                },
                {
                    name: 'pPEShield'
                },
                {
                    name: 'psiShield'
                },
                {
                    name: 'psiSword'
                },
                {
                    name: 'psionicInvisibility'
                },
                {
                    name: 'psychicOmniSight'
                },
                {
                    name: 'psychosomaticDisease'
                },
                {
                    name: 'pyrokinesis'
                },
                {
                    name: 'telekinesisSuper'
                },
                {
                    name: 'telekineticAccelerationAttack'
                },
                {
                    name: 'telekineticForceField'
                },
                {
                    name: 'telemechanics'
                },
                {
                    name: 'telemechanicMentalOperation'
                },
                {
                    name: 'telemechanicParalysis'
                },
                {
                    name: 'telemechanicPossession'
                }
            ]
        }
    }
}

module.exports = Burster;