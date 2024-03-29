const Skill = require('../Skill');

class ElectricityGeneration extends Skill {
    constructor() {
        super();
        this.name = `Electricity Generation`;
        this.group = `Electrical`;
        this.isSecondary = false;
        this.description = `The skill that gives the character the understanding of how and why electrical generation systems work and able to use, link, and repair such motors, turbines, and generator systems, but not able to build them from scratch.

Electricity is generated in a variety of ways: from sunlight, wind and hydro systems (using solar panels, windmills and water turbines) to batteries, combustion engines and generators.`;
        this.penalty = `-40% penalty when working on alien, Techno-Wizard, or magical systems.`;
        this.required = `Basic Electronics [Electrical], Basic Mechanics [Mechanical], and Mathematics: Basic [Science].`;
        this.perLvl = 5;
        this.base = 50;
        this.preq = ['basicElectronics', 'basicMechanics', 'mathematicsBasic']
    }
}

module.exports = ElectricityGeneration;