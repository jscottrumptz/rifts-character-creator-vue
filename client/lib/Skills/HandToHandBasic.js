const Skill = require('../Skill');

class HandToHandBasic extends Skill {
    constructor() {
        super();
        this.name = `Hand to Hand: Basic`;
        this.group = `Physical`;
        this.isSecondary = true;
        this.note = `Basic combat training enables the character to use any basic/common attacks, including Punch, Elbow, Kick, Knee, Disarm, Dodge, Entangle, Body Block/Tackle, Body Flip/Throw, Roll with Impact, Power Punch (but not Power Kick), and Pull Punch. But no special moves or martial art attacks such as Automatic Dodge, Back Flip, Holds, Karate Punches, Leap Kicks, or other moves.`;
        this.description = `This skill provides elementary fighting techniques and methods of attack and self-defense as taught in military basic training or in self-defense classes. Though it hardly stacks up against some of the more advanced forms of fighting, one who has trained in Hand To Hand: Basic still fights with combat skill compared to the simple everyday folk without training.`;
        this.bonus = `Level 1:
Starts with 4 Hand to Hand attack/actions per melee round.
+2 Pull Punch.
+2 Roll with Punch, Fall or Impact.
Level 2: 
+2 Parry.
+2 Dodge.
Level 3:
Kick attack; does 1D8 damage.
Level 4:
+1 Additional attack/action per melee round.
Level 5:
+1 Strike.
+1 Disarm.
Level 6:
Critical Strike on unmodified roll of 19-20.
Level 7:
+2 Damage.
Level 8:
Judo-style body flip/throw; does 1D6 damage (victim loses initiative and 1 attack/action).
Level 9:
+1 Additional attack/action per melee round.
Level 10:
+2 Pull Punch.
+2 Roll with Punch, Fall or Impact.
Level 11:
+1 Parry.
+1 Dodge.
Level 12:
+1 Strike.
Level 13:
Critical Strike or Knockout from behind.
Level 14:
+2 Damage.
Level 15:
+1 Additional attack/action per melee round.`;
    }

    rollSecondary(character) {
        character.bonuses.attacks.initialValue = 4;
        character.bonuses.roll.skillsBonus = character.bonuses.roll.skillsBonus + 2;
        character.bonuses.pull.skillsBonus = character.bonuses.pull.skillsBonus + 2;
    }
}

module.exports = HandToHandBasic;