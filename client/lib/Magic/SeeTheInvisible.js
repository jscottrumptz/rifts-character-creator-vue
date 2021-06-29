const Spell = require('../Spell');

class SeeTheInvisible extends Spell {
    constructor() {
        super();
        this.name = 'See the Invisible';
        this.group = 'Invocation';
        this.level = 'One';
        this.range = `200 feet (61 m).`;
        this.duration = `One minute (4 melee rounds) per each level of experience.`;
        this.cost = `4 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    The character can see Astral beings, entities, Elementals, ghosts, objects, forces and creatures that can turn invisible or are naturally invisible. Even if the creature has no form per se, the mystic will be able to discern the vaporous image or energy sphere that is the being`;
    }
}

module.exports = SeeTheInvisible;