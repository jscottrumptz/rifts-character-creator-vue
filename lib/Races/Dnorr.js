const Race = require('../Race');
const { Random } = require('random-js');
const random = new Random;

class Dnorr extends Race {
    constructor() {
        super();
        this.name = `D'norr`;
        this.description = 'Rifts World Book 30: D - Bees of North America pg. 71';
        this.image = 'assets/images/race/dnorr.jpg';
        this.heightMin = 5;
        this.heightMax = 6;
        this.weightMin = 120;
        this.weightMax = 180;
        this.lifespan = 200;
        this.abilities = ['No Psionics']
        this.iqRoll = { sides: 6, amount: 2, bonus: 6 };
        this.meRoll = { sides: 6, amount: 2, bonus: 4 };
        this.maRoll = { sides: 6, amount: 2, bonus: 12 };
        this.psRoll = { sides: 6, amount: 3 };
        this.ppRoll = { sides: 6, amount: 3 };
        this.peRoll = { sides: 6, amount: 3 };
        this.pbRoll = { sides: 6, amount: 2, bonus: 3 };
        this.spdRoll = { sides: 6, amount: 3 };
        this.hp = { sides: 6, amount: 1, bonus: 2 };
        this.sdc = { bonus: 20 };
        this.horror = { bonus: 12 };
        this.perceptionBonus = { bonus: 4 };
        this.mindControlBonus = { bonus: 1 };
        this.illusionBonus = { bonus: 1 };
        this.possessionBonus = { bonus: 3 };
        this.horrorBonus = { bonus: -1 };
        this.insanityBonus = { bonus: -1 };
    }

    rollSecondary(character) {
        character.secondaryStats.ppe.raceBonus = character.attributes.pe.total + random.dice(6,6).reduce((a, b) => a + b, 0);
        character.skills.total = 4;

        let ma = character.attributes.ma
        if (ma.raceTotal > 17) {
            ma.attributeRoll.push(random.die(6));
            ma.raceTotal = ma.attributeRoll.reduce((a, b) => a + b, 0) + ma.bonus;
        }
        character.skills.science.total = 3;
        character.skills.technical.total =1;
        character.skills.science.anthropology = { known: true, required: true, raceBonus: 10};
        character.skills.science.mathmaticsBasic = { known: true, required: true, raceBonus: 15};
        character.skills.science.mathmaticsAdvanced = { known: true, required: true, raceBonus: 15};
        // character.skills.technical.known.push(new Skill ('Art', true, [], 20, 35, 5))
    }
}

module.exports = Dnorr;