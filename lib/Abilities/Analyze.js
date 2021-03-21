const Ability = require('../Ability');

class Analyze extends Ability {
    constructor() {
        super();
        this.name = 'Analyze'
        this.decription = `A skill-like ability that enables a character to break patterns, solve strange equations. and otherwise gain insight and analysis to a situation, event or character. It also applies to strategy, finance, or just "working all the angles." Adds a bonus of+ I 0% to skills such as Anthropology, Chemistry: Analytical, Computer Hacking, Cryptography, Entomological Medicine, Jury-Rig, Sensory Equipment, Trap/ Mine Detection, Zoology and Xenology, and + 1 on Perception Rolls when the scientist is focused on analyzing/figuring something out.`
    }
}

module.exports = Analyze;