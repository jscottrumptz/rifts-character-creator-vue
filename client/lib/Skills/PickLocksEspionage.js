const Skill = require('../Skill');

class PickLocksEspionage extends Skill {
    constructor() {
        super();
        this.name = `Pick Locks`;
        this.group = `Espionage`;
        this.isSecondary = false;
        this.description = `The character knows the methods and tools for picking/opening key and tumbler type locks. This does not include sophisticated computer or electronic locks. It takes 1D6 melee rounds for each attempt to pick a lock. A failed roll means the lock holds: try again.`;
        this.bonus = `+5% to this skill if Escape Artist [Espionage] is also taken.`;
        this.perLvl = 5;
        this.base = 30;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'escapeArtist') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = PickLocksEspionage;