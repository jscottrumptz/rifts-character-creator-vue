const Skill = require('../Skill');

class RobotsAndPowerArmor extends Skill {
    constructor() {
        super();
        this.name = `Robots & Power Armor`;
        this.group = `Pilot`;
        this.isSecondary = false;
        this.description = `The piloting and basic operations without any combat training or bonuses. Characters with this skill are taught the fundamentals of manoeuvering light and medium giant robots (like the Titan Reconnaissance Scout or NG-M56 Multi-Bot) and power armour suits (such as the Triax Terrain Hopper, Flying Titan, and Samson). These robot exoskeletons and vehicle type robots that require a pilot and/or crew to be inside to pilot them.

Power armour is typically man-sized and often worn like body armour, although sometimes the pilot sits inside. In all cases, the power armour responds to the pilot's physical movements.

Robot vehicles are typically giant constructs with vaguely human or animal features such as legs, claws, etc., but may also by vehicular in appearance or combine the two.

Flyers consisting of many types of robots and power armour, including airborne types like the famous Coalition SAMAS, are suitable for use underwater, although flight/propulsion speed is reduced by 70-80%. Power armour without jet propulsion can travel underwater by swimming or walking along the bottom, but at only 20% their normal land speed. Each specific description will indicate aquatic capabilities, if any.

The training focuses on piloting, not combat, thus Robot Combat: Basic and Robot Combat: Elite are separate and distinct skills. This skill enables the character to pilot combat model armour and robots but not how to fight or operate weapon systems. Consequently, the character does not get ANY special bonuses or extra attacks when piloting the 'bot or power armour; they only have their own physical number of attacks per melee round and bonuses to reply upon. They can also use a weapon system if it is built in, but with no special aptitude with it.

In fact, the use of weapons and special combat features (targeting, radar, etc.) are so unfamiliar that they confuse the ordinary non-combat pilot, causing the penalties (listed below) whenever they try to use weapons or fight with the robot (unless they have the Weapon Systems skill in which case the penalties do not apply).`;
        this.penalty = `-1 attack per melee round
-2 to strike (with punches, blades, guns or missiles).
-1 Parry.
-1 Dodge.`;
        this.perLvl = 3;
        this.base = 56;
    }
}

module.exports = RobotsAndPowerArmor;