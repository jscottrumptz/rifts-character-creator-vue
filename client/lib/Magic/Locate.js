const Spell = require('../Spell');

class Locate extends Spell {
    constructor() {
        super();
        this.name = 'Locate';
        this.group = 'Invocation';
        this.level = 'Eight';
        this.range = `15 miles (24 km) per level of experience.`;
        this.duration = `Instant.`;
        this.cost = `30 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    Locate is a magic invocation that enables the spell caster to sense the general location of his quarry. The location is limited to a general area or environment, like a specific apartment building, aircraft, house, shopping mall, church, park, or wherever. 
    To locate a particular person the spell caster must have either personally encountered the individual or a photograph of said individual must be available to him. The success ratio for a spell is 01-41% (+1% per level of experience). The success ratio for a ritual is 01-89%, but this also requires an object owned by the person or a lock of hair, fingernail clippings, or dried blood from that person. `;
    }
}

module.exports = Locate;