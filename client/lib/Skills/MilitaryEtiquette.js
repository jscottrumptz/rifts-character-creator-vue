const Skill = require('../Skill');

class MilitaryEtiquette extends Skill {
    constructor() {
        super();
        this.name = `Military Etiquette`;
        this.group = `Military`;
        this.isSecondary = false;
        this.note = `All soldiers have a fundamental knowledge of military etiquette (30% skill with no improvement), but this skill is much more complete with a strong knowledge of what is expected, correct and the formal approach (i.e. by the book knowledge).`;
        this.description = `The clear understanding of the way the military works, including rules of behaviour (when to salute, how to address superiors and subalterns, etc.), military procedures and routines, standard issue of equipment, special ordering procedures, proper display of rank and medals, advancement in rank (and the duties that come with it), proper troop formations, how to deal with military bureaucracy, the chain of command, proper channels, who to contact to get things done, and other useful information in matters of military protocol and bureaucracy.`;
        this.perLvl = 5;
        this.base = 35;
    }
}

module.exports = MilitaryEtiquette;