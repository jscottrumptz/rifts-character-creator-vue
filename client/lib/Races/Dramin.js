const Race = require('../Race');

class Dramin extends Race {
    constructor() {
        super();
        this.name = 'Dramin';
        this.description = `    In a world of endless racial diversity, where beings vary in appearance as greatly as they do in power, Dramins seem notably unimpressive. They lack any sort of natural "powers." They have no inherent mystical or psychic ability, no Mega-Damage skin nor Supernatural Strength. They are not predisposed to any skilled profession or area of study. Even their appearance is decidedly average, mirroring that of the native humans with the exception of their ashen gray skin and small, lidless, all-black eyes. Thus, Dram ins blend in seamlessly to the backdrop of the world. 

    In cultural and societal aspects, however, they are extremely alien. Try to imagine that you are the only being that really, truly exists in the whole world. Everything you see and touch -the rocks, the plants, the air, the animals, and the people - are all complex illusions. The world and the entire Megaverse are massive constructs built around you. Everything exists as some sort of game, trial, or test for you to complete as best you can. 

    As bizarre as it sounds, this is the way that virtually every in-dividual Dramin views the world and his place in it. It is a deeply-ingrained perspective encoded into their being to which 99% of the race prescribes. It isn't an organized faith or social order, but each individual Dramin takes it upon him or herself to find the best path on the way to the end goal, whatever that may be. To outsiders, this seems terribly complicated and illogical, but to a Dramin it's simple. Each person takes his own view of things, but the choices to be made are the same: What am I meant to do? What is my ultimate purpose? How do I best achieve it? 

    Many choose to view the world from a spiritual perspective and believe that everything was created by an all-powerful being. These Dramins believe that they are being observed to see whether or not they are worthy for the real world, another stage of existence, or even for the afterlife. For most of these Dramins, their god is a nameless being to whom they alone answer, but some find the truths they are seeking in one established religion or another, usually in a god who promotes good over evil and rewards good works and acts of charity. Most of these individuals strive to help others, fight injustice, or achieve enlightenment through study and prayer. They become healers, teachers, and champions. Many find callings as lawmen, clerics, or modem knights-errant, challenging evil in all of its forms in the hopes of doing good in the eyes of their god. 

    Other Dramins take a scientific view of the situation, and believe that they are little more than the subject of an experiment or an expansive simulation. They may see themselves as rats trying to make it to the reward in the center of a maze, or as students taking the mother of all examinations. Dram ins with this world-view tend to be problem-solvers, tackling challenges to cure a disease or build a better mousetrap. They gravitate toward technical and scientific professions, and are often students for life. Their studies may prompt them to travel across and be-tween worlds to seek knowledge or find the challenge that will define life and get them to the end of their test. 

    Others take a carefree attitude toward life and live "in the moment." They live to eat, drink, and be merry without a second thought for what tomorrow may bring. They relieve themselves of the cares and responsibilities of the world; nothing that they do makes a difference anyway, right? Many of these Dramins become terrible oppressors, despots, power-mongers or party animals who seek to satisfy their own whims and desires with-out regard for others. They are the typically careless, rude, and vile segment of the Dram in population and are often hedonists in the extreme, satisfying their baser urges above all else. While lacking any sort of inherent abilities to give them a leg up over other would-be 

(see Rifts® World Book 30: D - Bees of North America pg. 73 for more information)\``;
        this.image = 'assets/images/race/dramin.jpg';
        this.availableOCCs = `    Dramins can take any commonly-available O.C.C. and often practice professions viewed by others as advanced or exotic. Dramins may pursue any mystic art, including exotic ones, provided they can find a teacher. Those who choose to do so, often study in an attempt to better understand the world and their place in it. Most Dramins willingly tackle challenges and can be found studying even the most vexing or alien subjects. A Dramin will almost always choose a profession that they believe will take them down the path to satisfying their purpose in life. That said, most Dramins choose not to pursue chemical or mechanical augmentation.`
        this.psionicsDesc = `Standard; the same probability of psionic powers as a human. Psychic Dramins often see their gifts as playing a major role in their ultimate purpose in life. `
        this.abilitiesDesc = `Roughly equivalent to humans in most areas. Dramins have a high base P.P.E. compared to most humans due to their acceptance of the unusual and their corresponding ability to suspend disbelief. Their lidless, all-black eyes see within the normal spectrum of light, but are multifaceted and see in composite images from thousands of independent visual receptors, an effect of which is a Dramin's ability to see through illusions (see saves).`;
        this.cyberneticsDesc = `As per O.C.C. As a race, Dramins are not inherently opposed to mechanical augmentation, though fewer than 3% view it as favorable in the quest for the fulfillment of their purpose; a Dram in full-conversion 'Borg' is a rarity.`;
        this.disposition = `Dramins run the whole spectrum of personality types, but the vast majority are very confident, independent, and dedicated. Most have a belief system to which they rig-idly adhere, though those beliefs vary greatly between individuals. They have a tendency to be aloof and distant, seemingly uncaring of others around them, this stemming from their belief that theirs is the only genuine existence in the world.`;
        this.habitat = `Dramins can be found, periodically, anywhere. As a race with several different means of dimensional travel avail-able to them (they travel the Megaverse by technological and magical means), they can often be found on Rifts Earth, the majority of them in North America due to the variety of powers, conflicts, and opportunities there. Whether looking for answers through technology, peace, strife, knowledge, or justice, there is plenty to be had for any Dramin throughout North America, particularly in population concentrations such as found in Lazio, the Magic Zone, and CS 'Burbs.`;
        this.allies = `Dramins have no real allies as a race, since their interspecies diplomacy is limited. There are a number of Dramin diplomats who view their role as bringing peace and harmony to their home world and across the Mega verse, most of whom are extremely dedicated and adept at it.`;
        this.rivals = `Individual Dramins regularly make personal enemies in the pursuit of their goals, especially given their seemingly dismissive attitude towards others.`;
        this.pronunciation = 'DRAY - min';
        this.heightMin = 5;
        this.heightMax = 6;
        this.weightMin = 110;
        this.weightMax = 190;
        this.lifespan = { sides: 6, amount: 2, bonus: 70 };
        this.lifespanDesc = 'years; roughly the same as humans when it comes to reproduction and aging';
        this.sizeDesc = 'feet tall.';
        this.weightDesc = 'lbs.';
        this.iqRoll = { sides: 6, amount: 3 };
        this.meRoll = { sides: 6, amount: 4 };
        this.maRoll = { sides: 6, amount: 2, bonus: 2 };
        this.psRoll = { sides: 6, amount: 3 };
        this.ppRoll = { sides: 6, amount: 3 };
        this.peRoll = { sides: 6, amount: 3 };
        this.pbRoll = { sides: 6, amount: 3 };
        this.spdRoll = { sides: 6, amount: 3 };
        this.hp = { sides: 6, amount: 1};
        this.sdc = { sides: 6, amount: 5, bonus: 2 };
        this.ppe = { sides: 6, amount: 5 };
        this.perceptionBonus = { bonus: 1 };
        this.illusionBonus = { bonus: 5 };
    }

    rollSecondary(character) {
        character.psionics.randomPsionics = true;
    }
}

module.exports = Dramin;