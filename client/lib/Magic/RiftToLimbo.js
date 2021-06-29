const Spell = require('../Spell');

class RiftToLimbo extends Spell {
    constructor() {
        super();
        this.name = 'Rift to Limbo   ';
        this.group = 'Invocation';
        this.level = 'Eleven';
        this.range = `Must be performed at a nexus point.`;
        this.duration = `Limbo: One hour per level of the spell caster. May be set to automatically reopen at a specific, predetermined time, or upon the command of its creator. Otherwise, it opens at the end of the maximum duration period.`;
        this.cost = `160 P.P.E. (half for Shifters and Temporal Raiders).`;
        this.savingThrow = `None.`;
        this.description = `    This spell is rather like a giant version of the Temporal Raider's Pocket Dimension and is used to conceal troops and/or large vehicles or creatures. In this case, 50 man-sized people (or equivalently fewer, large objects, vehicles or creatures) per level of the spell caster can enter a small Rift to a limbo realm of white mist and clouds. Once all have entered, the portal closes and those who entered seem to disappear. There is no trace of these troops or objects and no sensors can detect them because they no longer exist in our world. The creation and entry to the Rift must be done at a ley line nexus, but once all have entered and the portal is closed, it can be placed to reopen anywhere along any ley line connected to the nexus.
    The passage of time for those in limbo is warped, so for every one hour that passes in the real world outside, it only seems like 1D4 minutes to those waiting in limbo.
    This spell is ideal for setting up ambushes and surprise attacks. Spell casters love to lead an enemy into a seemingly innocent and unoccupied location and then reopen the Rift to Limbo with a verbal command to spring the trap and release the troops waiting inside. Likewise, a character may trick an enemy into pitching their camp, searching for treasure, or lingering nearby long enough for some pre-set time in which the Rift will open and the enemy will be overwhelmed. When the Rift does reopen, it is the cue for all those within the limbo realm to exit. Slowpokes and those reluctant or unable to leave under their own power are magically deposited from limbo at the nexus point. Unsuspecting troops and travelers can suddenly face a small army of dozens to hundreds where none had stood just a moment before (several Rifts to Limbo can be strategically placed on the same ley line). This is yet another reason CS troops have learned to steer clear of ley lines and nexus points.
    Note that when the Rift is first opened, it is comparatively small. However, even unwitting troops will see and recognize it for what it is and avoid it. The point is, enemy troops can not be tricked into entering the Rift and being held captive inside for hours. Nor can the portal be cast on top of somebody or something already occupying the precise nexus point. Remember, the location where the portal is supposed to reopen is designated at the moment of its creation and can not be changed or moved.`;
        this.limitations = `Fixed position at a specific location on a ley line connected to the nexus point. Once that location is established, it can not be moved. Reopens at that precise location. If not reopened before the duration time elapses the dimensional portal will automatically open to disgorge those waiting inside at the end of that period.`;
        this.note = `Also known a s the "Ambush Rift."`;
    }
}

module.exports = RiftToLimbo;