const Skill = require('../Skill');

class HandToHandMartialArts extends Skill {
    constructor() {
        super();
        this.name = `Hand to Hand: Martial Arts`;
        this.group = `Physical`;
        this.isSecondary = false;
        this.note = `Martial Arts combat training enables the character to use any basic/common attacks, including Punch, Elbow, Kick, Knee, Disarm, Dodge, Entangle, Body Block/Tackle, Body Flip/Throw, Roll with Impact, Power Punch, Power Kick, and Pull Punch, as well as the martial arts moves listed below.`;
        this.description = `This is some form of Oriental fighting skill (karate, kung-fu, etc.) that teaches advanced hand to hand combat. It costs three of the character's skill selections to learn.

A form of martial arts that takes and mixes techniques from many different sources.`;
        this.bonus = `Level 1:
Starts with 4 Hand to Hand attack/actions per melee round.
+3 Pull Punch.
+3 Roll with Punch/Fall/Impact.
Body Flip/Throw; does 1D6 damage (victim loses initiative and 1 attack/action)
Level 2: 
+3 Parry.
+3 Dodge.
+2 Strike.
Perform any hand strike/punch (usually 2D4 damage).
Level 3:
+1 Initiative.
Karate Kick; does 2D6 damage.
Any foot strike (except Leap Kick).
Level 4:
+1 Additional attack/action per melee round.
Level 5:
Leap Kick; 3D8 damage (counts as 2 melee attacks).
+2 Entangle.
Level 6:
Critical Strike on unmodified roll of 18-20.
Level 7:
W.P. Paired Weapons.
+2 Disarm.
Perform Holds.
Level 8:
Back Flip.
Back Flip Escape.
Level 9:
+1 Additional attack/action per melee.
Level 10:
+2 disarm.
Back Flip Attack.
Level 11:
+1 Initiative.
+4 Damage.
Level 12:
+2 Parry.
+2 Dodge.
Level 13:
Knockout/Stun on unmodified roll of 18-20.
Level 14:
+1 Additional attack/action per melee round.
Level 15:
Death Blow on roll of natural 20.`;
        this.skillCost = 2;
    }
}

module.exports = HandToHandMartialArts;