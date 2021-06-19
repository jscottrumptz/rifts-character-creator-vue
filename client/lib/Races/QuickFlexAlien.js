const Race = require('../Race');

class QuickFlexAlien extends Race {
    constructor() {
        super();
        this.name = 'Quick-Flex Alien';
        this.description = `    The Quick-Flex Alien is the classic D-Bee who, at a quick glance, couId pass for human. They don't look that different at all, same body shape, skin color, hair and general attractiveness. 
    A longer look, however, shows that the character has large eyes, a bit longer face and pinholes for a nose. Clad in armor and helmet or face covering and one would never know the difference between him, a human and a dozen other bipedal humanoids. But there are other, less obvious differences. Quick-Flex Aliens are double-jointed, ambidextrous, have lightning reflexes, and have a much higher metabolism than humans. That means they are always thin, a bit on the small side (rarely exceed five feet, 10 inches/1.75 m), are alert, agile and incredibly fast. Their re-flexes and speed are roughly equal to a Juicer or Crazy, which makes Quick-Flex Aliens superb gunmen, gunslingers, snipers, assassins, thieves, pilots and acrobats. They love adventure and fast moving vehicles. They also like adorning themselves with tattoos on their arms and chest. 
    Quick-Flex Aliens are always a welcomed addition among mercenaries, soldiers, gunfighters, lawmen, pilots, and mechanics. Their skill at piloting vehicles is almost as good as their skill with guns and thrown weapons.

(see Rifts® World Book 30: D - Bees of North America pg. 118 for more information)`;
        this.image = 'assets/images/race/quick_flex.jpg';
        this.alignment = 'Any but lean toward Scrupulous (20%), Unprincipled (30%) and Anarchist (30%).'
        this.availableOCCs = `    Limited to the following physically oriented O.C.C.s: Bandit, Bounty Hunter, City Rat, Cyber-Knight, Gunfighter, Gunslinger, Headhunter, Highwayman, Mere Soldier, Soldier (any), Sailor, Pirate, Pecos Raider, Professional Thief, Master Spy, Super Spy, Smuggler, Saddle Tramp/Drifter, Vagabond (any), Wilderness Scout (any), and any adventurer, Lawman or soldier type O.C.C. that does not require dramatic bionic conversion (partial and a few im-plants is okay) or other physiological change (i.e., no Juicer or Crazy). Robot Pilot is acceptable, but most Quick-Flex Aliens feel too removed from the action locked inside a walking tank. On the other hand, a Soldier, Mere, bandit, or Vagabond whose area of specialty is piloting fast vehicles (cars, motorcycles, hovercycles, rocket bikes, jet packs, etc.) is something this D-Bee would enjoy. 

They NEVER study magic.`
        this.excludedOCCGroups = ['Psychics', 'Practitioners of Magic'];
        this.excludedOCCs = ['Juicer', 'Crazy'];
        this.skillsDesc = `All Quick-Flex Aliens have the following skills in addition to those of their chosen O.C.C. 
    Combat Driving
    Escape Artist (+20%)
    W.P. Paired Weapons
    W.P. Quick Draw
    W.P. Targeting
Most have forgotten their native language and speak American (+20%) and one language of choice (+10%). `;
        this.psionicsDesc = `None.`;
        this.magicDesc = `None.`;
        this.abilitiesDesc = `Basically the same as a human with some notable exceptions: 

Ambidextrous (can use both hands with equal skill, precision and agility), double-jointed and can pop joints which aids in slipping out of confinement, rope, etc., and the higher metabolism, enhanced reflexes, great running speed and can leap eight feet (2.4 m) high or lengthwise from a standing still position! Add four feet (1.2 m) from a run-ning start.

 + 1 to strike using modem weapons/guns or any type of bow and arrow even if the character doesn't have a W.P. in that weapon.`;
        this.vulnerabilities = `Tend to be thrill-seekers who enjoy a fast pace and taking risks. A bit jumpy and hyper, can't sit still for more than 1D4 hours, easily bored. The Quick-Flex Alien's short attention span means complex skills and intense studies are difficult to master, so there are no (or at least few) doctors, lawyers, scholars and scientists among these D-Bees. This attention deficit also makes the study of magic too demanding, and most Quick-Flex are illiterate.

Skill Penalty
-10% on all skills (regardless of O.C.C. bonuses) except those in the categories of Espionage, Physical, Pilot, Rogue and W.P.`;
        this.cyberneticsDesc = `Tend to avoid them, because they usually slow the D-Bee down!`;
        this.disposition = `Pretty much the same range of attitudes and emotions as humans. Typically upbeat, energetic and looking for action. Many have a strong sense of justice and fair play.`;
        this.habitat = `Quick-Flex Aliens are common to North America, particularly the New West and Midwest, including the Chi-Town 'Burbs, Iron Heart 'Burbs, New Lazio, Kingsdale, and Pecos Empire. And there are an additional, estimated one million Quick-Flex Aliens scattered across Canada, America and Northern Mexico. An estimated 10,000 perished in the Coalition-Tolkeen War.`;
        this.allies = `Varies with occupation and alignment, but Quick-Flex Aliens generally get along well with humans and most D-Bees. They admire courage, physical capabilities, heroes and athletes.`;
        this.rivals = `Consider Juicers, Crazies and similar physically skilled and fast races and O.C.C.s as rivals and competitors. Dislike the Coalition States, slavers, the Minions of Splugorth and tend to view most practitioners of magic, creatures of magic and supernatural beings with dis-trust and suspicion, especially if they are involved with the Federation of Magic.`;
        this.heightMin = 5;
        this.heightMax = 6;
        this.weightMin = 110;
        this.weightMax = 150;
        this.lifespan = { sides: 6, amount: 4, bonus: 60 };
        this.lifespanDesc = 'years. Reach physical maturity by age 15. Females give birth to one child after a 7 month pregnancy and can bear young till the age of 42.';
        this.sizeDesc = 'feet tall.';
        this.weightDesc = 'lbs.';
        this.iqRoll = { sides: 6, amount: 3 };
        this.meRoll = { sides: 6, amount: 3 };
        this.maRoll = { sides: 6, amount: 3 };
        this.psRoll = { sides: 6, amount: 3 };
        this.ppRoll = { sides: 6, amount: 3, bonus: 6 };
        this.peRoll = { sides: 6, amount: 3 };
        this.pbRoll = { sides: 6, amount: 2 };
        this.spdRoll = { sides: 6, amount: 6, bonus: 25 };
        this.hpText = 'PE';
        this.hpLvl = { sides: 6, amount: 1};
        this.sdc = { sides: 6, amount: 3 };
        this.ppe = { sides: 6, amount: 2 };
        this.attacksBonus = { bonus: 1 };
        this.initiativeBonus = { bonus: 2 };
        this.perceptionBonus = { bonus: 3 };
        this.strikeBonus = { bonus: 1 };
        this.parryBonus = { bonus: 2 };
        this.autoDodgeBonus = { bonus: 3 };
        this.rollBonus = { bonus: 2 };
        this.pullBonus = { bonus: 2 };
    }

    rollSecondary(character) {
        character.abilities.specialStrikeBonus =
            {
                name: 'Special Strike Bonus',
                description: `+1 to strike using modern weapons/guns or any type of bow and arrow even if the character doesn't have a W.P. in that weapon.`,
                type: `Racial`
            }
    }

    getSecondary(character) {
        character.secondaryStats.hp.initialValue = character.attributes.pe.total;
    }
}

module.exports = QuickFlexAlien;