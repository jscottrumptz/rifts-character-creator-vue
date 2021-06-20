const Race = require('../Race');
const { Random } = require('random-js');
const random = new Random;
const Cook = require('../Skills/Cook');
const LandNavigation = require('../Skills/LandNavigation');
const WildernessSurvivalWilderness = require('../Skills/WildernessSurvivalWilderness');
const WPBlunt = require('../Skills/WPBlunt');

class Larmac extends Race {
    constructor() {
        super();
        this.name = 'Larmac';

        this.description = `    The Larmac are big, beefy D-Bees who resemble giant homed toads or lizards, right down to their rough, scaly and blotchy tan or greenish gray skin. A pair of small horns crown the top of their head, with two smaller ones off to the back and side above where one might expect to see their ears. Like a lizard, they have holes in the sides of the head for ears, small eyes and nose, long muzzle and a large mouth filled with jagged, un-even teeth. Despite these reptilian features, the hulking D-Bee is a bipedal mammal. Males have hair on their chin, chest, arms and legs, while females have a more slender build, smaller muzzle, smaller horns and two pairs of small breasts. 
    Larmac are a study in contrast. Reasonably intelligent, large and physically powerful, they can make formidable combatants and warriors to be feared. In fact, most survive as tough scavengers, rough and tumble bandits, and brazen warriors using strong-arm techniques, intimidation and brute force to get by. But that's just it, most Larmac are underachievers who only do enough work to get by and make do on very little. They dream of making it big, but they are low key, easygoing, unmotivated, complacent and downright lazy. The typical Larmac doesn't mind sleeping in the gutter, rummaging through garbage, pan-handling, stealing, intimidating other people into giving him money or buying him food or drink, or beating and robbing people. Of course, they'd just as happily make money gambling or chatting it up and having people buy them drinks for the privilege of their company, but sometimes you have to grab that fruit pie off the windowsill or coat off the truck. Always looking for "easy money" and a "sweet deal," Larmac often associate with criminals, gamblers and lowlifes, and make a living (if you can call it that) as petty crooks, informants, runners, lookouts, bouncers, leg breakers, enforcers, body guards, and strong men. 
    When not "working," Larmac have four favorite hobbies: partying, eating, boozing and sleeping. The big D-Bees have been known to party, or "hop" from one to another, for days at a time if they can arrange it. When partied out, they'll sleep or lounge around for just as many days, getting up only to eat, drink and relieve themselves. Natural born freeloaders, they stay with an easy job even if they could get something better doing only slightly more work. Likewise, even highly motivated Larmac adventurers and mercenaries stop to stretch out and relax or eat at every opportunity. And when they stop for a little rest and relaxation, the money and booze flow and they party hard. 
    This laid back and easy going disposition can be a good thing when tempers flare, because a Larmac rarely takes action on either side, although he may weigh in with a bit of verbal support ("I'm with him, so shut up, I'm trying to get some beauty sleep.") or stir the pot with a joke ("What are you getting angry about? You can't help it if you're ugly. You were born that way."). Attacking a Larmac with words is pointless as they are difficult to rile, go with the flow and prefer to focus on having fun, eating, drinking or sleeping rather than defending their honor or the honor of their buddies. ("Yeah, yeah, we're all worthless, lazy pigs. Why isn't anybody dancing?") One will know when the hulking warrior is angry when he growls something like, "Don't make me get up." And if he does get up, one can expect a serious fight on their hands. Even a Larmac only tolerates so much. 
    Although lazy in the extreme, not all Larmac are shiftless, and even the shiftless ones can be motivated. What motivates a Larmac? Dangling the "big score" and/or "easy street" at him will do it every time. ("You can retire if we can pull this job off." Or, "You'll make so much money you'll live like a king." Or, "People will be so grateful, you'll never have to pay for a meal or a drink again." And so on.) It's not that Larmac are stupid or gullible, because they aren't, it's that they are always willing to work hard for a few days, even a few weeks, if there is the promise of a big payoff in the end. And if that payoff doesn't materialize? Most shrug it off or insist the person who talked them into this waste of time buys them several drinks and a good meal. That's just the way they are. Make a Larmac clean a latrine or stand guard duty and one can expect a lousy job and a sleeping guard. Promise the big lug a week - or better yet, a month - off or easy duty, and one can expect to see a latrine so clean it sparkles. Likewise, if the Larmac is guarding the loot, person or place that leads to "easy street" he'll watch it like a hawk and stay awake and alert for 72 hours at a stretch, and fight to the death to protect it! Consequently, if the job doesn't take too long, and his employer knows how to motivate him, a Larmac can be convinced to do almost anything. It's simply a matter of appealing to their nature. Despite the sloth and devil-may-care attitudes of most Larmac, when one of them comes to consider somebody his friend, the hulking D-Bee is loyal and trustworthy to a fault, especially if he is of an Unprincipled or good alignment. On the other hand, Anarchist and evil Larmac are typically cheating, self-serving, backstabbing scum who will betray their own mother if it means a big score or saving their own hide. 
    Ironically, most Larmac are gamblers willing to take high risks and outrageous chances to get what they want. And that re-ward doesn't always have to be money or an easy time. It can be having the joy of showing someone up, saying "I told ya so," helping a friend or extracting revenge. It is difficult sometimes to identify everything that motivates a Larmac, especially those of good alignment or leaning that way. Cruel jokes leveled at him bounce off like rain drops, but teasing a child till he cries, threatening the kindly barmaid and other acts of cruelty leveled at others often get a good Larmac to stir from his rest, dining or revelry long enough to a stop to it. 

(see Rifts® World Book 30: D - Bees of North America pg. 118 for more information)`;
        this.image = 'assets/images/race/larmac.jpg';
        this.alias = `"Lard Butts," "Lazy Lards" and "Lazy Lizards" by the Coalition and others who find them to be worthless, obese miscreants.`;
        this.alignment = 'Any, but the majority are Unprincipled (30%), Anarchist (30%), Aberrant ( I 0%) or Miscreant (20%).';
        this.availableOCCs = `  These underachievers are typically one of the following Adventurer or Men at Arms O.C.C.s (pick one): Bandit, Thief Gambler, Highway Man, Sailor, Pirate, Grunt (or thug/musclemen), Saloon Bum, Barmaid (if female), Saddle Tramp, Stoolie or Vagabond. Only the most ambitious will consider becoming a Wilderness Scout, Trapper-Woodman, Professional Gambler, Pecos Raider, Mere Soldier or Sheriff's Deputy. And only the most fortunate possess any psionics. Note: Can NOT select most Men at Arms or psionic O.C.C.s, including the Mystic.`;
        this.excludedOCCGroups = ['Practitioners of Magic', 'Psychics', 'Men at Arms'];
        this.excludedOCCs = ['Rogue Scholar', 'Rogue Scientist', 'Body Fixer', 'Cyber-Doc', 'Operator'];
        this.skillsDesc = `    Cook (+20%)
    Land Navigation (+20%)
    and Wilderness Survival (+20%)
    W.P. Blunt
in addition to skills from an O.C.C. `;
        this.psionicsDesc = `Psionics: Larmac love psionic powers. Unfortunately, psychic abilities are rare among their race. To determine if a character has psionics, roll percentile on the following table:
    01-02% Master Psionics (select a Psionic O.C.C.) 
    03-07% Major Psionics. 
    08-15% Minor Psionics. 
    16-00% No Psionics. 
Their love affair with psychic powers (a way to find "easy street") has led many a Larmac to become addicted to Psi-Cola. By 109 P.A., an estimated 25-30% are hooked on the stuff (see Rifts® World Book 12: Psyscape™, page 84, for details on Psi-Cola).`;
        this.magicDesc = `None. Larmac are too lazy to spend the time to study magic, but they love magic items.`;
        this.abilitiesDesc = `Nightvision 300 feet (91.5 m), +6 to save vs poison, disease and drugs, and recover M.D.C. at a rate of 2D6+3 per day. Larmac have voracious appetites in many areas, food and libations being two of them. However, although the D-Bees seem to be constantly eating they can go without food for as long as a week (7 days) without any debilitating physical side affects and without water for four days before starting to feel the effects of dehydration. 

Their thick, tan, Mega-Damage hide also provides protection in the sun, enabling them to trek through a desert at day-time without suffering from heat exhaustion or dehydration. Likewise, their hide and the layer of blubber underneath helps insulate them from cold temperatures as low as 40 degrees Fahrenheit below zero (can play buck-naked in arctic snow without any ill effect; not that anyone would want to be witness to such an event). Despite their natural resistance to the forces of nature, Larmac usually avoid extreme environments, mainly because nobody lives there and there's no fun to be had.`;
        this.vulnerabilities = `-1 on initiative unless highly motivated and is always -3 to save vs illusions. `;
        this.cyberneticsDesc = `Most Larmac avoid cybernetics, but may get minor implants and bionic prosthetics to repair injuries. Being an alien, most human bionic systems must be modified for use on a Larmac and always look mechanical. Bio-Systems are out of the question.`;
        this.disposition = `Fat and lazy party animals, gamblers and freeloaders. Most Larmac just want to be left alone and coast through life taking it easy. Consequently, they are always looking for "easy street" and the "big score." Anybody who gives them grief or demands more action out of them than they are willing to give, quickly get on their bad side and make them cranky.`;
        this.habitat = `Larmac originate from the Saint Louis and Detroit-Windsor Rifts and have spread out from there. Today, they are found in large numbers throughout lower Canada, the Pecos Empire and what was once known as the Central and Eastern United States. Cities and slums where the Larmac can lose themselves, live on the streets, booze it up and take it easy are their favorite habitats. Their favorite haunts are seedy taverns/saloons/bars, nightclubs, gambling halls, casinos, race tracks, drug dens, dance halls, street corners, and houses of ill-repute. Larmac can be found at cities and towns from the Mexican border to northern Canada. The 'Burbs are filled with them. 
Thousands lived and died in the Kingdom of Tolkeen. Surprisingly, the tragedy of war and Tolkeen's fall has sobered up many of the Larmac forced to leave as refugees. Many have even become more responsible and hardworking. Most are anti-Coalition and some have even joined resistance groups and Retribution Squads.`;
        this.allies = `Anybody willing to put up with their laziness, sloppiness and casual attitude. Larmac generally like humans, Floopers, D'norr Devilmen, Kraks and most anybody who is not too driven, fanatical or mean-spirited. They love to drink and party, and especially appreciate people who allow them to sponge off them without complaint or expectations.`;
        this.rivals = `The Coalition States, Federation of Magic, Greot Hunters, and Vanguard Brawlers. Dislike scholars, teachers, and scientists as know-it-alls, and highly motivated, energetic, A-type personalities out of general principle. Devilmen are okay though, because they don't try to push Larmac to do better, and accept them for what they are. These carefree O-Bees also tend to dislike power-mongers, tyrants and slavers too.`;
        this.heightMin = 6;
        this.heightMax = 7;
        this.weightMin = 250;
        this.weightMax = 500;
        this.lifespan = { sides: 6, amount: 5, bonus: 90 };
        this.lifespanDesc = `years. Physical maturity is reached by age 17, but emotional maturity doesn't usually happen till their 30s, 40s, or 50s. Females give birth to litters of 1D4+ 1 young after a 12 month pregnancy. They can bear young till the age of 50. Young are usually raised by their mothers as the fathers are often absent.`;
        this.sizeDesc = 'feet tall.';
        this.weightDesc = 'lbs. Larmac tend to be broad, barrel chested, heavy humanoids who look to be over-weight by 40% to double their optimum weight.';
        this.iqRoll = { sides: 6, amount: 2, bonus: 3 };
        this.meRoll = { sides: 6, amount: 2, bonus: 3 };
        this.maRoll = { sides: 6, amount: 2 };
        this.psRoll = { sides: 6, amount: 4, bonus: 16 };
        this.ppRoll = { sides: 6, amount: 3 };
        this.peRoll = { sides: 6, amount: 3, bonus: 5 };
        this.pbRoll = { sides: 6, amount: 1, bonus: 3 };
        this.spdRoll = { sides: 6, amount: 2, bonus: 5 };
        this.hpText = '6D6 +P.E.';
        this.sdc = { sides: 6, amount: 6 };
        this.mdcLvl = { sides: 4, amount: 2};
        this.mdcText = '5D6+P.E.';
        this.mdcDay = { sides: 6, amount: 2, bonus: 3};
        this.ppe = { sides: 6, amount: 1 };
        this.horrorBonus = { bonus: 5 };
        this.drugsBonus = { bonus: 6 };
        this.poisonBonus = { bonus: 6 };
        this.diseaseBonus = { bonus: 6 };
        this.illusionBonus = { bonus: -3 };
        this.initiativeBonus = { bonus: -1 };
        this.horror = { bonus: 12 };
    }

    rollSecondary(character) {
        character.attributes.strType = 'Robot'
        character.secondaryStats.mdc.raceBonus = random.dice(6,5).reduce((a, b) => a + b, 0);
        character.secondaryStats.hp.raceBonus = random.dice(6,6).reduce((a, b) => a + b, 0);

        character.abilities.nightvision =
            {
                name: 'Nightvision',
                range: `300 feet (91.5 m)`,
                type: `Racial`
            }

        character.abilities.ironStomach =
            {
                name: 'Iron Stomach',
                description: `Larmac have voracious appetites in many areas, food and libations being two of them. However, although the D-Bees seem to be constantly eating they can go without food for as long as a week (7 days) without any debilitating physical side affects and without water for four days before starting to feel the effects of dehydration.`,
                type: `Racial`
            }

        character.abilities.thickHide =
            {
                name: 'Thick Hide',
                description: `Their thick, tan, Mega-Damage hide also provides protection in the sun, enabling them to trek through a desert at day-time without suffering from heat exhaustion or dehydration. Likewise, their hide and the layer of blubber underneath helps insulate them from cold temperatures as low as 40 degrees Fahrenheit below zero (can play buck-naked in arctic snow without any ill effect; not that anyone would want to be witness to such an event). Despite their natural resistance to the forces of nature, Larmac usually avoid extreme environments, mainly because nobody lives there and there's no fun to be had.`,
                type: `Racial`
            }

        character.abilities.selfPreservation =
            {
                name: 'Self Preservation',
                description: `When highly motivated or fighting to save his own life, the Larmac gets +1 melee action/attack, +1 on initiative and +1 to parry or dodge.`,
                type: `Racial`
            }


        character.skills.known.cook = new Cook;
        character.skills.known.cook.raceBonus = 20;

        character.skills.known.wildernessSurvivalWilderness = new WildernessSurvivalWilderness;
        character.skills.known.wildernessSurvivalWilderness.raceBonus = 20;

        character.skills.known.landNavigation = new LandNavigation;
        character.skills.known.landNavigation.raceBonus = 20;

        character.skills.known.wPBlunt= new WPBlunt;
    }

    getSecondary(character) {
        character.secondaryStats.hp.initialValue = character.attributes.pe.total;
        character.secondaryStats.mdc.initialValue = character.attributes.pe.total;
    }
}

module.exports = Larmac;