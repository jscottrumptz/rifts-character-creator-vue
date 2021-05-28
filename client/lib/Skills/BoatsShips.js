const Skill = require('../Skill');

class BoatsShips extends Skill {
    constructor() {
        super();
        this.name = `Boats: Ships`;
        this.group = `Pilot`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `The in-depth knowledge about sailing vessels, large and small, as well as the terms and principles of sailing. The character knows how to sail, whether it be in belaying, hauling, dropping, or trimming sail, which means they also know the difference between a crossjack, a mizzenmast, a fore lower top gallant, and a hundred other names for specific sails, ropes, masts, and cross-masts. The skill also includes being able to judge, evaluate, and repair sails, ropes, and rigging (every sailor has to be handy with a needle and thread), and operate the pumps needed to remove the water that collects in the bilge, as well as knowing how to braid rope, and the basics of cleaning and maintaining a vessel.

The first percentile number is for small sailing vessels and general sailing knowledge. The second percentile number is for piloting large ships on the open seas.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = `Sewing and Rope Works skills.`;
        this.perLvl = `5`;
        this.baseTwo = `40`;
        this.base = `45`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = BoatsShips;