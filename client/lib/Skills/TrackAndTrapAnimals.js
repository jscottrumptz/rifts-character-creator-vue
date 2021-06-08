const Skill = require('../Skill');

class TrackAndTrapAnimals extends Skill {
    constructor() {
        super();
        this.name = `Track & Trap Animals`;
        this.group = `Wilderness`;
        this.isSecondary = `true`;
        this.note = ``;
        this.description = `This skill enables the character to identify an animal by its tracks, scent, spoor, and habits. The individual can also follow the animal's tracks and other signs. This means they can estimate how fresh the tracks are, what direction they are heading, whether the animal is hurt or sick, and guess its age. The habits and habitats of animals and animal behaviour are also learned. The first percentile indicates the character's tracking abilities and the aforementioned knowledge. The second percentile indicates the character's ability at trapping animals using and setting snares, clamp traps (like the iron bear trap),pits, nets and cage traps.

Tracking humans with this skill is also possible, but is done with a penalty of -20%. Disarming any traps meant for use against humans is done at half the character's normal skill ability for using animal traps.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to this skill if Zoology [Science] is also taken.`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = `30`;
        this.base = `20`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }

    rollSecondary(character, list) {
        list.forEach(skill => {
            if(skill === 'zoology') {
                this.skillBonus = this.skillBonus + 5;
            }
        })
    }
}

module.exports = TrackAndTrapAnimals;