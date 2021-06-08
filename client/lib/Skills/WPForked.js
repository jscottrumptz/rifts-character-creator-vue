const Skill = require('../Skill');

class WPForked extends Skill {
    constructor() {
        super();
        this.name = `W.P. Forked`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = true;
        this.description = `This includes small weapons such as the sai and tiger fork, to large weapons such as the pitchfork, military fork, and trident, as well as other weapons with tines. When wielded two-handed (large weapons) or with one in each hand (small weapons with W.P. Paired Weapons), it's possible to catch enemy swords with a successful entangle. Not really designed for throwing.`;
        this.bonus = `+1 to strike at levels 1, 3, 6, 10, and 13.
+1 to entangle at levels 1, 3, 6, 10, and 13.
+1 to strike when thrown at levels 4, 10, and 15.`;
    }
}

module.exports = WPForked;