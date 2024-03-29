const Skill = require('../Skill');

class OpticSystems extends Skill {
    constructor() {
        super();
        this.name = `Optic Systems`;
        this.group = `Communication`;
        this.isSecondary = true;
        this.description = `This skill provides training in the use of special optic enhancement equipment such as telescopic lenses, laser targeting, thermal imagers, passive light intensifiers, infrared and ultraviolet systems, polarization, light filters, optical scanners, video and digital cameras, holograms, and related devices.`;
        this.bonus = `+5% to the TV/Video [Communication] skill if this skill is taken.`;
        this.perLvl = 5;
        this.base = 30;
    }
}

module.exports = OpticSystems;