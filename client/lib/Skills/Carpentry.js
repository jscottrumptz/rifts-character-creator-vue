const Skill = require('../Skill');

class Carpentry extends Skill {
    constructor() {
        super();
        this.name = `Carpentry`;
        this.group = `Wilderness`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `A fundamental knowledge of working with wood. The character knows how to prepare, treat,preserve and cut wood, recognize quality craftsmanship, repair damaged wood and wooden items, and build furniture and articles (chests, boxes, chairs, tables, cabinets, houses, fences, frames, staves, utensils, etc.).`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to the Trap Construction [Military] skill if this skill is taken.
+10% to the Boat Building [Wilderness] skill if this skill is taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `25`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = Carpentry;