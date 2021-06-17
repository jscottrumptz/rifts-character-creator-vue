const Spell = require('../Spell');

class RiftTeleportation extends Spell {
    constructor() {
        super();
        this.name = 'Rift Teleportation';
        this.group = 'Invocation';
        this.level = 'Eleven';
    }
}

module.exports = RiftTeleportation;