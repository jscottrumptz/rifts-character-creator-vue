const Spell = require('../Spell');

class RiftTeleportation extends Spell {
    constructor() {
        super();
        this.name = 'Rift Teleportation';
        this.group = 'Invocation';
        this.level = 'Eleven';
        this.range = `Up to 100 miles (160 km) per level of the spell caster.`;
        this.duration = `Roughly 1D4+4 seconds/half a melee round.`;
        this.cost = `200 P.P.E. (half for Shifters and Temporal Raiders/Wizards). `;
        this.limitations = `Requires a ley line nexus and can only teleport to another ley line nexus point within the range of the spell caster.`;
        this.savingThrow = `+3 to save if an unwilling participant of this magic. A successful save means the character is not teleported with the others and remains at the nexus location where the Rift was opened.`;
        this.description = `    As many as 20 human-sized people per level of the spell caster can be teleported from one ley line nexus to another, allowing for entire platoons and companies of soldiers to be magically whisked from one location to another. In all cases, the spell caster must be familiar with the arrival point (nexus point). 
    A Rift appears at the departure point and closes in six seconds (roughly equal to two or three melee actions). A moment later (1D6 seconds), a Rift opens up at a different nexus location and those who entered are teleported to that point. A second later, the Rift closes as if it never existed. This is a one-way method of travel, requiring the spell to be cast coming and going. Teleportation is done without risk because the exact location is a known and fixed point at a junction where two or more lines of magic energy converge. The only exception is if the spell is used during a Ley Line Storm, in which case the group will be teleported to some random location 3D6x100 miles (480 to 2880 km) away. This spell can not be used to teleport to other worlds, only on the planet where the ley lines are located (in this case, Rifts Earth).`;
    }
}

module.exports = RiftTeleportation;