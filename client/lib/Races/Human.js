const Race = require('../Race');

class Human extends Race {
    constructor() {
        super();
        this.name = 'Human';
        this.description = 'Rifts Ultimate Edition pg. 279';
        this.image = 'assets/images/race/human.jpg';
        this.psionicsDesc = `Standard; there is a 25% probability of human possessing some level of psionic powers.`
        this.heightMin = 5;
        this.heightMax = 6;
        this.weightMin = 110;
        this.weightMax = 190;
        this.lifespan = { sides: 6, amount: 2, bonus: 70 };
        this.pronunciation = 'hyoo muhn.'
        this.iqRoll = { sides: 6, amount: 3 };
        this.meRoll = { sides: 6, amount: 3 };
        this.maRoll = { sides: 6, amount: 3 };
        this.psRoll = { sides: 6, amount: 3 };
        this.ppRoll = { sides: 6, amount: 3 };
        this.peRoll = { sides: 6, amount: 3 };
        this.pbRoll = { sides: 6, amount: 3 };
        this.spdRoll = { sides: 6, amount: 3 };
        this.sdc = { sides: 6, amount: 2, bonus: 12 };
        this.hpText = 'PE';
        this.hpLvl = { sides: 6, amount: 1};
    }

    getSecondary(character) {
        character.secondaryStats.hp.initialValue = character.attributes.pe.total;
    }

    rollSecondary(character) {
        character.psionics.randomPsionics = true;
    }
}

module.exports = Human;