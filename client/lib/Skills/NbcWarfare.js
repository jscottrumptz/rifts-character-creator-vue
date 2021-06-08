const Skill = require('../Skill');

class NbcWarfare extends Skill {
    constructor() {
        super();
        this.name = `NBC Warfare`;
        this.group = `Military`;
        this.isSecondary = false;
        this.description = `The knowledge of safety precautions to protect oneself and others from the effects of nuclear, biological, or chemical warfare, waste, and contamination. The character is also knowledgeable in the safe handling and 'clean-up', as well as containment of such hazardous materials.`;
        this.perLvl = 5;
        this.base = 35;
    }
}

module.exports = NbcWarfare;