const Skill = require('../Skill');

class BiowareMechanics extends Skill {
    constructor() {
        super();
        this.name = `Bioware Mechanics`;
        this.group = `Mechanical`;
        this.isSecondary = false;
        this.description = `The 'Bioware' IS cybernetics! A character with this skill can identify, service, and repair all cybernetic and bionic systems, from the simplest data plug to the most sophisticated of the artificial eyes. This, however, is limited to the actual machine and electronics of cybernetics, not designing or building bionic components (unless part of a kit to be assembled). Nor does the skill apply to living bio-systems, like artificial skin, organic eyes, and internal organs.

A bio-mechanic can fix a cybernetic implant or bionic machine part - hand, arm, leg, mechanical implant, weapon - but can not install it or attach it to a living body unless they also have the Cybernetic Medicine skill.

The character is -20% when working with sophisticated bionic systems including bionic weaponry or alien cybernetic units.`;
        this.required = `Mechanical Engineer [Mechanical]`;
        this.perLvl = 5;
        this.base = 30;
        this.preq = ['mechanicalEngineer']
    }
}

module.exports = BiowareMechanics;