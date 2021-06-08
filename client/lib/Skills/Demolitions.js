const Skill = require('../Skill');

class Demolitions extends Skill {
    constructor() {
        super();
        this.name = `Demolitions`;
        this.group = `Military`;
        this.isSecondary = false;
        this.note = ` Any character with the Demolitions skill can use explosives underwater, but at a -10% penalty to the Demolitions skill. Demolitions:Underwater is required to remove this penalty.`;
        this.description = `The skill Demolitions provides the character with an advanced knowledge in the use and workings of explosives and detonation devices for the purpose of blowing up bridges, buildings, barriers, fortifications, and sabotage. This includes all types of explosives, such as mines, dynamite, plastics, nitro, blasting caps, etc. It also includes a basic understanding of the strategic placement of mines ad booby traps. This skill increases the character's awareness of suspicious rope, string, and wire.

A failed roll means a dud, no explosion.`;
        this.perLvl = 3;
        this.base = 60;
    }
}

module.exports = Demolitions;