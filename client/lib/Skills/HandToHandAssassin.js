const Skill = require('../Skill');

class HandToHandAssassin extends Skill {
    constructor() {
        super();
        this.name = `Hand to Hand: Assassin`;
        this.group = `Physical`;
        this.isSecondary = `false`;
        this.note = `Assassin combat training enables the character to use any basic/common attacks, including Punch, Elbow, Kick, Knee, Disarm, Dodge, Entangle, Body Block/Tackle, Body Flip/Throw, Roll with Impact, Power Punch, Power Kick, and Pull Punch, and even many martial arts moves listed below, but unless noted blow, the character does not have the special martial art moves.`;
        this.description = `This is an advanced form of combat with an emphasis on immobilizing or killing one's opponent quickly. It costs three of the character's skill selections to learn.

This style of fighting is a specialized science of killing generally taught by secret organizations such as organized crime cartels, secret government 'wet working' bureaus, military black ops, and so on.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `Level 1:
Starts with 3 Hand to Hand attack/actions per melee round.
+2 Strike.
W.P. Paired Weapons.
Level 2: 
+1 Initiative.
+2 Additional attacks/actions per melee round.
Level 3:
+3 Pull Punch.
+2 Roll with Punch/Fall/Impact.
Karate Punch; does 2D4 damage.
Level 4:
+1 Initiative.
+4 damage (all physical attacks).
Karate Kick; does 2D6 damage.
Level 5:
+1 Additional attack/action per melee round.
+1 Strike with thrown weapon.
Level 6:
+3 Parry.
+3 Dodge.
+2 Entangle.
Backhand Strike (martial arts); does 1D6 damage.
Level 7:
Knockout/Stun on unmodified 17-20.
Leap Kick; does 3D8 damage (counts as 2 melee attacks).
Level 8:
+1 Additional attack/action per melee round.
+1 Strike with guns.
+1 Initiative.
Level 9:
+1 Initiative.
Back Flip.
Level 10:
Critical Strike on unmodified 19-20.
Level 11:
+2 Strike in hand to hand.
+1 Strike with thrown weapon.
+1 Strike with guns.
Back Flip Attack.
Level 12:
+2 Pull Punch.
Death Blow on natural 19-20.
Level 13:
+1 Additional attack/action per melee round.
Level 14:
+2 Damage.
Perform Holds.
Level 15:
+2 Strike in hand to hand.
+1 Strike with guns.`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = HandToHandAssassin;