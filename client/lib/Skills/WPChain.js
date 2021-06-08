const Skill = require('../Skill');

class WPChain extends Skill {
    constructor() {
        super();
        this.name = `W.P. Chain`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = true;
        this.description = `This is training with all types of chain weapons, including ordinary lengths of chain, the flail, ball or mace and chain, nunchaku, and similar. While chain weapons can be used one-handed,it's only possible to parry while the weapon is being wielded in two hands. This weapon can not be used to entangle and can not be thrown with any accuracy (see W.P. Penalties below).`;
        this.penalty = `-3 to strike when thrown.`;
        this.bonus = `+1 to strike at levels 1, 3, 7, 10, and 13.
+1 to parry at levels 4, 8, and 12.`;
    }
}

module.exports = WPChain;