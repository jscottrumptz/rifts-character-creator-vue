const Skill = require('../Skill');

class RecycleDomestic extends Skill {
    constructor() {
        super();
        this.name = `Recycle`;
        this.group = `Domestic`;
        this.isSecondary = true;
        this.note = `If the character also has Basic Mechanics (or a superior mechanical skill) they can strip down a damage machine of its basic component parts and knows what to gather to make useful materials to repair  an existing machine or build something new. Includes a very rudimentary understanding of metallurgy.`;
        this.description = `The knowledge of materials and scraps that have value when recycled, and methods of collecting, cleaning and storing recycled goods. Recycling typically includes paper, limber, plastic, glass, aluminium (can etc.), scrap metal, electrical wiring, circuit boards, and spare electronic and machine parts.`;
        this.perLvl = 5;
        this.base = 30;
        this.takeTwiceBonus = `+10%`;
        this.takeTwice = true;
    }
}

module.exports = RecycleDomestic;