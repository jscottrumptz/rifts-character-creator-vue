const Skill = require('../Skill');

class OpticSystems extends Skill {
    constructor() {
        super();
        this.name = `Optic Systems`;
        this.group = `Communication`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `This skill provides training in the use of special optic enhancement equipment such as telescopic lenses, laser targeting, thermal imagers, passive light intensifiers, infrared and ultraviolet systems, polarization, light filters, optical scanners, video and digital cameras, holograms, and related devices.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% TV/Video skill if both are selected.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `30`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = OpticSystems;