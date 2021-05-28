const Skill = require('../Skill');

class BreedDogs extends Skill {
    constructor() {
        super();
        this.name = `Breed Dogs`;
        this.group = `Technical`;
        this.isSecondary = `true`;
        this.note = `These are trained work animals or pets, not familiars.`;
        this.description = `The first percentile number indicates the art of raising, mating/breeding, taming, and training domestic and wild canines, as well as a knowledge about canines in general.

The second percentile number is used to attempt to tame a wild canine, teach a dog tricks, or to train the animal for a specific task like tracking, retrieving, pointing, herding animals, attacking on command, and so on. A failed roll means the animal refuses to learn that particular trick or speciality.`;
        this.reqOCCGroup = ``;
        this.penalty = ``;
        this.bonus = `+5% to Disguise skill (only when posing as a beggar or refugee).`;
        this.required = ``;
        this.perLvl = `5`;
        this.baseTwo = `20`;
        this.base = `40`;
        this.takeTwiceBonus = ``;
        this.takeTwice = ``;
    }
}

module.exports = BreedDogs;