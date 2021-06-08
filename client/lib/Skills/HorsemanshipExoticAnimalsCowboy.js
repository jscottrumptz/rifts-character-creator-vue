const Skill = require('../Skill');

class HorsemanshipExoticAnimalsCowboy extends Skill {
    constructor() {
        super();
        this.name = `Horsemanship: Exotic Animals`;
        this.group = `Cowboy`;
        this.isSecondary = false;
        this.note = `Characters with any Horsemanship skill can quickly figure out how to ride exotic animals and alien riding beasts but at a penalty of-12% to ride ground/running animals and at -20% to ride flying animals or tree climbing and leaping animals. Similarly, beings from other dimensions not familiar with riding fast and sleek Earth horse are -10% to ride them. Penalty applies to the second percentile for tricks, stunts, racing, and maintaining control. The horseman knows nothing about judging quality nor the care or grooming of exotic animals.`;
        this.description = `The basic riding skill but the character is experienced in riding tame animals other than the horse. Exotic animals can include: elephants, camels, lamas, pegasus, gryphons, dinosaurs, giant insects, and other monstrous beasts trained (or willing) to be ridden. Wild, untamed creatures can not be ridden, except by Simvan and select other characters with special animal skills or powers.`;
        this.perLvl = 4;
        this.baseTwo = 20;
        this.base = 40;
    }
}

module.exports = HorsemanshipExoticAnimalsCowboy;