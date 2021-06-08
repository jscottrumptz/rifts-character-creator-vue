const Skill = require('../Skill');

class Camouflage extends Skill {
    constructor() {
        super();
        this.name = `Camouflage`;
        this.group = `Military`;
        this.isSecondary = true;
        this.description = `The skill of concealing a fixed base position, vehicle, equipment, or individual, using natural and/or artificial materials. A fair amount of time is involved in the preparation of a larger position. Large cargo nets, cut branches or underbrush are used most often in camouflage. This skills also used to conceal traps.`;
        this.bonus = `+5% to this skill if Detect Concealment [Espionage] is also taken.`;
        this.perLvl = 5;
        this.base = 20;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'detectConcealment') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = Camouflage;