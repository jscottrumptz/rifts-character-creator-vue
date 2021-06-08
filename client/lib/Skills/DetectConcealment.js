const Skill = require('../Skill');

class DetectConcealment extends Skill {
    constructor() {
        super();
        this.name = `Detect Concealment`;
        this.group = `Espionage`;
        this.isSecondary = false;
        this.description = `The skill enables the individual to spot and recognize camouflage, hunting blinds, trip wires, concealed structures/buildings, and vehicles, secret doors and compartments, as well as conferring the ability to construct unobtrusive shelters, use camouflage and blend into the environment. The Detect Concealment skill is specifically designed to help a character to spot things that are deliberately hidden. For spotting 'normal' things, the character can use the Perception rules.`;
        this.bonus = `+5% to the Camouflage [Military] skill if this skill is taken.`;
        this.perLvl = 5;
        this.base = 25;
    }
}

module.exports = DetectConcealment;