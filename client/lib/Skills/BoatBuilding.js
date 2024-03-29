const Skill = require('../Skill');

class BoatBuilding extends Skill {
    constructor() {
        super();
        this.name = `Boat Building`;
        this.group = `Wilderness`;
        this.isSecondary = false;
        this.description = `This skill enables the character to build a variety of rafts, small rowboats, large flatbed boats, and canoes. A small raft (twp-man) can be made within 1D6+1 hours if lumber and other suitable materials and tools are readily available. A large raft will take about 4D6 hours, a canoe 2D6 days, rowboat 4D4 days, large flatbed1D4x10 days. Time is doubled or tripled if trees must be cut down and wood prepared. Of course, the time can be reduced if several knowledgeable people are working on the construction. A failed skill roll means the boat has leaks.Trying to patch it will require 4D4 hours.`;
        this.bonus = `+10% to this skill if Carpentry [Wilderness] is also taken.`;
        this.perLvl = 5;
        this.base = 25;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'carpentry') {
                this.skillBonus = this.skillBonus + 10;
            }
        })
    }
}

module.exports = BoatBuilding;