const Skill = require('../Skill');

class HandToHandExpert extends Skill {
    constructor() {
        super();
        this.name = `Hand to Hand: Expert`;
        this.group = `Physical`;
        this.isSecondary = false;
        this.note = `Expert combat training enables the character to use any basic/common attacks, including Punch, Elbow, Kick, Knee, Disarm, Dodge, Entangle, Body Block/Tackle, Body Flip/Throw, Roll with Impact, Power Punch, Power Kick, and Pull Punch, and even some martial art moves, but unless noted below, the character does not have special moves or martial art attacks such as Automatic Dodge, Back Flip, Holds, Karate Punches, Leap Kick, or other moves.`;
        this.description = `This is an advanced form of self-defense and unarmed combat usually taught to comandos. It costs two of the character's skill selections to learn.

This is the fighting style taught to police officers, soldiers, bodyguards, thieves, and anybody else who will be expected tolive by violence. While it lacks the mastery of the Hand To Hand: Martial Arts, an Expert fighter knows how to scrap quickly and efficiently. At high levels, especially, those with this skill can often hold their own against dedicated masters of the martial arts.`;
        this.bonus = `Level 1:
Starts with 4 Hand to Hand attack/actions per melee round.
Kick attack; does 1D8 damage.
+2 Pull Punch.
+2 Roll with Punch/Fall/Impact.
Level 2: 
+3 Parry.
+3 Dodge.
+1 Pull Punch.
Level 3:
+2 Strike.
+2 Disarm.
Karate punch/strike; does 2D4 damage.
Level 4:
+1 Additional attack/action per melee round.
Level 5:
Karate Kick; 2D6 damage.
Level 6:
Critical Strike on unmodified roll of 18-20.
Level 7:
W.P. Paired Weapons.
Backhand Strike; 1D4 damage (usually).
Level 8:
+2 Body flip/throw; 1D6 damage (victim loses intiative and one attack/action).
Level 9:
+1 Additional attack/action per melee.
+1 Disarm.
Level 10:
+3 Damage.
Level 11:
Knockout/Stun on unmodified roll of 18-20.
Level 12:
+2 Parry.
+2 Dodge.
Level 13:
Critical Strike or Knockout from behind (triple damage).
Level 14:
+1 Additional attack/action per melee round.
Level 15:
Death Blow on roll of natural 20.`;
        this.skillCost = 1;
    }

    rollSecondary(character) {
        character.bonuses.attacks.initialValue = 4;
        character.bonuses.roll.skillsBonus = character.bonuses.roll.skillsBonus + 2;
        character.bonuses.pull.skillsBonus = character.bonuses.pull.skillsBonus + 2;
    }
}

module.exports = HandToHandExpert;