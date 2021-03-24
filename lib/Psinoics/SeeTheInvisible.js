const Psionic = require('../Psionic');

class SeeTheInvisible extends Psionic {
    constructor() {
        super();
        this.name = 'See the Invisible';
        this.group = 'Sensitive';
        this.range = '120 feet (36.6 m); double on a ley line.';
        this.duration = 'One minute per each level of experience.';
        this.cost = '4 I.S.P.';
        this.savingThrow = 'None';
        this.description = `    The character can see entities, beings, forces, objects and creatures which can turn invisible or are naturally invisible. Even if the creature has no form per se, the psychic will be able to discern the vaporous im-age or energy sphere which is the being. This includes ghosts, Entities, Elementals and Astral Beings.`;
    }
}

module.exports = SeeTheInvisible;