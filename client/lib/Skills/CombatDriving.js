const Skill = require('../Skill');

class CombatDriving extends Skill {
    constructor() {
        super();
        this.name = `Combat Driving`;
        this.group = `Pilot`;
        this.isSecondary = false;
        this.description = `This skill supplements other driving skills by helping to make the character a master of the roads when driving automobiles, jeeps, trucks, motorcycles, and other ground vehicles. It helps to turn the character into an aggressive road-hog and cool-headed 'chicken' player. In fact, tricks, dangerous manoeuvres, and high-speed car chases are challenging and fun for this daredevil, although any passengers are likely to fear for their lives.

In game mechanics, skill penalties for tricks, vehicular attacks (ram, sideswipe etc.), and evasive manoeuvres are reduced by half when this character is at the wheel, plus they gain the bonuses below.

This is a supplemental piloting skill applicable only to ground vehicles and does not have a base skill or level of experience progression.`;
        this.bonus = `+2 to Dodge when driving.
+2 to Survive a crash/impact.
Only -2 penalty when firing weapon from moving vehicle.
Aimed or Called Shots possible from moving vehicle (at -2 to Strike).
0 penalty to talk, or engage in some other activity while driving.
Penalties reduced an additional 1 point per level of experience of the driver.`;
    }
}

module.exports = CombatDriving;