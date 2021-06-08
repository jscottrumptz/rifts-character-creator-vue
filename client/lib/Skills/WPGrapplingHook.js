const Skill = require('../Skill');

class WPGrapplingHook extends Skill {
    constructor() {
        super();
        this.name = `W.P. Grappling Hook`;
        this.group = `Weapon Proficiencies Ancient`;
        this.isSecondary = true;
        this.description = `This is trained use of a grappling hook for climbing (adds +5% to the Climb Skill when a grappling hook is used), scaling walls, boarding vessels, or snagging objects. Tripping an opponent is done by hooking the foot, ankle, or leg. It does little damage, but successfully knocking an opponent to the ground causes the victim to lose their initiative and one melee attack/action. This weapon can not be used to parry.`;
        this.bonus = `+1 to strike or entangle when thrown/swung at levels 3, 6, 9, and 12.`;
    }
}

module.exports = WPGrapplingHook;