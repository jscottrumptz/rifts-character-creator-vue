const Skill = require('../Skill');

class JumpBikeCombat extends Skill {
    constructor() {
        super();
        this.name = `Jump Bike Combat`;
        this.group = `Pilot`;
        this.isSecondary = false;
        this.description = `This skill is exclusive to Juicers, Crazies, and similarly augmented people/O.C.C.s, for the use of the specialized Tarantula Jump Bike.`;
        this.bonus = `+1 Attack per melee round with the bike's weapon systems.
+1 to Automatic Dodge.
Bike Jump Attack: This attack uses the rockets to have the buke jump in the air and then land on a target. The sensitive rocket controls require a special skill roll. Base Skill: 25%, Per Experience Level: +5%. If the skill roll is successful. the pilot can make a normal attack roll (at +1 in addition to normal bonuses) to hit the target. Damage to the target is 3D6 M.D. This attack can only be attempted if there is room for manoeuvre (i.e.open terrain only).`;
        this.perLvl = 5;
        this.base = 45;
    }
}

module.exports = JumpBikeCombat;