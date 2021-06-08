const Skill = require('../Skill');

class Mining extends Skill {
    constructor() {
        super();
        this.name = `Mining`;
        this.group = `Technical`;
        this.isSecondary = true;
        this.description = `The methods and practices used in prospecting, panning for gold, identifying minerals, digging mine shafts and finding and pumping water from underground sources. Includes the use of mining equipment, refining gear, and explosives. The use of explosives is a very basic use for the purpose of blasting (same as the Demolition skill but with a -20% penalty). A character with the Mining skill can also tell the quality of refined mineral products, and will know about many of the current mining operations in the area.`;
        this.perLvl = 5;
        this.base = 35;
    }
}

module.exports = Mining;