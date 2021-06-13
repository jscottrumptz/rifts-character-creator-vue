const Skill = require('../Skill');

class HandToHandCommando extends Skill {
    constructor() {
        super();
        this.name = `Hand to Hand: Commando`;
        this.group = `Physical`;
        this.isSecondary = false;
        this.note = `Commando combat training enables the character to use any basic/common attacks, including Punch, Elbow, Kick, Knee, Disarm, Dodge, Entangle, Body Block/Tackle, Body Flip/Throw, Roll with Impact, Power Punch, Power Kick, and Pull Punch, and even many martial art moves, but unless noted below, the character does not have special martial art moves.`;
        this.description = `This is an advanced form of military combat that includes martial arts techniques with an emphasis on immobilizing or killing one's opponent quickly. Restricted to certain O.C.C.s and is only available when the O.C.C./R.C.C. says so.

This style of combat is a quick and dirty form of martial arts typically available only to members of the military, and even then, only to special operations teams such as Commandos, Navy Seals, Special Forces, and Military Specialists.`;
        this.bonus = `Level 1:
Starts with 4 Hand to Hand attack/actions per melee round.
W.P. Paired Weapons.
Body flip/throw.
Body block/tackle.
+2 Save Vs Horror Factor.
Level 2: 
+1 Initiative.
+1 Strike.
+2 Parry.
+2 Dodge.
+3 Roll with Punch, Fall/Impact
Level 3:
+1 Initiative.
+1 Disarm.
Karate punch/strike; does 2D4 damage.
Level 4:
+1 Additional attack/action per melee round.
Karate-style kick; does 2D6 damage (starts with bringing up the knee, folded to chest level, then the lower leg is completely extended).
Level 5:
+2 Automatic Dodge.
All foot strikes.
Level 6:
+2 Initiative.
+1 Strike.
+1 Parry.
+1 Dodge.
+1 Body flip/throw.
Level 7:
+2 Damage.
+1 Save Vs Horror Factor.
+1 Disarm.
+1 Automatic Dodge.
+2 Pull Punch.
Level 8:
+1 Additional attack per melee.
Jump kick.
+2 Body flip/throw.
+1 Roll with Punch./Fall/Impact.
Level 9:
+2 Pull Punch.
Death Blow on natural 18-20.
Level 10:
+1 Initiative.
+1 Strike.
+2 Save Vs Horror Factor.
Level 11:
+1 Disarm.
+1 Pull Punch.
+2 Body flip/throw.
Level 12:
+1 Parry.
+1 Dodge.
+2 Damage.
+2 Automatic Dodge.
Level 13:
+1 Additional attack/action per melee.
Level 14:
Perform Holds.
+1 Initiative.
Level 15:
Critical Strike on natural 17-20.`;
    }

    rollSecondary(character) {
        character.bonuses.attacks.initialValue = 4;
        character.saves.horror.skillsBonus = character.bonuses.horror.skillsBonus + 2;
    }
}

module.exports = HandToHandCommando;