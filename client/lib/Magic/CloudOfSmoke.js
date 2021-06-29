const Spell = require('../Spell');

class CloudOfSmoke extends Spell {
    constructor() {
        super();
        this.name = 'Cloud of Smoke';
        this.group = 'Invocation';
        this.level = 'One';
        this.range = `90 feet (27.4 m).`;
        this.duration = `Four melees (one minute) per level of experience.`;
        this.cost = `2 P.P.E.`;
        this.savingThrow = `None.`;
        this.description = `    This magic enables the mage to create a cloud of dense, black smoke (30x30x30 feet/9x9x9 meter maximum size) up to ninety feet (27.4 m) away. Victims caught in the cloud will be unable to see any-thing beyond the cloud, and their impaired vision allows them to see no more than three feet (0.9 m) within the cloud, and even then that means only blurry shapes. While in the cloud, victims are -5 to strike, parry, dodge, disarm and entangle.`;
    }
}

module.exports = CloudOfSmoke;