const Skill = require('../Skill');

class NoHandToHandSkill extends Skill {
    constructor() {
        super();
        this.name = `No Hand to Hand Skill`;
        this.group = `Physical`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `Characters without combat training only get the bonuses listed below.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `Level 1:
Starts with 1 Hand to Hand attack per melee round (reflecting the character's pitiful fighting skills).
However, the character gets 2 non-combat melee actions (non-combat melee actions are activities other than fighting i.e. operating a machine, driving, locking a door, running, hiding, helping others, etc.).
Level 3: 
+1 attack per melee round.
+1 Dodge.
+1 Non-combat melee action.
Level 6:
+2 Non-combat melee actions.
Level 9:
+1 attack per melee round (for a total of three 'attacks' per round - each attack counts as 2 melee actions for this character).
+1 Non-combat melee action (for a total of 6 melee 'actions').`;
        this.required = ``;
        this.perLvl = ``;
        this.baseTwo = ``;
        this.base = ``;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = NoHandToHandSkill;