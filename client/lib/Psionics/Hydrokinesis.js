const Psionic = require('../Psionic');

class Hydrokinesis extends Psionic {
    constructor() {
        super();
        this.name = 'Hydrokinesis';
        this.group = 'Super';
        this.range = 'Varies.';
        this.duration = 'Varies.';
        this.cost = 'Varies.';
        this.description = `    This ability enables the character to use psychic energy to sense and influence water. 

    Sense Chemical Impurities
The psychic can sense whether or not water is polluted or contains other substances. The exact nature of the additive or pollutant may be unknown, but he will know that it is not completely natural. When sensing water, first roll to determine: 
    1) Pure or Drinkable (nonhazardous/tap water) 70% +5% per each additional level of experience. 
    2) Roll for general nature of the pollutant; this identities whether it is a chemical/drug (not deadly, but will cause a reaction if drunk) or poison/toxin (deadly or harmful if swallowed). Success ratio in identifying the general nature of the pollutant is 35% +5% per each additional level of experience. 
Range: Self/six inches (0.15 m). 
Duration: One minute (4 melees). 
I.S.P.: 2 per minute.

    Boil Water
The psychic can increase the temperature of water, raising it to boiling level within one minute (four melees). Up to one gallon (3.8 liters) can be affected. Once set a boiling, it will take the usual amount of time to cool. This power can not be made to boil the water or blood in a living creature. 
Range: 8 feet (2.4 m) +2 feet (0.6 m) per level of experience. 
Duration: One minute (4 melees). 
I.S.P.: 3 per gallon of water.

    Water Spout
An ability that enables the psychic to control and hurl water. The effect can be used to make water bubble (but not heated), shoot straight up like a geyser or a water blast hurling across a room like a short, powerful spray from a garden hose. Up to one gallon of water per level of experience can be manipulated and hurled up to a distance of20 feet (6 m). Note: The fluid must be 75% water to be con-trolled, such as punch, hot coffee, chicken soup, tea, lemonade, etc. Forget about hurling ice (frozen does not count), paint, gasoline, or cake batter. 
Making water leap with a life of its own can be startling to others and can make a great distraction if handled right. Hurling normal water or a cool drink into somebody's face/eyes will momentarily blind and surprise the individual, causing him/her to lose initiative and one attack that melee. Hurling hot or boiling water on the body (especially the crotch) will have the same results. Hurling boiling water in the face is horribly painful, causing 2D4 damage, loss of initiative, loss of all at-
tacks for ID6 melees and temporary blindness for 3D6 melees (-10 to strike, parry and dodge). Characters of a good alignment will not hurl boiling water in the face unless under an absolutely life and death circumstance 
Hurling Range: 20 feet (0.6 m). Duration: Instant. 
I.S.P.: 5. Bonus: +1 to strike. 
Making water bubble or rise up like a fountain can be maintained for up to 30 seconds (2 melees). Note: The psychic can influence up to one gallon (3.8 liters) of water per level of experience up to 20 feet (6 m) away, whether he can see it or only feel its presence.

    Sense Water
The character can sense the presence of any water exposed to the open air automatically at no cost of l.S.P. 
Range: 20 feet (6 m). 
Duration: Permanent. 
I.S.P.: None.`;
        this.note = `Underground rivers, airtight containers, etc. cannot be sensed.`
    }
}

module.exports = Hydrokinesis;