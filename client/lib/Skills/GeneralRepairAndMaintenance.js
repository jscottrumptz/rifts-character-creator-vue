const Skill = require('../Skill');

class GeneralRepairAndMaintenance extends Skill {
    constructor() {
        super();
        this.name = `General Repair & Maintenance`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `Not everyone can be a mechanic, blacksmith, or carpenter, but many are good with their hands and capable of doing satisfactory repairs on simple mechanisms, gears, pulleys, wheels, and so on. The General Repair & Maintenance skill includes: sharpening blades, minor repairs on weapons, packing their own S.D.C. bullets, sewing tears on clothes (it may not look pretty, but does the job), changing a tire, shoeing a horse, repairing furniture, painting, varnishing, nailing, and assisting in basic woodworking, and even doing minor patchwork on armour (restores 1D6 M.D.C.). Roll once to see whether the character can figure out what is broken, what must be done to fix it, and whether it is beyond their meager abilities to repair. Roll again to determine actual success or failure in making the actual repair.If a failure, the character may try again, but only twice.

Reduce skill proficiency by half if the item is extremely damaged, complex, high-tech, or alien.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = ``;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = ``;
        this.base = `35`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = GeneralRepairAndMaintenance;