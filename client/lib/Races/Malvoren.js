const Race = require('../Race');
const { Random } = require('random-js');
const random = new Random;
const MalvorenRCC = require('../RCCs/MalvorenRCC')

class Malvoren extends Race {
    constructor() {
        super();
        this.name = `Malvoren`;
        this.rcc = true;
        this.description = `    The Malvoren are a race of warriors whose past has been lost to antiquity. They are drawn to war and love to offer their unique services to almost any conflict. Even though most love combat and proving themselves in battle, most have some form of honor. Their honorable reputation has only added value for many would-be employers. These beings can be found across the Megaverse serving as bounty hunters, bodyguards and assassins for hire.
    What makes the Malvoren most desirable as hired guns are their natural combat skills and their incredible ability to meld with weapons and other war machines. The Malvoren possess natural abilities to meld with any type of weapon, body armor, exoskeleton, power armor, combat computer, weapon system, and even cybernetics and bionics. This process involves them actually merging with the weapon or machine, making its technology part of their living body. A body that is a collection of muscle like cords wrapped up in humanoid form, and able to un-wrap and fuse with the machines of war. Once fused with any type of armor, weapon, or other war machine, these fantastic beings can power, repair, and operate the machine as an extension of their own body with the speed of thought and reflex action. These beings are almost always seen encased and melded with full suits of heavy body armor and bionics or cybernetics. This integration of machine and bionic parts confuses many into mistakenly believing that the Malvoren are some form of living neural robot or advanced cyborg.
    Although the Malvoren can bond with weapons and ma-chines - and love massive weapon systems on large military vehicles and starships - they usually prefer to merge with body armor and handheld weapons such as energy rifles, rail guns, etc. This is because they want to be the engine of their own war machine rather than pilot or run part of a larger vehicle or machine of mass destruction. It's part of their need to prove their skill and honor on the battlefield that makes them choose to fight this way. 
    Another part of their warrior honor code is to try and fight any honorable or worthy enemy with weapons equivalent to the ones possessed by their opponent. This means that if their opponent has melee weapons the Malvoren ann themselves them with the same or equivalent weapons to do battle. They never take down a worthy foe with a superior weapon, nor cheat in battle. However, an unworthy foe may be dealt with in any manner deemed expedient. Sometimes, these beings even un-meld from all of their weapons to engage a worthy opponent without weapons or equip him before they fight. In general, these alien warriors pride themselves on being capable and formidable combatants in any and all forms of combat. Despite a few psionic powers and the natural ability to meld with technology, Malvoren pride themselves on their physical prowess and fighting skills. 
    Malvoren are completely unable to understand or learn any form of magic, and this has given them a sense of disdain for those who use the mystic arts or magic weapons, as if using magic is cheating somehow. This dislike for magic is so drastic that they will NEVER pick up a magic weapon or meld with a Techno-Wizard weapon or devices even to save themselves. Al-though they are somewhat intrigued by Techno-Wizard devices, they find them to be perverse and unnatural forms of technology. 
    When not on the battlefield, a Malvoren can usually be found cleaning or tinkering with a weapon, upgrading his combat systems and looking for new work. They love to repair, upgrade, customize, and modify every weapon that crosses their path. These beings can repair, rebuild, and upgrade even weapons they are not merged with in half the normal time it would take an Operator. This affinity as a weapon mechanic alone has caused many warlords to seek out their services. 
    The Malvoren's innate understanding of mechanics extends to all machines, as they have a good understanding of the working of all machines as well as skills in mechanics and electronics. However, their grasp of mechanics and electronics and how it applies to machines that are not combat related, is somewhat less adept and of little interest to these warriors. Their mechanical skills are intuitive and based on combat and weapon technology. Malvoren avoid working on machines not designed for combat as they find them unimportant and uninteresting. When-ever they work on non-combat machines or non-combat related systems, they are very slow (takes at least twice as long as it should, probably longer), the quality of their work is always poor (slapped together good enough to get by), and they act as if they are being unfairly punished. They can, however, fix normal machines whenever they need to, and quickly if they want to. 
    Unfortunately for the Malvoren, the Splugorth have taken notice of their unique abilities. Because the Splugorth are super-natural monsters and purveyors of magic, the Malvoren refuse to work for them and, in fact, have frequently clashed with Sunaj and other Minions of Splugorth when hired by Splugorth rivals and enemies, which are many. In cruel retaliation, the Splugorth have found ways to lobotomize Malvoren and use them in Bio-Wizardry. The Malvoren have been turned into intuitive automated weapon control systems on many Splugorth battleships and other war machines. With the addition of Eyes of Eylor and Zembahk, these weapon systems require no operators and outperform systems that use a gunner or even the most advanced combat computer. Consequently, the Splugorth pay top dollar for these living weapon control systems and there is a standing bounty of one million credits per each Malvoren delivered to them alive. (Easier said than done.) 
    The Malvoren's nomadic pursuit of combat, life as soldiers, and being hunted by the Splugorth, have decreased their numbers over the years and made them a rare and valuable commodity throughout the Megaverse. One or more can be found around any major conflict working as mercenaries and assassins, but they usually avoid areas controlled by the Splugorth unless they have been hired to fight against them. In fact, the growing hatred for the Splugorth compels many Malvoren to offer their ser-vices with those embroiled in conflicts with the Splugorth. Sometimes, they'll even work for less than their going rate to get back at the evil monsters. 
    The Malvoren's origin and history is unknown, making them something of an enigma. Some have suggested the Splugorth actually created them, but this seems unlikely or the Splugorth would create more rather than hunt them. Others believe they may be supernatural in nature, though that too is a misnomer, Malvoren are mortal beings. The Malvoren themselves will only say that the Megaverse is their home, suggesting to many that they are an ancient race who have been wandering the Megaverse for so long that they no longer remember the birthplace of their race. Others wonder if they might have lost their home world in battle and that the Malvoren we know today are the descendants of the survivors. This might help explain their culture as warriors and assassins, and their lack of allegiance to any planet or people. 
    Malvoren are tall, muscular humanoids with small, black eyes that glow red then white in combat. They have no skin, and are composed of tendrils or cords of dark red muscle tissue. They have no visible mouth, nose, or ears (they are concealed by the muscle cords that wrap around the entire body, including the head and face), but they do need to eat, breathe and sleep as any other mortal being.

(see Rifts® World Book 30: D - Bees of North America pg. 138 for more information)`;
        this.image = 'assets/images/race/malvoren.jpg';
        this.availableOCCs = `A Malvoren does not get to choose an O.C.C. and must instead rely on R.C.C. skills and natural abilities.

R.C.C. Skills
    Language: Native Tongue (Trade Four and Techno-Can at +30%)
    Literacy: Native Tongue (Trade Four and Techno-Can at +20%)
    Basic Electronics (+5%)
    Bioware Mechanics
    Mathematics: Basic at 98%.
    Mathematics: Advanced (+20%)
    Mechanical Engineering
    Sensory Equipment (+5%)
    Vehicle Armorer (+20%)
    Weapon Systems (+15%)
    Weapons Engineer (+50%)
    Pilot: Two of choice.
    W.P.: Six of choice.
    Hand to Hand: Martial Arts or Assassin if evil, player's choice.

R.C.C. Related
Select four additional skills at level one, plus one additional skill at levels 4, 8, and 12. All new skills start at level one proficiency. 
    Communications: Any. 
    Cowboy: None. 
    Domestic: None. 
    Electrical: Electrical Generation and Robot Electronics only. 
    Espionage: Any. 
    Horsemanship: Any. 
    Mechanical: Any (-5%; yes that is a minus). 
    Medical: None. 
    Military: Any. 
    Physical: Any, except Acrobatics. 
    Pilot: Any (+10% on combat vehicles). 
    Pilot Related: Any. 
    Rouge: Any. 
    Science: Chemistry and Astrophysics only. 
    Technical: Language, Literacy, Computer Operation, Computer Programming, and Jury-Rig only. 
    W.P.: Any. Wilderness: Land Navigation only.

Secondary Skills
    Select four skills from the Secondary Skills List found on page 300 of Rifts® Ultimate Edition, plus two additional at levels 3 and 9. These are additional areas of knowledge that do not get any bonuses, other than any possible bonus for having a high 1.Q. All Secondary Skills start at the base skill level.`;
        this.psionicsDesc = `Telemechanics (10 normal cost), Telemechanic Paralysis (20 normal), and Telemechanic Mental Operation (12 normal). These powers can only be used when melded with a weapon, armor or machine (see Natural Abilities). 

Note: These powers only cost half the I.S.P. (as listed above) and have double the normal duration if they are being used on a weapon, suit of armor, or sensors and power systems connected to a weapon, or some form of combat computer. If these powers are used on any non-combat machine, they require twice the normal I.SP. and the duration is reduced by one half. 

The character also chooses three psi-powers from the Physical or Sensitive categories at each level of experience starting at level one. 

Considered a Major Psychic. 
I.S.P.: 2D4x10+M.E. attribute number, and an additional 10 I.S.P. per level of experience.`;
        this.abilitiesDesc = `Regeneration
Regenerates 1D6 Hit Points or S.D.C. per minute, can regenerate a lost limb within 72 hours, and as long as they are melded with any weapon, armor or device they cannot be physically transformed by any means, even magic. They regain P.P.E. at a rate of IO per hour of sleep or meditation. These beings cannot draw on P.P.E. from any other source such as mystic batteries, ley lines, or other beings. 

Beyond this, they possess the following distinctive abilities: 

Meld with Weapons (special)
This is the Malvoren's signature and most used ability. Some of the muscular tendrils unwrap to fuse with and meld into the weapon, armor, bionics or machine. Once melded with a weapon(s), the char-acter can use it as if he had a Weapon Proficiency (W.P.) for that weapon at 6 levels higher than his current experience level. In addition to the W.P. bonus, the Malvoren becomes a combat computer when using that weapon and gets one additional attack per melee with it, and is at + 1 to strike. On top of these bonuses, if the character is melded with any telescopic, laser, or other targeting systems, the bonuses from those systems are also added when using the melded weapon. 
When melded with multiple weapons, the character can fire link them together. This gives him the option to shoot with all fire-linked weapons simultaneously at the same target as one melee attack. 
Duration: It takes one melee action/attack for the character to meld with a weapon. Once the link has been established, it is maintained until the Malvoren decides to disconnect. A linked weapon feels as natural to the D-Bee as his own fingers and hands. 
P.P.E. Cost to Meld: 5 points per each item. 

Meld with Weapon Systems (special)
Through the same method of melding with weapons, the Malvoren can also merge with weapon systems, targeting computers, combat computers, radar/sensor clusters, turrets, etc. in any type of power armor, robot vehicle, tank or other combat vehicle, ship, spacecraft or weapon built into a fortification. Once bound to a weapon system the character and weapon system are one and he can control and use the system with its full bonuses and at a skill level of 95%. In addition to any standard bonuses that the weapon system may offer, the Malvoren 's meld enhances them and creates an unparalleled union, giving him an additional bonus of +2 to strike.
Duration: Takes 2 melee actions to meld and can be maintained indefinitely.
P.P.E. Cost: 8.

Meld with Armor (special)
The same as weapon melding, only this is done with body armor, ideally a heavy suit of armor. This armor can even include cyborg armor, exoskeletons or a patchwork of M.D.C. plating, shielding or piece attached to the body to become a makeshift body armor (6D6+52 M.D.C. for patchwork armor). Note: Power armor is considered a War Machine; see below for details. 
Once melded with armor, it becomes an extension of the character as if it were a living part of him, like an exoskeleton of an insect. When melded with any type of armor, its damage capacity is increased by 20% and conforms to the Malvoren 's body like a form-fitting glove. All prowl, strike, parry, dodge, or other penalties that the armor may im-pose on a normal wearer are reduced by half Furthermore, when the character is melded with a complete suit of armor, the P.S. becomes the equivalent of Robotic Strength and Mega-Damage is inflicted with his punches and kicks. 
Duration: It takes three melee actions/attacks to bond to armor. Once the meld is complete, the armor can be maintained in-definitely. 
P.P.E. Cost: 10. 

Meld with Cybernetics (special)
 With this strange power the character can meld with cybernetics and bionic weapons and parts as if they were snap-on pieces. No surgery is needed. The Malvoren simply places the bionic component where he wants it and it merges with his body. Cybernetics can be used to add to the D-Bee's body or even replace missing body parts by having those parts meld completely with his body. This can include any cybernetic internal organs, eyes, ears, arms, legs and weapons. Most Malvoren seek cybernetic eyes and other sensory implants, as all of their natural senses are poor. Malvoren seldom replace a natural limb with a bionic one, because they regrow lost limbs in a few days, but may use bionic limbs as additional appendages plugged into the body. Many Malvoren have extra arms or tentacles attached. In more extreme cases, some Malvoren have even melded their entire lower torso to a bionic type of vehicle or animal frame. When they are done with the vehicle lower body, they disconnect and regrow the legs and groin within seven days. 
These beings can, of course, also meld with bionic and cybernetic weapons to create shoulder mounted weapons, fore-arm weapons, claws, and other types of common bionic weaponry. 
Melding with cybernetics and bionics is somewhat painful and does I D6 S.D.C. and I D4 Hit Points of damage when they meld with or un-meld with each artificial part. Full re-placement limbs or torso frames do three times as much damage, require triple the time to meld with, and cost three times the normal P.P.E. When the character un-melds with any cybernetics, the original organ or body part reforms as the cybernetic part is dispelled. Un-melding with a major cybernetic that has replaced a limb or an entire torso takes a full minute. 
Duration: Takes one melee round to meld and can be maintained indefinitely. 
P.P.E. Cost: 10. 

Power Weapons (special)
Another one of the Malvoren's phenomenal powers is the ability to power weapons the individual has joined to his body. By expending a few P.P.E. and, in some cases, a few S.D.C. or Hit Points, the D-Bee can recharge the energy cell or clip, or power any weapon. To charge an energy weapon the character simply channels some of his P.P.E. and converts it into conventional energy for that weapon. Because of the low amount of expendable P.P.E. that they usually have, and the high amount of P.P.E. it takes to charge weapons and E-Clips, the Malvoren usually choose to use energy and ammunition stored in conventional clips before powering the weapon themselves. They most often resort to powering a weapon themselves when faced with an enemy who is not vulnerable to conventional weapons so they may inflict damage on them. 
If the weapon is a rail gun or other form of weapon that fires a slug or flechette, the character must convert some of his own flesh and bone into the projectile along with channeling P.P.E. to provide the weapon with ammunition. Projectiles that require chemicals or moving parts like bullets, grenades or missiles can NOT be recreated by this power. 
A strange side effect of damage from a weapon melded with and powered by the Malvoren is that it will harm creatures normally immune to conventional weapons. Any creature that can be harmed by magic or psionics will take full damage even if they are normally immune to that type of damage. This even includes beings like Vampires, Were-wolves, and even Cosmo-Knights! 
Duration: Instant; any charge to an energy cell or ammo created will last until it is used. P.P.E. 
Cost: Varies. Standard E-Clip: 10 P.P.E., Long E-Clip: 15 P.P.E., Canister, FSE or similar type of energy cell: 25 P.P.E., Large Energy Cell like a backpack: 40 P.P.E. Directly powering a weapon costs 1 P.P.E. per die of damage, per shot or blast, and creating rail gun ammo costs 10 P.P.E and I D6 S.D.C. or Hit Points per slug, or 20 P.P.E. and 3D6 S.D.C. or Hit Points per flechette or burst. This also provides the power to fire a single shot or burst. 

Heal & Repair Weapons and Armor (special)
Once the Malvoren has melded with a weapon, armor, or other war machine, he can heal or repair it using his own body and P.P.E. This healing or repair cannot replace missing parts or add new ones, it can only rebuild and mend what is still there. Armor must still have 20% of its damage capacity or it is beyond the character's ability to heal it. 
Duration: One melee attack per 10 M.D.C. or S.D.C. healed; permanent. 
Cost (Special): 1 P.P.E. and 1 S.D.C. or Hit Point per 1 S.D.C. restored, or 5 P.P.E. and 10 S.D.C. or Hit Points per 1 M.D.C. restored. 
Note: In addition to being able to transfer S.D.C. or Hit Points to armor or weapons as below, all weapons, cybernetics, or armor melded to the character heal 1D6 M.D.C. per hour. Only 1D6 M.D.C. total is healed between all items. Healing will usually first take place with cybernetics, then armor, and last with weapons. This automatic healing does not require any thought or energy, it just happens.

Meld with War Machines (special)
This is the power to bond to and become one with any machine of war. Machines of war include any power armor, tank or other combat vehicle, robot vehicle, or fighter craft. Generally, the Malvoren prefers to meld with armor and handheld weapons to become an engine of war himself. Sometimes however, this is not enough firepower to get the job done. In these cases, the character may meld with any war machine, becoming one with every system in the vehicle or power armor. Once melded with a war machine the character has the equivalent of Pilot: Robot Combat Elite, Pilot: Tanks, Pilot: Fighter, Pilot: Patrol Boat, or equivalent appropriate skills for that vehicle at a proficiency four levels higher than his current level of experience. 
Duration: It takes one full melee round to meld, but may be maintained indefinitely. 
P.P.E. Cost: 15. 

Meld With Non-Combat Machines (special)
Although rare for them to do so and painful, Malvoren can meld with machines that are not used for combat. Whenever the character melds with a non-combat machine, the melding inflicts 2D6 S.D.C. and I D6 Hit Points of damage. They also suffer this damage when they un-meld with the machine. Once melded with any type of machine, the character has a basic understanding of how to operate or pilot it at a level one proficiency. 
Duration: It takes one full melee round to meld, lasts 1D6 minutes per level of experience. 
P.P.E. Cost: 25. 

Un-Melding (special)
Un-melding with each item takes only one melee action, with the exception of some cybernetics as mentioned above.

Vulnerabilities
Malvoren have poor natural vision that can only see in the ultraviolet and infrared spectrums, and poor hearing. This is part of what attracts them to melding with cybernetic sensory implants. 

Melding Limitations
One of the biggest limitations of the melding powers is that whenever a Malvoren melds with a weapon, suit of armor, cybernetic system, or machine, he does not recover the P.P.E. spent on that melding or any physical damage taken by that melding until he un-melds with the item. After un-melding with an item, the D-Bee regains the P.P.E., S.D.C., and Hit Points used to originally meld with it at the normal rate of recovery (noted previously). A side effect that they suffer if they meld with too many items is the loss of non-Telemechanic psionic powers and 50% of the base I.S.P. This occurs when a Malvoren melds with enough cybernetics, weapons, and armor to become more than 50% machine. To become more than fifty percent machine, a Malvoren must meld with four or more additional/replacement limbs along with four cybernetics, meld with a cyborg torso and four cybernetics, or 12 or more cybernetic items of any type, or meld with more than 12 total weapons plus cybernetics and/or armor. This is generally what should constitute 50% machine, but it may take more or less than these numbers of melding, as the Game Master sees fit.`;
        this.magicDesc = `None; Malvoren have no magic potential and cannot even use Techno-Wizardry items, despite being psychic.`;
        this.cyberneticsDesc = `Starts off with up to 1D4 cybernetic implants and may have one bionic limb (additional limb or replacement melded with an original) with up to two weapon systems. These bionic and cybernetic systems are melded (see natural abilities above) to the character and not surgically implanted.`;
        this.heightMin = 7;
        this.heightMax = 9;
        this.weightMin = 270;
        this.weightMax = 330;
        this.lifespan = {sides:6, amount:4, bonus: 135};
        this.lifespanDesc = `years. Reaches physical maturity at age 16, but their shape-shifting abilities usually manifest by age 7. Females give birth to one child after a nine month pregnancy and can bear children until 72 years of age.`;
        this.disposition = `Honorable, if not outright noble, always keep their word of honor; trustworthy. They respect those who show them respect and honor. Opponents without honor are dogs never to be trusted and, like mad dogs, need to be put down by any means necessary. Such unworthy opponents do not deserve mercy or honor. Allies without honor are to be pitied and used as a means to an end. Malvoren without honor are a disgrace and a disappointment.`;
        this.habitat = `Any, but prefer high-tech war-tom places. On Rifts Earth they are most often encountered in North America working for one mercenary company or another.`;
        this.allies = `Anyone, regardless of O.C.C. or race, who exhibits courage, honesty, and honor. That would include Cyber-Knights, Blucies, Kraks, and Lynn-Srial. As a dimensional traveler, they know other dimension-spanning beings, including Naruni, True Atlanteans, Temporal Raiders, Minions of Splugorth and many, many others.`;
        this.rivals = `The Splugorth, Sunaj, and other Minions of Splugorth are despised above all others. They also dislike Dirari Ecto-Men, Ganka, Lanotaur Hunters, Loaks, and those without a strong sense of honor. As guns for hire, their employer's enemies become their enemies, but as a matter of business Malvoren don't hate them on a personal level.`;
        this.alignment = `Any, but typically Aberrant (40%), Scrupulous (30%), or Principled (10%), and even those of other alignments tend to display some measure of honor.`;
        this.skillsDesc = 'See Malvoren RCC info';
        this.iqRoll = { sides: 6, amount: 3 };
        this.meRoll = { sides: 6, amount: 3, bonus: 2 };
        this.maRoll = { sides: 6, amount: 2 };
        this.psRoll = { sides: 6, amount: 4, bonus: 10 };
        this.ppRoll = { sides: 6, amount: 3, bonus: 4 };
        this.peRoll = { sides: 6, amount: 3, bonus: 4 };
        this.pbRoll = { sides: 4, amount: 2 };
        this.spdRoll = { sides: 6, amount: 3, bonus: 4 };
        this.hpText = 'PEx3';
        this.hpLvl = { sides: 6, amount:2 };
        this.sdc = { sides: 4, amount: 3, multiplier: 10, bonus: 20 };
        this.ppeText = 'PE+3D6x10';
        this.ppeLvl =  { bonus: 10 };
        this.credits = { sides: 6, amount: 6, multiplier: 1000 };
        this.ispText = 'ME+2D4x10';
        this.ispLvl = { bonus: 10 };
        this.horror = { bonus: 10 };
        this.attacksBonus = { bonus: 1 };
        this.initiativeBonus = { bonus: 3 };
        this.strikeBonus = { bonus: 1 };
        this.parryBonus = { bonus: 2 };
        this.dodgeBonus = { bonus: 2 };
        this.disarmBonus = { bonus: 3 };
        this.entangleBonus = { bonus: 2 };
        this.rollBonus = { bonus: 1 };
        this.diseaseBonus = { bonus: 2 };
        this.poisonBonus = { bonus: 2 };
        this.horrorBonus = { bonus: 4 };
        this.otherBonusText = '';
    }

    getSecondary(character) {
        character.secondaryStats.hp.initialValue = character.attributes.pe.total * 3;
        character.secondaryStats.ppe.initialValue = character.attributes.pe.total;
        character.secondaryStats.isp.initialValue = character.attributes.me.total;
    }

    rollSecondary(character) {
        character.psionics.randomPsionics = false;
        character.secondaryStats.ppe.raceBonus = random.dice(6,3).reduce((a, b) => a + b, 0) * 10;
        character.secondaryStats.isp.raceBonus = random.dice(4,2).reduce((a, b) => a + b, 0) * 10;

        let me = character.attributes.me
        if (me.raceTotal > 17) {
            me.attributeRoll.push(random.die(6));
            me.raceTotal = me.attributeRoll.reduce((a, b) => a + b, 0) + me.bonus;
        }

        character.abilities.regeneration =
            {
                name: 'Regeneration',
                description: `Regenerates 1D6 Hit Points or S.D.C. per minute, can regenerate a lost limb within 72 hours, and as long as they are melded with any weapon, armor or device they cannot be physically transformed by any means, even magic. They regain P.P.E. at a rate of IO per hour of sleep or meditation. These beings cannot draw on P.P.E. from any other source such as mystic batteries, ley lines, or other beings.`,
                type: `Racial`
            }

        character.abilities.meldWithWeapons =
            {
                name: 'Meld with Weapons (special)',
                description: `This is the Malvoren's signature and most used ability. Some of the muscular tendrils unwrap to fuse with and meld into the weapon, armor, bionics or machine. Once melded with a weapon(s), the character can use it as if he had a Weapon Proficiency (W.P.) for that weapon at 6 levels higher than his current experience level. In addition to the W.P. bonus, the Malvoren becomes a combat computer when using that weapon and gets one additional attack per melee with it, and is at + 1 to strike. On top of these bonuses, if the character is melded with any telescopic, laser, or other targeting systems, the bonuses from those systems are also added when using the melded weapon. 
When melded with multiple weapons, the character can fire link them together. This gives him the option to shoot with all fire-linked weapons simultaneously at the same target as one melee attack.`,
                cost: `5 P.P.E. per each item. `,
                duration: `It takes one melee action/attack for the character to meld with a weapon and can be maintained indefinitely.`,
                type: `Racial`,
                note: `Once the link has been established, it is maintained until the Malvoren decides to disconnect. A linked weapon feels as natural to the D-Bee as his own fingers and hands.`
            }

        character.abilities.meldWithWeaponSystems =
            {
                name: 'Meld with Weapon Systems (special)',
                description: `Through the same method of melding with weapons, the Malvoren can also merge with weapon systems, targeting computers, combat computers, radar/sensor clusters, turrets, etc. in any type of power armor, robot vehicle, tank or other combat vehicle, ship, spacecraft or weapon built into a fortification. Once bound to a weapon system the character and weapon system are one and he can control and use the system with its full bonuses and at a skill level of 95%. In addition to any standard bonuses that the weapon system may offer, the Malvoren 's meld enhances them and creates an unparalleled union, giving him an additional bonus of +2 to strike.`,
                cost: `8 P.P.E.`,
                duration: `Takes 2 melee actions to meld and can be maintained indefinitely.`,
                type: `Racial`
            }

        character.abilities.meldWithArmor =
            {
                name: 'Meld with Armor (special)',
                description: `The same as weapon melding, only this is done with body armor, ideally a heavy suit of armor. This armor can even include cyborg armor, exoskeletons or a patchwork of M.D.C. plating, shielding or piece attached to the body to become a makeshift body armor (6D6+52 M.D.C. for patchwork armor). Note: Power armor is considered a War Machine; see below for details. 
Once melded with armor, it becomes an extension of the character as if it were a living part of him, like an exoskeleton of an insect. When melded with any type of armor, its damage capacity is increased by 20% and conforms to the Malvoren 's body like a form-fitting glove. All prowl, strike, parry, dodge, or other penalties that the armor may im-pose on a normal wearer are reduced by half Furthermore, when the character is melded with a complete suit of armor, the P.S. becomes the equivalent of Robotic Strength and Mega-Damage is inflicted with his punches and kicks.`,
                cost: `10 P.P.E.`,
                duration: `It takes three melee actions/attacks to bond to armor and can be maintained indefinitely.`,
                type: `Racial`
            }

        character.abilities.meldWithCybernetics =
            {
                name: 'Meld with Cybernetics (special)',
                description: `With this strange power the character can meld with cybernetics and bionic weapons and parts as if they were snap-on pieces. No surgery is needed. The Malvoren simply places the bionic component where he wants it and it merges with his body. Cybernetics can be used to add to the D-Bee's body or even replace missing body parts by having those parts meld completely with his body. This can include any cybernetic internal organs, eyes, ears, arms, legs and weapons. Most Malvoren seek cybernetic eyes and other sensory implants, as all of their natural senses are poor. Malvoren seldom replace a natural limb with a bionic one, because they regrow lost limbs in a few days, but may use bionic limbs as additional appendages plugged into the body. Many Malvoren have extra arms or tentacles attached. In more extreme cases, some Malvoren have even melded their entire lower torso to a bionic type of vehicle or animal frame. When they are done with the vehicle lower body, they disconnect and regrow the legs and groin within seven days. 
These beings can, of course, also meld with bionic and cybernetic weapons to create shoulder mounted weapons, fore-arm weapons, claws, and other types of common bionic weaponry. 
Melding with cybernetics and bionics is somewhat painful and does I D6 S.D.C. and I D4 Hit Points of damage when they meld with or un-meld with each artificial part. Full re-placement limbs or torso frames do three times as much damage, require triple the time to meld with, and cost three times the normal P.P.E. When the character un-melds with any cybernetics, the original organ or body part reforms as the cybernetic part is dispelled. Un-melding with a major cybernetic that has replaced a limb or an entire torso takes a full minute.`,
                cost: `10 P.P.E.`,
                duration: `Takes one melee round to meld and can be maintained indefinitely.`,
                type: `Racial`
            }

        character.abilities.powerWeapons =
            {
                name: 'Power Weapons (special)',
                description: `Another one of the Malvoren's phenomenal powers is the ability to power weapons the individual has joined to his body. By expending a few P.P.E. and, in some cases, a few S.D.C. or Hit Points, the D-Bee can recharge the energy cell or clip, or power any weapon. To charge an energy weapon the character simply channels some of his P.P.E. and converts it into conventional energy for that weapon. Because of the low amount of expendable P.P.E. that they usually have, and the high amount of P.P.E. it takes to charge weapons and E-Clips, the Malvoren usually choose to use energy and ammunition stored in conventional clips before powering the weapon themselves. They most often resort to powering a weapon themselves when faced with an enemy who is not vulnerable to conventional weapons so they may inflict damage on them. 
If the weapon is a rail gun or other form of weapon that fires a slug or flechette, the character must convert some of his own flesh and bone into the projectile along with channeling P.P.E. to provide the weapon with ammunition. Projectiles that require chemicals or moving parts like bullets, grenades or missiles can NOT be recreated by this power. 
A strange side effect of damage from a weapon melded with and powered by the Malvoren is that it will harm creatures normally immune to conventional weapons. Any creature that can be harmed by magic or psionics will take full damage even if they are normally immune to that type of damage. This even includes beings like Vampires, Were-wolves, and even Cosmo-Knights!`,
                cost: `Varies; See note.`,
                duration: `Instant; any charge to an energy cell or ammo created will last until it is used. P.P.E.`,
                type: `Racial`,
                note: `Standard E-Clip: 10 P.P.E., Long E-Clip: 15 P.P.E., Canister, FSE or similar type of energy cell: 25 P.P.E., Large Energy Cell like a backpack: 40 P.P.E. Directly powering a weapon costs 1 P.P.E. per die of damage, per shot or blast, and creating rail gun ammo costs 10 P.P.E and I D6 S.D.C. or Hit Points per slug, or 20 P.P.E. and 3D6 S.D.C. or Hit Points per flechette or burst. This also provides the power to fire a single shot or burst.`
            }

        character.abilities.healAndRepairWeaponsAndArmor =
            {
                name: 'Heal & Repair Weapons and Armor (special)',
                description: `Once the Malvoren has melded with a weapon, armor, or other war machine, he can heal or repair it using his own body and P.P.E. This healing or repair cannot replace missing parts or add new ones, it can only rebuild and mend what is still there. Armor must still have 20% of its damage capacity or it is beyond the character's ability to heal it.`,
                cost: `1 P.P.E. and 1 S.D.C. or Hit Point per 1 S.D.C. restored, or 5 P.P.E. and 10 S.D.C. or Hit Points per 1 M.D.C. restored.`,
                duration: `One melee attack per 10 M.D.C. or S.D.C. healed; permanent.`,
                type: `Racial`,
                note: `In addition to being able to transfer S.D.C. or Hit Points to armor or weapons as below, all weapons, cybernetics, or armor melded to the character heal 1D6 M.D.C. per hour. Only 1D6 M.D.C. total is healed between all items. Healing will usually first take place with cybernetics, then armor, and last with weapons. This automatic healing does not require any thought or energy, it just happens.`
            }

        character.abilities.meldWithWarMachines =
            {
                name: 'Meld with War Machines (special)',
                description: `This is the power to bond to and become one with any machine of war. Machines of war include any power armor, tank or other combat vehicle, robot vehicle, or fighter craft. Generally, the Malvoren prefers to meld with armor and handheld weapons to become an engine of war himself. Sometimes however, this is not enough firepower to get the job done. In these cases, the character may meld with any war machine, becoming one with every system in the vehicle or power armor. Once melded with a war machine the character has the equivalent of Pilot: Robot Combat Elite, Pilot: Tanks, Pilot: Fighter, Pilot: Patrol Boat, or equivalent appropriate skills for that vehicle at a proficiency four levels higher than his current level of experience.`,
                cost: `15 P.P.E.`,
                duration: `It takes one full melee round to meld, but may be maintained indefinitely.`,
                type: `Racial`
            }

        character.abilities.meldWithNonCombatMachines =
            {
                name: 'Meld With Non-Combat Machines (special)',
                description: `Although rare for them to do so and painful, Malvoren can meld with machines that are not used for combat. Whenever the character melds with a non-combat machine, the melding inflicts 2D6 S.D.C. and I D6 Hit Points of damage. They also suffer this damage when they un-meld with the machine. Once melded with any type of machine, the character has a basic understanding of how to operate or pilot it at a level one proficiency.`,
                cost: `25 P.P.E.`,
                duration: `It takes one full melee round to meld, lasts 1D6 minutes per level of experience.`,
                type: `Racial`
            }

        character.abilities.unMelding =
            {
                name: 'Un-Melding (special)',
                description: `Un-melding with each item takes only one melee action, with the exception of some cybernetics as mentioned above.`,
                type: `Racial`
            }

        character.abilities.vulnerabilities =
            {
                name: 'Vulnerabilities',
                description: `Malvoren have poor natural vision that can only see in the ultraviolet and infrared spectrums, and poor hearing. This is part of what attracts them to melding with cybernetic sensory implants.`,
                type: `Racial`
            }

        character.abilities.meldingLimitations=
            {
                name: 'Melding Limitations',
                description: `One of the biggest limitations of the melding powers is that whenever a Malvoren melds with a weapon, suit of armor, cybernetic system, or machine, he does not recover the P.P.E. spent on that melding or any physical damage taken by that melding until he un-melds with the item. After un-melding with an item, the D-Bee regains the P.P.E., S.D.C., and Hit Points used to originally meld with it at the normal rate of recovery (noted previously). A side effect that they suffer if they meld with too many items is the loss of non-Telemechanic psionic powers and 50% of the base I.S.P. This occurs when a Malvoren melds with enough cybernetics, weapons, and armor to become more than 50% machine. To become more than fifty percent machine, a Malvoren must meld with four or more additional/replacement limbs along with four cybernetics, meld with a cyborg torso and four cybernetics, or 12 or more cybernetic items of any type, or meld with more than 12 total weapons plus cybernetics and/or armor. This is generally what should constitute 50% machine, but it may take more or less than these numbers of melding, as the Game Master sees fit.`,
                type: `Racial`
            }

        character.psionics.ability = 'Racial'
        character.psionics.selected = false;
        character.psionics.total = 3;
        character.psionics.type = 'Major';
        character.psionics.superPsionics = {
            free: [
                {
                    name: 'telemechanics',
                    specialNote: `This power only cost half the I.S.P. (as listed above) and has double the normal duration if it is being used on a weapon, suit of armor, or sensors and power systems connected to a weapon, or some form of combat computer. If this power is used on any non-combat machine, it requires twice the normal I.S.P. and the duration is reduced by one half.`
                },
                {
                    name: 'telemechanicParalysis',
                    specialNote: `This power only cost half the I.S.P. (as listed above) and has double the normal duration if it is being used on a weapon, suit of armor, or sensors and power systems connected to a weapon, or some form of combat computer. If this power is used on any non-combat machine, it requires twice the normal I.S.P. and the duration is reduced by one half.`
                },
                {
                    name: 'telemechanicMentalOperation',
                    specialNote: `This power only cost half the I.S.P. (as listed above) and has double the normal duration if it is being used on a weapon, suit of armor, or sensors and power systems connected to a weapon, or some form of combat computer. If this power is used on any non-combat machine, it requires twice the normal I.S.P. and the duration is reduced by one half.`
                }
            ],
            unavailable: [
                {
                    name: 'All'
                }
            ]
        }
        character.psionics.healingPsionics = {
            unavailable: [
                {
                    name: 'All'
                }
            ]
        }
    }

    pushRCC(character) {
        character.occ = new MalvorenRCC;
    }
}

module.exports = Malvoren;