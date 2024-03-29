const Skill = require('../Skill');

class BoatsPaddleTypes extends Skill {
    constructor() {
        super();
        this.name = `Boats: Paddle Types`;
        this.group = `Pilot`;
        this.isSecondary = true;
        this.description = `The skill includes paddled boats and canoes, rowboats, and knee boards, as well as the kayak. Speed in still water is usually equal to the character's P.S. attribute (treated for all purposes as Spd) and can be maintained for P.E. x5 minutes without pause. The skill also includes basic principles behind using currents, maintenance, and even 'tricks' like sculling and right-siding a flipped canoe, etc.`;
        this.perLvl = 5;
        this.base = 50;
    }
}

module.exports = BoatsPaddleTypes;