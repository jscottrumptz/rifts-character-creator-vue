const Skill = require('../Skill');

class Housekeeping extends Skill {
    constructor() {
        super();
        this.name = `Housekeeping`;
        this.group = `Domestic`;
        this.isSecondary = true;
        this.description = `The techniques and methods of cleaning clothes, bedding, bathrooms, floors, and surfaces, as well as knowledge of the types of cleansers, solvents, soaps, and materials for housekeeping. Professional maintenance personnel, maids, and hotel housekeepers will know additional 'tricks of the trade' to make a room look spotless, sparkling, and inviting; everything in its place, folded properly and presented attractively.`;
        this.perLvl = 5;
        this.base = 35;
        this.takeTwiceBonus = `+10%`;
        this.takeTwice = true;
    }
}

module.exports = Housekeeping;