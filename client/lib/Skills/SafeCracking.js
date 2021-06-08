const Skill = require('../Skill');

class SafeCracking extends Skill {
    constructor() {
        super();
        this.name = `Safe-Cracking`;
        this.group = `Rogue`;
        this.isSecondary = `false`;
        this.note = ``;
        this.description = `This is a specialized skill in which the character studies the strengths, weaknesses, and construction of safes and how to open them without damaging the contents inside. The fingers of the safe-cracker are so sensitive that they can 'feel' the subtle calibration of combination locks and other locking mechanisms. When using explosives, they can use their abilities to such precision that they can 'blow' the lock off a safe, security door, safe deposit box, and similar without creating a big, area effect explosion or inflicting damage to the contents (a failed Safe-Cracking skill or Demolitions roll means the explosion was too much and the contents are damaged).`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to the Pick Locks skill if this skill is taken.
+5% to the Demolitions skill if this skill is taken.
+4% to this skill if Locksmith [Mechanical] is also taken.
+6% to this skill if Mechanical Engineer [Mechanical] is also taken.
-10% to this skill if character's M.E. is 14 or less (requires focus, concentration, and keen hearing).`;
        this.required = ``;
        this.perLvl = `4`;
        this.baseTwo = ``;
        this.base = `20`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'mechanicalEngineer') {
                this.skillBonus = this.skillBonus + 6;
            }
            if(skill === 'locksmith') {
                this.skillBonus = this.skillBonus + 4;
            }
        })
        if (character.attributes.me.total < 15) {
            this.attributeBonus = this.attributeBonus -10;
        }
    }
}

module.exports = SafeCracking;