const OCC = require('../OCC');
const { Random } = require('random-js');
const random = new Random;

class LeyLineWalker extends OCC {
    constructor() {
        super();
        this.name = 'Ley Line Walker';
        this.group = 'Practitioner of Magic';
        this.description = `    The Ley Line Walker is a spell casting wizard but he is anything but traditional. The mage is so attuned to Iey lines that he can see magic energy emanating from even weak Iey lines, normally invisible to the human eye, and see invisible magic energy (P.P.E.) radiating from living beings, enchanted/magic objects, Techno-Wizard devices, and supernatural creatures. This is not a see aura, but an ability to actually see mystic energy waves. Furthermore, the Ley Line Walker can feel the presence of ley lines, pinpoint nexus areas, and tell when a Rift has opened nearby. 
    The pursuit of magic is a means to utilize natural energy and direct it with one's own force of will. The Ley Line Walker spends years learning to focus his thoughts and build his will in order to direct and mold mystic energy. He also spends years learning how to let the Iey line energy flow into and through him, building his tolerance for magic energy and making the Line Walker a sort of living relay station and energy transformer, as well as a P.P.E. battery. At these moments, the Line Walker becomes part of the energy he is directing and it gives him much greater control and range of magic abilities. 
    Ley Line Walkers are inquisitive and open to new ideas, people, and philosophies. Many are literate, study areas of science and have no aversion to using high-tech weapons, vehicles, and equipment. Light-weight weapons and armor are generally preferred because they are less cumbersome and do not interfere with the flow of magic energy (full body armor and bionics block and disrupt magic energy). 
    The traditional garb of the Ley Line Walker comes from the be-ginning of the Dark Age and always includes some kind of headgear and tunic to cover the head and part of the face, a hooded cloak or cape (very big into cloaks and capes), loose fitting robes, loincloth (worn over pants or robes) and/or ornate belt with inscribed strips of cloth or ornate jewelry dangling from the waist, walking boots, and a gas mask or air filter to cover the mouth. Goggles, horns, and other face wrap-pings and coverings may also be part of the ensemble.

(seeRifts® Ultimate Edition pg. 113 for more information)`;
        this.image = 'assets/images/occ/LeyLineWalker.jpg';
        this.raceDesc = `None. At least 30% are D-Bees.`;
        this.reqIq = 10;
        this.reqPe = 12;
        this.recommendedAttributes = `*( a high M.E. is also suggested but not mandatory. )`
        this.horrorBonus = { bonus: 4 };
        this.possessionBonus = { bonus: 2 };
        this.mindControlBonus = { bonus: 2 };
        this.attributesText = `+1D4 on any one Mental attribute (I.Q., M.E. or MA.)`;
        this.curseBonus = { bonus: 2 };
        this.ppeText = 'PE+3D6x10+20';
        this.ppeLvl = { sides: 6, amount: 3 };
        this.credits = { sides: 4, amount: 1, multiplier: 1000 };
        this.blackMarketItems = { sides: 4, amount: 3, multiplier: 1000 };

        this.occSkillsList = `Language: Native Tongue at 98%. 
Language: Other: Two of choice (+20%)
Climbing (+5%) 
Math: Basic (+10%) 
Land Navigation (+4%) 
Wilderness Survival (+10%) 
Pilot: (One of choice at +5%)
Lore: Demon & Monster (+15%) 
Lore: Four of choice (any, +10%)
Hand to Hand: Basic; can be changed to Hand to Hand: Expert at the cost of one "O.C.C. Related Skill," or Martial Arts (or Assassin, if an evil alignment) for the cost of two O.C.C. Related Skills.`;
        this.occRelatedSkillsList = `Select seven other skills, but two must be selected from the science category and one from technical. Plus select two additional skills at level three, one at level six, one at level nine, and one at level twelve. All new skills start at level one proficiency. 
Communications: Radio: Basic, Language, and Literacy only. 
Cowboy: None. 
Domestic: Any (+10%). 
Electrical: None. 
Espionage: Intelligence only (+5%). 
Horsemanship: General and Exotic Animals only. 
Mechanical: None. 
Medical: First Aid or Paramedic (latter counts as two skills, +5%). 
Military: None. 
Physical: Any, except Gymnastics and Wrestling. 
Pilot: Any (+2%). 
Pilot Related: Any (+2%). 
Rogue: Any. 
Science: Any (+10%). 
Technical: Any (+5%). 
W.P.: Any. 
Wilderness: Any.`;
        this.secondarySkillsList = `The character also gets to select six Secondary Skills from the Secondary Skills list, plus one additional Secondary Skill at levels 4, 8 and 12. These are additional areas of knowledge that do not get any bonuses, other than any possible bonus for having a high I.Q. All Secondary Skills start at the base skill level.`;
        this.cyberneticsDesc = `Starts with none and will avoid getting any cybernetic or other forms of physical augmentation because it interferes with magic. However, Bio-System prosthetics will be considered if necessary.`;
        this.magicDesc = `Initial Spell Knowledge
In addition to the ley line powers, the Ley Line Walker is a master of spell magic (tends to avoid ritual magic, but can perform rituals if so needed). At level one experience, players may select any three spells from each magic Level 1-4, for a total of 12 spells (three from each). Each additional level of experience, the character will be able to figure out/select one new spell equal to his own level of achievement/experience. So a 4th level Ley Line Walker can select one new spell from level four, or from levels one, two or three (not one from each).

Learning New Spells
Additional spells and rituals of any magic level can be learned and or purchased at any time regardless of the character's experience level. See the Pursuit of Magic prior to the Spell Descriptions at the end of this Magic O.C.C. section. 

P.P.E.
Like all practitioners of magic, the Ley Line Walker is a living battery of mystic energy. He draws upon that energy reserve to cast his spells and use magic. The Line Walker has the greatest amount of permanent P.P.E. of all mortal practitioners of magic. Permanent Base P.P.E.: 3D6x10+20 added to the character's P.E. attribute number to start. Plus an additional 3D6 P.P.E. per each additional level of experience starting at level two. 

Supplemental P.P.E.
The Ley Line Walker can also draw an extra 20 P.P.E. per melee round when on a ley line and 40 when at a ley lines nexus point! P.P.E. can also be stolen from living creatures and people by killing them (hence rituals involving human sacrifices) because their P.P.E. is doubled at the moment of death! However, a character of good or Unprincipled alignment would never do such a thing (except possibly under the most extreme circumstance). People can also willingly give up a portion of their P.P.E. but that's an unusual situation. It's all explained m the section entitled The Principles of Magic, page 185. 

P.P.E. Recovery
For the Ley Line Walker, spent P.P.E. recovers at a rate of seven points per hour of sleep or rest. Meditation restores P.P.E. at 15 per hour of meditation and is equal to one hour of sleep for this character when it comes to recovery from fatigue and physical rest.`;
        this.equipmentDesc = `Robe or cape, set of clothing, set of traveling clothes, light M.D.C. body armor (seldom wear heavy armor, be-cause it reduces their speed and mobility by halt), knapsack, back-pack, ID4 small sacks, one large sack, six wooden stakes and mallet (for vampires and other practical applications), canteen, binoculars, tinted goggles or sunglasses, air filter and gas mask, flashlight, I 00 feet (30.5 m) of lightweight cord and grappling hook, pen or pencils and note or sketch pad. Ley Line Walkers like Techno-Wizard items and can use them well. 
Weapons will include a survival knife, hand axe, automatic pistol or submachine-gun (player's choice), energy pistol or rifle, and several extra clips of ammunition. 
The vehicle of choice is usually a Techno-Wizardry device or hover vehicle or motorcycle or jet pack. They tend toward inexpensive and easy to replace items (or items they can carry, like a Wing Board), because they often have to leave their vehicle behind when traveling along ley lines (phasing).

Ley Line Walker Concealed Body Armor 
Although it is not usually visible, light to medium body armor is worn under the robes. The chest, shoulders, thighs and back of the head are always 'protected. M.D.C. plating is often used to cover the arms as vambraces ,and armored gauntlets, and the rest of the legs as well. Again, it is either concealed under the robes or loose, baggy clothing, or so stylish it looks like ornamental arm bracelets or vambraces rather than armor. The armor is often made from natural M.D.C. materials like the plates from a Fury Beetle or hide of a dinosaur, and interlaced with M.D. ceramic plates, padding and miracle fibers. M.D.C. metal alloys may be used but are kept to a minimum (less than 50%) because they interfere with the flow of P.P.E. and interfere with the ability to cast spells. Remember, the mage also has magic spells, such as Armor of Ithan, Impervious to Fire, etc., he can cast to provide additional protection for himself. (See page 188 for more on armor.) 

Stats for Concealed Ley Line Walker Armor
Light Armor Protection: 2D6+32 M.D.C. main body. Medium Armor: 3D6+50 M.D.C. main body; arms typically have 11-18 M.D.C., legs have 22-28 M.D.C.; -5% to Prowl, Climb, Swimming and other physical skills. Both are very common. Seldom wears heavy body armor. Heavy and full body armor are available in a variety of styles, but are seldom worn (maybe 10% wear them). For one, it's too bulky and uncomfortable, and for another, it's expensive, and lastly, unless it is made predominantly with 'natural materials, conventional environmental armor pre-vents spell casting. Techno-Wizard armor is one alternative for superior protection as well as a few non-magical alternatives, but Mage Armor always requires special consideration and construction to allow spell casting and the use of special abilities.`;
        this.abilitiesDesc = `Sense Ley Line and Magic Energy
The Ley Line Walker can see and feel the presence of magic, providing all of the following sensing abilities as automatic powers which do not require the expenditure of P.P.E.
• Sense Ley Line
The Ley Line Walker is able to feel whether there is a Iey line within the area of his sensing abilities, 10 miles (16 km) per level of experience. He can tell whether it is near or far and follow the feeling to the location of the Iey line. 
Base Skill: 30% +5% per each additional level of experience.
• Sense Ley Line Nexus
Once the Iey line has been found, the walker can follow the Iey line to as many nexus points as it may have. A nexus point is where two or more ley lines cross/intersect. 
Base Skill: 40% +5% per each additional level of experience.
• Sense a Rift
The mage will automatically feel the sensation of a Rift opening or closing anywhere within 50 miles (80 km) of him. Increase the sensing range 10 miles (16 km) per each additional level of experience starting with level two. Although he cannot tell exactly where this Rift is, the mage knows if it is near or far and whether it is big or small. Note: When actually on a ley line, the Line Walker will know exactly where the Rift is located and he can sense one wherever it is, as long as it is on the ley line or a connecting line. 
• Sense Magic in Use
The expenditure of magic in the form of a spell, Rifting, or Techno-Wizardry can be felt, if not seen, up to 100 feet (30.5 m) away per every level of the Line Walker's experience. The Ley Line Walker will not know the location nor be able to trace it, but he will feel its energy and know that magic is being used in the area of his sensing range. Note: This does not include the use of psionic powers. 
• See Magic Energy
The mage sees magic energy/P.P.E. radiating from people, creatures, objects, and areas, as a faint aura whenever more than 20 P.P.E. points are present. The sensing ability is so acute that the Ley Line Walker can see things made invisible by magic and invisible things that are magical, including invisible dragons and other creatures of magic. This special sight occurs only when the mage de-sires to use it and focuses on seeing the magically invisible. However, the effort uses up one melee attack/action per round (15 seconds) that this special sight is willed in place. Note: Does not work on the spell, Invisibility Superior. Range: Line of sight, about I 000 feet (305 m). 

Read Ley Lines
This power instills the mage with instant information about the ley line in a matter of moments. The Ley Line Walker will know the following: What directions the ley line runs (and therefore, his location on it; north, south, east, west, etc.), how long the line runs, whether there are any nexus points and where, and whether there are any Rifts presently open along the line. The character also knows about any major natural disasters currently happening along the line, such as a forest fire, flooding, hurricane, or earthquake. War and magic are not natural disasters. The power is automatic and does not require the expenditure of personal P.P.E. 

Ley Line Transmission
A Ley Line Walker can send a verbal and/or visual message directly along a ley line to another person so long as that person is located somewhere on the line. The best messages are brief ones of under a hundred words to avoid overwhelming the recipient. Unfortunately, the message is a one way transmission un-less the other person is also a Line Walker or other mage with the Transmission spell. Range is limited only by the length of the ley line and the people's position on the line. The time lapse between sending and receiving a ley line transmission is only a matter of seconds. The message can be sent to one specific person or several people (one per-son per level of the sender's experience), or several people at different locations on the line.
The only danger is that a telepathic individual (psionic or magic) may be able to listen in on the message. There is a 01-20% chance that any psionic or magic character with Telepathy will sense a Ley Line Transmission coming through, and eavesdrop (01-31 % chance that they too can receive the message). There is no way for the sender to know if others have eavesdropped on his message. Nor is there any way to scramble the message. This power is an automatic ability for the Ley Line Walker and does not require the expenditure of personal P.P.E. 

Ley Line Phasing (teleportation)
A Ley Line Walker also has the power to instantly teleport from one place to another, FLAWLESSLY anywhere on the same ley line. By the way, that can be any-where in any direction (ley lines can be a quarter/0.4 km to one full mile/1.6 km wide!), including up into the air (ley lines are typically a half mile/0.8 km to two miles/3.2 km tall) and hang there because Line Walkers can walk a ley line, as in walk floating above the ground. If he teleports up into the air he can stay there suspended (+20% to Prowl/ hide, because us ground dwelling humans don't usually look up). To do a Ley Line Teleport the mage must concentrate, opening himself to the ley line energy and focusing all of his thoughts to the task of teleporting to the new location. Engaging in conversation or combat, even self-defense, will break the concentration, forcing the mage to start over. The process requires ID4 melees (15 to 60 seconds) of concentration every time before the teleportation happens, so he can't just pop out in a heartbeat, but it's still very, very handy. The teleport is always on target, because the Ley Line Walker is one with the ley line. Of course, unless he can see his destination, he can't know who or what might also be present in that area and he could appear in the middle of an armed camp (but not inside one of them or a tree, etc., as is the dan-ger with the Teleportation spell). 
Note; Ley Line Phasing is an automatic ability common to all Ley Line Walkers at NO P.P.E. cost, but it does take its toll on the body. The maximum number of phasings/teleports possible is four per hour. The per 24 hour period is 4 +2 per each level of experience (6 at level one, 8 at level two, IO at level three, etc). More than this is just impossible. The only other limitations are: 1) He can only teleport himself and his possessions, nobody else. 2) The location must be along the same ley line as if traveling on a mystic railway. To switch to a different ley line, the character must travel or teleport to the nexus point intersection •where two or more different ley lines cross paths to follow one of the other lines.

Ley' Line Walking or Line Drifting
A Ley Line Walker can open himself to the ley line energies and walk or float through the air along the length of the ley line. The speed factor is a mere Speed of 10, but is relaxing and requires absolutely no exertion or even physical movement1 of the feet or body if drifting afloat. NO P.P.E. is necessary for Ley Line Walker to do this, because he's drawing on the ambient energy of the line and his attunement to ley line energy make him practically a living part of the line itself. Note: He can even meditate while drifting down a ley line. Height is typically 1-5 feet (0.3 to 1.5 m) above the ground, but if he concentrates he can reach a height as great as the line itself. This is dangerous, however, as it leaves him out in the open easy to see from a great distance. Just below or just above treetop level is common among those who like to be high above the ground. 

Ley Line Rejuvenation
The character can absorb ley line energy to double the rate of natural healing. To do this, the mage must concentrate and relax on a ley line, letting the mystic energy fill him and heal him over a period of days. The mage can also perform an instant rejuvenation on a ley line as often as once every 24 hours, in which after about ten minutes of concentration, he is completely rested, alert, and healed of 20 Hit Points and 20 S.D.C. + ID6 additional Hit Points and 2D6 S.D.C. (or 4D6 M.D.C. if a Mega-Damage being) per level of experience! Again at no P.P.E. cost, but only possible on a ley line. Note: No P.P.E. or I.S.P. can be restored this way, only Hit Points and S.D.C.

Ley Line Observation Ball
A globe of light, about the size of a soccer ball, can be conjured out of thin air and linked to the Ley Line Walker like a third eye. The sphere of blue or white light can be directed by its creator to zoom ahead or behind him like a remote control spy device or familiar. Everything that the ball sees and hears is instantly transmitted to its maker. The sphere will remain in existence as long as the Ley Line Walker stays within the ley line, or until he dispels it, or until it is destroyed. 
Stats for a typical Observation Ball
M.D.C.: One point per level of its creator. 
Range: Up to 500 feet (152 m) away from its creator per level of its creator, so a fifth level Ley Line Walker could send his Observation Ball 2500 feet away and a tenth level mage almost one mile (1.6 km). 
Speed: Up to Spd 44 (30 mph/48 km). 
Bonuses: + 3 to dodge. It has no offensive capabilities other than to buzz onlookers and possibly startle them (not likely). Actions of that sort, however, require the Ley Line Walker to have line of sight on the ball for him to direct it men-tally, each attack/action of the ball counting as one of his own melee actions/attacks. 

Affinity with Rift & Ley Line Magic
The Spell Invocations known as Rift & Ley Line Magic are most commonly known by the Ley Line Walker O.C.C These spells common to the Ley Line Walker and although these spells can be important to the profession, the Ley Line 
Walker does not start with any at level one (unless a Ley Line Rifter O.C.C.). They are usually acquired over time. 
The Rift & Ley Line Magic spells are: Dimensional Portal (1000), Ley Line Fade (20), Ley Line Ghost (80 or 240), Ley Line Phantom (40), Ley Line Restoration (80o+), Ley Line Resurrection (2000+), Ley Line Shutdown (3000), Ley Line Storm Defense (180), Ley Line Tendril Bolts (26), Ley Line Time Capsule (15), Ley Line Time Flux (80), Ley Line Transmission (30), Rift to Limbo (160), Rift Teleportation (200), Rift Triangular Defense System (840), Summon Ley Line Storm (500), Swallowing Rift (300). 
Learning them
These spells can be learned by being taught by an elder mage or by communing with the ley line. This can occur upon reaching a new mystic plateau (new level of experience), in which the character goes off onto a ley line allow and goes into a meditative trance that last 48 hours. At the end of the trance he knows one of these spells (pick one). 
There are two schools of thoughts about Rift & Ley line Magic. One is the typical Line Walker who feel Ley Line Magic is useful, but no more important or significant than any other spell invocation. And the smaller camp who feel Ley Line Magic is of significant and over-riding value. This second camp tends to be a silent minority, for they consider themselves to be elitists with unique and keen insights and whose focus make them special. These mages are Ley Line Rifters who focus on learning all the spells above and similar energy and dimension types of Invocations (described immediately after the Ley Line Walker O.C.C.). This focus on ley lines and dimension magic makes them, in effect, specialists in Rift and Ley Line Magic. A mastery of magic and knowledge that these mages see as a strength and that most Ley Line Walkers and other practitioners of magic regard as short-sighted and limiting.

Ley Line Force Field
The Ley Line Walker can also put in place an energy field reminiscent of the Armor of Ithan around himself whenever he's on a ley line. This extra bit of protection provides 20 M.D.C. +2 M.D.C. per level of its creator's experience. It costs the mage 10 P.P.E. to create/summon it initially, but once it is in place it remains up for the entire time he remains on the ley line or until he dispels it. If the Ley Line Force Field is destroyed, it will regenerate at full strength at the start of the next melee round! 
Note: Having the force field up and in place draws upon half the ambient P.P.E. of the ley line normally available (20 P.P.E.) to the Ley Line Walker per melee round. Energy the mage often draws upon to supplement his own spell casting. This could be a problem in a combat situation and require the character to drop his protective field to tap more energy.`;
        this.alignment = `Any.`;
        this.startingHandToHand = 'handToHandBasic';
        this.occRelatedNumber = 7;
        this.secondaryNumber = 6;
        this.languages = 2;
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
                available: [],
                unavailable: [
                    {
                        name: 'barter'
                    },
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
                        name: 'performance'
                    },
                    {
                        name: 'publicSpeaking'
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
                unavailable: [
                    {
                        name: 'All'
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
                available: [],
                unavailable: [],
                only:[
                    {
                        name: 'intelligence',
                        occBonus: 5
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
                        name: 'horsemanshipCowboyHorsemanship'
                    },
                    {
                        name: 'horsemanshipCossack'
                    },
                    {
                        name: 'horsemanshipCyberKnight'
                    },
                    {
                        name: 'horsemanshipEquestrian'
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
                available: [],
                unavailable: [
                    {
                        name: 'All'
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
                        occBonus: 5
                    },
                    {
                        name: 'paramedic',
                        skillCost: 2,
                        occBonus: 5
                    }
                ],
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
                    },
                    {
                        name: 'climb',
                        occBonus: 5
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
                    },
                    {
                        name:'handToHandExpert',
                        skillCost: 1
                    }

                ],
                unavailable: [
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
                        occBonus: 2
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
                        occBonus: 2
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
                        name: 'any'
                    }
                ],
                unavailable: [],
                only:[]
            },
            science: {
                number: 2,
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
                number: 1,
                free: [
                    {
                        name: 'loreDemonsAndMonsters',
                        occBonus: 15
                    }
                ],
                choice: [
                    {
                        amount: 4,
                        available: [
                            {
                                name: 'Any',
                                occBonus: 10
                            }
                        ],
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
                                name: 'computerOperation'
                            },
                            {
                                name: 'computerProgramming'
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
                                name: 'juryRig'
                            },
                            {
                                name: 'lawGeneral'
                            },
                            {
                                name: 'leatherWorking'
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
            weaponProficienciesAncient: {
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
                    }
                ],
                only:[]
            },
            wilderness: {
                number: 0,
                free: [
                    {
                        name: 'landNavigation',
                        occBonus: 4
                    },
                    {
                        name: 'wildernessSurvivalWilderness',
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
        this.occRelatedAtLevel = { levels: [3, 6, 9, 12], amounts: 1 };
        this.secondaryAtLevel = { levels: [4, 8, 12], amounts: 1 };
    }

    getSecondary(character) {
        character.secondaryStats.ppe.initialValue = character.attributes.pe.total;
    }

    rollSecondary(character) {
        // must choose between occ skills
        character.skills.choices = true;

        character.secondaryStats.ppe.occBonus = random.dice(6,3).reduce((a, b) => a + b, 0) * 10 + 20;

        character.abilities.saveVsMagic =
            {
                name: `Save vs Magic`,
                description: `+1 to save vs magic at levels 3, 6, 9, 11, and 14.`,
                type: 'Occupational'
            }

        character.abilities.spellStrength =
            {
                name: `Spell Strength`,
                description: `+1 to Spell Strength (the number others must save against when you cast a spell) at levels 3, 7, 10, and 13.`,
                type: 'Occupational'
            }

        character.abilities.perceptionRolls =
            {
                name: `Perception`,
                description: `+1 on Perception Rolls at levels 2, 5, 7, I 0, and 13; double when on a ley line.`,
                type: 'Occupational'
            }

        character.abilities.leyLineWalkerConcealedBodyArmor =
            {
                name: `Ley Line Walker Concealed Body Armor`,
                description: `Although it is not usually visible, light to medium body armor is worn under the robes. The chest, shoulders, thighs and back of the head are always 'protected. M.D.C. plating is often used to cover the arms as vambraces ,and armored gauntlets, and the rest of the legs as well. Again, it is either concealed under the robes or loose, baggy clothing, or so stylish it looks like ornamental arm bracelets or vambraces rather than armor. The armor is often made from natural M.D.C. materials like the plates from a Fury Beetle or hide of a dinosaur, and interlaced with M.D. ceramic plates, padding and miracle fibers. M.D.C. metal alloys may be used but are kept to a minimum (less than 50%) because they interfere with the flow of P.P.E. and interfere with the ability to cast spells. Remember, the mage also has magic spells, such as Armor of Ithan, Impervious to Fire, etc., he can cast to provide additional protection for himself. (See page 188 for more on armor.)`,
                note: `Stats for Concealed Ley Line Walker Armor
                Light Armor Protection: 2D6+32 M.D.C. main body. Medium Armor: 3D6+50 M.D.C. main body; arms typically have 11-18 M.D.C., legs have 22-28 M.D.C.; -5% to Prowl, Climb, Swimming and other physical skills. Both are very common. Seldom wears heavy body armor. Heavy and full body armor are available in a variety of styles, but are seldom worn (maybe 10% wear them). For one, it's too bulky and uncomfortable, and for another, it's expensive, and lastly, unless it is made predominantly with 'natural materials, conventional environmental armor pre-vents spell casting. Techno-Wizard armor is one alternative for superior protection as well as a few non-magical alternatives, but Mage Armor always requires special consideration and construction to allow spell casting and the use of special abilities.`,
                type: 'Occupational'
            }

        character.abilities.senseLeyLineandMagicEnergy =
            {
                name: `Sense Ley Line and Magic Energy`,
                description: `Sense Ley Line and Magic Energy
The Ley Line Walker can see and feel the presence of magic, providing all of the following sensing abilities as automatic powers which do not require the expenditure of P.P.E.

• Sense Ley Line
The Ley Line Walker is able to feel whether there is a Iey line within the area of his sensing abilities, 10 miles (16 km) per level of experience. He can tell whether it is near or far and follow the feeling to the location of the Iey line. 
Base Skill: 30% +5% per each additional level of experience.

• Sense Ley Line Nexus
Once the Iey line has been found, the walker can follow the Iey line to as many nexus points as it may have. A nexus point is where two or more ley lines cross/intersect. 
Base Skill: 40% +5% per each additional level of experience.

• Sense a Rift
The mage will automatically feel the sensation of a Rift opening or closing anywhere within 50 miles (80 km) of him. Increase the sensing range 10 miles (16 km) per each additional level of experience starting with level two. Although he cannot tell exactly where this Rift is, the mage knows if it is near or far and whether it is big or small. Note: When actually on a ley line, the Line Walker will know exactly where the Rift is located and he can sense one wherever it is, as long as it is on the ley line or a connecting line. 

• Sense Magic in Use
The expenditure of magic in the form of a spell, Rifting, or Techno-Wizardry can be felt, if not seen, up to 100 feet (30.5 m) away per every level of the Line Walker's experience. The Ley Line Walker will not know the location nor be able to trace it, but he will feel its energy and know that magic is being used in the area of his sensing range. Note: This does not include the use of psionic powers. 

• See Magic Energy
The mage sees magic energy/P.P.E. radiating from people, creatures, objects, and areas, as a faint aura whenever more than 20 P.P.E. points are present. The sensing ability is so acute that the Ley Line Walker can see things made invisible by magic and invisible things that are magical, including invisible dragons and other creatures of magic. This special sight occurs only when the mage de-sires to use it and focuses on seeing the magically invisible. However, the effort uses up one melee attack/action per round (15 seconds) that this special sight is willed in place. Note: Does not work on the spell, Invisibility Superior. Range: Line of sight, about 1000 feet (305 m).`,
                type: 'Occupational'
            }

        character.abilities.readLeyLines =
            {
                name: `Read Ley Lines`,
                description: `This power instills the mage with instant information about the ley line in a matter of moments. The Ley Line Walker will know the following: What directions the ley line runs (and therefore, his location on it; north, south, east, west, etc.), how long the line runs, whether there are any nexus points and where, and whether there are any Rifts presently open along the line. The character also knows about any major natural disasters currently happening along the line, such as a forest fire, flooding, hurricane, or earthquake. War and magic are not natural disasters. The power is automatic and does not require the expenditure of personal P.P.E.`,
                type: 'Occupational'
            }

        character.abilities.leyLineTransmission =
            {
                name: `Ley Line Transmission`,
                description: `A Ley Line Walker can send a verbal and/or visual message directly along a ley line to another person so long as that person is located somewhere on the line. The best messages are brief ones of under a hundred words to avoid overwhelming the recipient. Unfortunately, the message is a one way transmission un-less the other person is also a Line Walker or other mage with the Transmission spell. Range is limited only by the length of the ley line and the people's position on the line. The time lapse between sending and receiving a ley line transmission is only a matter of seconds. The message can be sent to one specific person or several people (one per-son per level of the sender's experience), or several people at different locations on the line.
The only danger is that a telepathic individual (psionic or magic) may be able to listen in on the message. There is a 01-20% chance that any psionic or magic character with Telepathy will sense a Ley Line Transmission coming through, and eavesdrop (01-31 % chance that they too can receive the message). There is no way for the sender to know if others have eavesdropped on his message. Nor is there any way to scramble the message. This power is an automatic ability for the Ley Line Walker and does not require the expenditure of personal P.P.E.`,
                type: 'Occupational'
            }

        character.abilities.leyLinePhasing =
            {
                name: `Ley Line Phasing (teleportation)`,
                description: `A Ley Line Walker also has the power to instantly teleport from one place to another, FLAWLESSLY anywhere on the same ley line. By the way, that can be any-where in any direction (ley lines can be a quarter/0.4 km to one full mile/1.6 km wide!), including up into the air (ley lines are typically a half mile/0.8 km to two miles/3.2 km tall) and hang there because Line Walkers can walk a ley line, as in walk floating above the ground. If he teleports up into the air he can stay there suspended (+20% to Prowl/ hide, because us ground dwelling humans don't usually look up). To do a Ley Line Teleport the mage must concentrate, opening himself to the ley line energy and focusing all of his thoughts to the task of teleporting to the new location. Engaging in conversation or combat, even self-defense, will break the concentration, forcing the mage to start over. The process requires ID4 melees (15 to 60 seconds) of concentration every time before the teleportation happens, so he can't just pop out in a heartbeat, but it's still very, very handy. The teleport is always on target, because the Ley Line Walker is one with the ley line. Of course, unless he can see his destination, he can't know who or what might also be present in that area and he could appear in the middle of an armed camp (but not inside one of them or a tree, etc., as is the dan-ger with the Teleportation spell).`,
                note: `Ley Line Phasing is an automatic ability common to all Ley Line Walkers at NO P.P.E. cost, but it does take its toll on the body. The maximum number of phasings/teleports possible is four per hour. The per 24 hour period is 4 +2 per each level of experience (6 at level one, 8 at level two, IO at level three, etc). More than this is just impossible. The only other limitations are: 1) He can only teleport himself and his possessions, nobody else. 2) The location must be along the same ley line as if traveling on a mystic railway. To switch to a different ley line, the character must travel or teleport to the nexus point intersection •where two or more different ley lines cross paths to follow one of the other lines.`,
                type: 'Occupational'
            }

        character.abilities.leyLineWalkingOrLineDrifting =
            {
                name: `Ley Line Walking or Line Drifting`,
                description: `A Ley Line Walker can open himself to the ley line energies and walk or float through the air along the length of the ley line. The speed factor is a mere Speed of 10, but is relaxing and requires absolutely no exertion or even physical movement1 of the feet or body if drifting afloat. NO P.P.E. is necessary for Ley Line Walker to do this, because he's drawing on the ambient energy of the line and his attunement to ley line energy make him practically a living part of the line itself. Note: He can even meditate while drifting down a ley line. Height is typically 1-5 feet (0.3 to 1.5 m) above the ground, but if he concentrates he can reach a height as great as the line itself. This is dangerous, however, as it leaves him out in the open easy to see from a great distance. Just below or just above treetop level is common among those who like to be high above the ground.`,
                type: 'Occupational'
            }

        character.abilities.leyLineRejuvenation =
            {
                name: `Ley Line Rejuvenation`,
                description: `The character can absorb ley line energy to double the rate of natural healing. To do this, the mage must concentrate and relax on a ley line, letting the mystic energy fill him and heal him over a period of days. The mage can also perform an instant rejuvenation on a ley line as often as once every 24 hours, in which after about ten minutes of concentration, he is completely rested, alert, and healed of 20 Hit Points and 20 S.D.C. + ID6 additional Hit Points and 2D6 S.D.C. (or 4D6 M.D.C. if a Mega-Damage being) per level of experience! Again at no P.P.E. cost, but only possible on a ley line. Note: No P.P.E. or I.S.P. can be restored this way, only Hit Points and S.D.C.`,
                type: 'Occupational'
            }

        character.abilities.leyLineObservationBall =
            {
                name: `Ley Line Observation Ball`,
                description: `A globe of light, about the size of a soccer ball, can be conjured out of thin air and linked to the Ley Line Walker like a third eye. The sphere of blue or white light can be directed by its creator to zoom ahead or behind him like a remote control spy device or familiar. Everything that the ball sees and hears is instantly transmitted to its maker. The sphere will remain in existence as long as the Ley Line Walker stays within the ley line, or until he dispels it, or until it is destroyed.

Stats for a typical Observation Ball
M.D.C.: One point per level of its creator. 
Range: Up to 500 feet (152 m) away from its creator per level of its creator, so a fifth level Ley Line Walker could send his Observation Ball 2500 feet away and a tenth level mage almost one mile (1.6 km). 
Speed: Up to Spd 44 (30 mph/48 km). 
Bonuses: + 3 to dodge. It has no offensive capabilities other than to buzz onlookers and possibly startle them (not likely). Actions of that sort, however, require the Ley Line Walker to have line of sight on the ball for him to direct it men-tally, each attack/action of the ball counting as one of his own melee actions/attacks.`,
                type: 'Occupational'
            }

        character.abilities.affinityWithRiftAndLeyLineMagic =
            {
                name: `Affinity with Rift & Ley Line Magic`,
                description: `The Spell Invocations known as Rift & Ley Line Magic are most commonly known by the Ley Line Walker O.C.C These spells common to the Ley Line Walker and although these spells can be important to the profession, the Ley Line 
Walker does not start with any at level one (unless a Ley Line Rifter O.C.C.). They are usually acquired over time. 
The Rift & Ley Line Magic spells are: Dimensional Portal (1000), Ley Line Fade (20), Ley Line Ghost (80 or 240), Ley Line Phantom (40), Ley Line Restoration (80o+), Ley Line Resurrection (2000+), Ley Line Shutdown (3000), Ley Line Storm Defense (180), Ley Line Tendril Bolts (26), Ley Line Time Capsule (15), Ley Line Time Flux (80), Ley Line Transmission (30), Rift to Limbo (160), Rift Teleportation (200), Rift Triangular Defense System (840), Summon Ley Line Storm (500), Swallowing Rift (300). 

Learning them
These spells can be learned by being taught by an elder mage or by communing with the ley line. This can occur upon reaching a new mystic plateau (new level of experience), in which the character goes off onto a ley line allow and goes into a meditative trance that last 48 hours. At the end of the trance he knows one of these spells (pick one). 
There are two schools of thoughts about Rift & Ley line Magic. One is the typical Line Walker who feel Ley Line Magic is useful, but no more important or significant than any other spell invocation. And the smaller camp who feel Ley Line Magic is of significant and over-riding value. This second camp tends to be a silent minority, for they consider themselves to be elitists with unique and keen insights and whose focus make them special. These mages are Ley Line Rifters who focus on learning all the spells above and similar energy and dimension types of Invocations (described immediately after the Ley Line Walker O.C.C.). This focus on ley lines and dimension magic makes them, in effect, specialists in Rift and Ley Line Magic. A mastery of magic and knowledge that these mages see as a strength and that most Ley Line Walkers and other practitioners of magic regard as short-sighted and limiting.`,
                type: 'Occupational'
            }

        character.abilities.leyLineForceField =
            {
                name: `Ley Line Force Field`,
                description: `The Ley Line Walker can also put in place an energy field reminiscent of the Armor of Ithan around himself whenever he's on a ley line. This extra bit of protection provides 20 M.D.C. +2 M.D.C. per level of its creator's experience. It costs the mage 10 P.P.E. to create/summon it initially, but once it is in place it remains up for the entire time he remains on the ley line or until he dispels it. If the Ley Line Force Field is destroyed, it will regenerate at full strength at the start of the next melee round! 
Note: Having the force field up and in place draws upon half the ambient P.P.E. of the ley line normally available (20 P.P.E.) to the Ley Line Walker per melee round. Energy the mage often draws upon to supplement his own spell casting. This could be a problem in a combat situation and require the character to drop his protective field to tap more energy.`,
                type: 'Occupational'
            }

        character.spells.ability = 'OCC';
        character.spells.type = 'Master'
        character.spells.selected = false;
        character.spells.total = 12;
        character.spells.levelRequirements = true;
        character.spells.invocation = {
            available: true,
            requiredAmount: 12,
            one: {
                requiredAmount: 3
            },
            two: {
                requiredAmount: 3
            },
            three: {
                requiredAmount: 3
            },
            four: {
                requiredAmount: 3
            },
            five: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            six: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            seven: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            eight: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            nine: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            ten: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            eleven: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            twelve: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            thirteen: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            fourteen: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            fifteen: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            a: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            b: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            },
            legend: {
                requiredAmount: 0,
                unavailable: [
                    {
                        name: 'All'
                    }
                ]
            }
        };
    }
}

module.exports = LeyLineWalker;