const Spell = require('../Spell');

class LeyLineTimeCapsule extends Spell {
    constructor() {
        super();
        this.name = 'Ley Line Time Capsule   ';
        this.group = 'Invocation';
        this.level = 'Eight';
        this.range = `Touch.`;
        this.duration = `Up to 50 years per level of experience.`;
        this.cost = `15 P.P.E. when performed on a ley line (8 P.P.E. for a Line Walker or Shifter). However, this spell can also be cast away from a ley line for the cost of 30 P.P.E.`;
        this.limitations = `Can encapsulate 50 lbs (22.5 kg) per level of experience. Effective only on picked fruits and plants, and non-living materials, including herbs, fruit, vegetables, grains, other foods, water, alcohol, potions, books, clothing, weapons, machines, etc. Humanoids, animals, and insects cannot be placed in a time capsule.`;
        this.savingThrow = `Not applicable.`;
        this.description = `    Everything placed in the time capsule is preserved and ages at the rate of one minute for every year inside the capsule. To create a time capsule, the spell caster must place the items to be preserved into a container of some kind. The container can be a wooden crate, plastic box, cardboard box, knapsack, bag, or j ust about anything as long as it can be completely closed. When the container is closed the spell is cast. The magic creates an energy field that takes the container and everything inside it out of the normal time continuum. As long as the container remains unopened, the magic remains in effect. The instant it is opened the time capsule spell ends. The time capsule can be hidden, buried, or just placed on a shelf. How easy it is to open the time capsule depends entirely on the strength of, and locks on, the container. Furthermore, while sealed, food and water inside can not be spoiled or polluted via spoiling magic.`;
    }
}

module.exports = LeyLineTimeCapsule;