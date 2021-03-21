const Race = require('../Race');

class Dramin extends Race {
    constructor() {
        super();
        this.name = 'Dramin';
        this.description = 'Rifts World Book 30: D - Bees of North America pg. 73';
        this.heightMin = 5;
        this.heightMax = 6;
        this.weightMin = 110;
        this.weightMax = 190;
        this.lifespan = 82;
        this.iqRoll = { sides: 6, amount: 3 };
        this.meRoll = { sides: 6, amount: 4 };
        this.maRoll = { sides: 6, amount: 2, bonus: 2 };
        this.psRoll = { sides: 6, amount: 3 };
        this.ppRoll = { sides: 6, amount: 3 };
        this.peRoll = { sides: 6, amount: 3 };
        this.pbRoll = { sides: 6, amount: 3 };
        this.spdRoll = { sides: 6, amount: 3 };
        this.hp = { sides: 6, amount: 1};
        this.sdc = { sides: 6, amount: 5, bonus: 2 };
        this.ppe = { sides: 6, amount: 5 };
        this.perceptionBonus = { bonus: 1 };
        this.illusionBonus = { bonus: 5 };
    }

    rollSecondary(character) {
        character.psionics.randomPsionics = true;
    }
}

module.exports = Dramin;