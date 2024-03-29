const Skill = require('../Skill');

class Helicopter extends Skill {
    constructor() {
        super();
        this.name = `Helicopter`;
        this.group = `Pilot`;
        this.isSecondary = false;
        this.note = `This skill is superseded by Military: Combat Helicopters if taken at a later time.`;
        this.description = `The skill in piloting aircraft capable of vertical take-off, hovering, and high manoeuvrability at low altitudes. Very useful in urban environments. Includes all commercial helicopters used for observation, traffic reporting, police, chauffeuring, etc. The smallest are one- or two-seater craft, while the larger could hold four, eight, or possibly more passengers.`;
        this.perLvl = 4;
        this.base = 44;
    }
}

module.exports = Helicopter;