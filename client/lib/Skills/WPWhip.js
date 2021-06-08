const Skill = require('../Skill');

class WPWhip extends Skill {
    constructor() {
        super();
        this.name = `W.P. Whip`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = `true`;
        this.description = `This is skill at 'whipping' or snapping with long, lightweight, flexible weapons, typically made of leather or reeds. Examples include Bull Whips and Cat-O-Nine-Tails.

This weapon can not be used to parry and can not be thrown.`;
        this.bonus = `+1 to strike, disarm or entangle at levels 2, 4, 8, and 12.`;
    }
}

module.exports = WPWhip;