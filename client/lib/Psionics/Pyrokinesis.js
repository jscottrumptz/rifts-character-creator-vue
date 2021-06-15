const Psionic = require('../Psionic');

class Pyrokinesis extends Psionic {
    constructor() {
        super();
        this.name = 'Pyrokinesis';
        this.group = 'Super';
        this.range = 'Varies.';
        this.duration = 'Varies.';
        this.cost = 'Varies.';
        this.description = `   Pyrokinesis is a psychic power that gives a character the power to manipulate fire.
        
    Fire Resistant
The psychic can endure great heat and fire with minimal ill effect. Damage is reduced by half. Magic fires do full damage.
Range: Self. 
Duration: 5 minutes per level of experience.
 I.S.P.: 2. 

    Spontaneous Combustion
The ability to create a spark that will ignite combustible material, such as paper, old rags, dry grass, gasoline, etc. Note: Human hair should not be considered a combustible mate-rial. This is a slow fire, starting with a tiny spark and growing. Initially, it is not a roaring blaze. 
Range: Can be ignited up to 30 feet away (9 m). Duration: Instant; fire will last and spread until it is put out or there is nothing to burn.
I.S.P.: 2. 

    Fuel Flame
The character can feed the fire with psychic energy, doubling it in size. Affects a 10 foot (3 m) area. 
Range: Up to 30 feet (9 m) +5 feet (1.5 m) for each additional level of experience. 
Duration: Instant.
I.S.P.: 4. 

    Extinguish Flames
The power to instantly put out an area of fire. Affects a 15 foot ( 4.5 m) radius of fire. 
Range: Up to 30 feet (9 m) away +5 feet (1.5 m) per each additional level of experience. 
Duration: Permanent until set on fire again. 
I.S.P.: 4.

    Create Flame
The incredible ability to create fire out of thin air. Can be an 8 foot (2.4 m) pillar of fire affecting a 4 foot ( 1.2 m) diameter or a 6 foot (1.8 m) high wall of fire stretching six feet (1.8 m) long + I foot (0.3 m) per each additional level of experience. Damage: 4D6 M.D. from the pillar, 6D6 M.D. from the wall, plus both have a 72% likelihood of setting any combustibles they touch ablaze (including cloth, rugs, curtains, furniture, etc.). 
Range: Cast up to 30 feet (9 m) +2 feet (0.6 m) per additional level of experience. 
Duration: 2 minutes per level of experience; longer if it sets other things on fire. 
I.S.P.: 20. 

    Fire Ball
Another fire creation ability is the hurling of a fire ball. 
Damage: 1D6x10 S.D.C. or 6D6 M.D.
Range: 30 feet (9 m) +2 feet (0.6 m) per each additional level of experience. 
Duration: Instant. 
Bonus: +2 to strike. 
I.S.P.: 25. 

    Sense Fire 
The psychic can sense or feel the presence of fire and pinpoint its exact location. 
Range: 100 feet (30.5 m) +5 feet (1.5 m) per level of experience. 
Duration: 2 minutes of extreme sensitivity when he/she can pinpoint the exact location of every fire in the area. 
Base Skill: 90% success ratio. A failed roll means only 2D4x10% of the fires can be located by sensing.
I.S.P.: 2 per every two minutes.`;
    }
}

module.exports = Pyrokinesis;