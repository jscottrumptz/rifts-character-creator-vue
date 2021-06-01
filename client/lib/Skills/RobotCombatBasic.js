const Skill = require('../Skill');

class RobotCombatBasic extends Skill {
    constructor() {
        super();
        this.name = `Robot Combat: Basic`;
        this.group = `Pilot`;
        this.isSecondary = `false`;
        this.note = `Damage: 
As per Robot P.S. Each power armour description will list the damage under the damage under the 'Elite' hand to hand stat block. The basic skill, however, only lets the pilot do a Restrained Punch and Full Strength Punch and an ordinary Kick, no Leap Kick, Stomp, or special attacks.

Power Armour BodyBlock/Tackle/Ram: 
1D4 M.D. plus a 50%chance of knocking an opponent down, causing them to lose initiative and one melee attack/action. Counts as two of the power armour's melee attacks.

Robot Body Block/Tackle/Ram: 
M.D, equal to Robot Punch M.D. plus a 60% chance of knocking down an opponent that is approximately the same size or larger. Increase the odds of knocking down an opponent that is half the size or smaller than the robot to 80%. The victim suffers M.D. and loses initiative and two melee attacks/actions. Counts as two of the robot's melee attacks.`;
        this.description = `The basic combat training in robot vehicles and power armour gives the pilot a fair working knowledge of most robot vehicles and their most basic combat capabilities. The pilot will be able to operate the robot and use the various weapon systems and fighting capabilities, but not at maximum skill and efficiency. Hand to hand bonuses from Power Armour Basic Training applies to all types of power armour, ground, aquatic, and flyers. Use 'Basic' tables only.

Characters with this skill are taught the fundamentals of operating all types of power armour suits (such as the Flying Titan, SAMAS, Glitter Boy, and others), as well as basic types of robot vehicles. Power armour is a robot exoskeleton that is worn like a suit of armour. Power armour is usually much smaller,lighter, and faster than a robot vehicle (like the UAR-1 Enforcer). Any vehicle bigger than 12 feet (3.6m) and which requires the pilot to sit down or has a 'crew compartment' or can accommodate passengers is a robot vehicle, not power armour.

The emphasis of training is on piloting, not combat, hence the low bonuses, but the individual is able to operate all types of robots and power armour on a basic level. To get superiour combat bonuses requires the Robot Combat: Elite skill.

All bonuses (below) are in addition to the pilot's own hand to hand combat training and attribute bonuses. They do not apply to the pilot's physical abilities outside the power armour or robot vehicle. Strike bonuses for built-in weapons are limited to bonuses the pilot may have from the skills: Weapon Systems and/or W.P. Heavy Mega-Damage Weapons (applies to rail guns and missile launchers as well).`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+1 extra attack/action per melee round (plus those of the pilot).
+1 to strike in hand to hand combat.
+1 to parry in hand to hand combat.
+1 to dodge.
+1 to roll with impact.
Critical strike is same as pilot's hand to hand skill.`;
        this.required = `Pilot: Robots & Power Armour.`;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
        this.preq = ['robotsandPower']
    }
}

module.exports = RobotCombatBasic;