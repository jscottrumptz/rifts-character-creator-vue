const Spell = require('../Spell');

class EnergyDisruption extends Spell {
    constructor() {
        super();
        this.name = 'Energy Disruption   ';
        this.group = 'Invocation';
        this.level = 'Five';
        this.range = `60 feet (18.3 m).`;
        this.duration = `Three minutes (12 melees) per level of experience.`;
        this.cost = `12 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    A particularly useful magic in a tech environment. The invocation will temporarily knockout, stop, or immobilize, any electrical device it is aimed at. This includes normal automobiles, computers, radios, surveillance cameras, sensors, appliances, entire fuse boxes, batteries, electric alarm systems, etc. The apparatus is not harmed in any way, it simply ceases to function. When the magic elapses, the item(s) work perfectly again, with no sign of malfunction, damage or energy loss. Can not affect M.D.C. environmental armor, power armor, robots or military vehicles.`;
    }
}

module.exports = EnergyDisruption;