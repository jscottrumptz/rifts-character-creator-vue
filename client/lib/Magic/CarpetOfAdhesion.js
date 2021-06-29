const Spell = require('../Spell');

class CarpetOfAdhesion extends Spell {
    constructor() {
        super();
        this.name = 'Carpet of Adhesion   ';
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `30 feet (9 .1 m) + 10 feet (3 m) per level of the spell caster.`;
        this.duration = `10 melee rounds (two and a half minutes) per level of the spell caster.`;
        this.cost = `10 P.P.E.`;
        this.savingThrow = `Special.`;
        this.description = `    The spell caster creates a sticky carpet, up to 10 feet wide by 20 feet (3x6 m) long, that will adhere firmly to anyone who touches it. The victim stays stuck until the carpet spell time elapses or until the spell caster cancels the spell. The carpet can be cast on a floor, table, wall, etc., or actually cast upon a person. When cast, the mage can create this super-flypaper in whatever size and shape he likes, without exceeding the stated limit of 200 square feet (18.6 sq. m).`;
        this.note = `If a successful saving throw vs magic is made, that player rolls two six-sided dice to see how many melee rounds it will take him to pull free. Those failing to make the saving throw are stuck for the entire duration of the spell. Effective even against cyborgs, power armor, robots and those with Supernatural P.S. Someone who Teleports away will Teleport part of the Carpet with them Gust the immediate area around them) and re-mains stuck when they reach their new destination.`;
    }
}

module.exports = CarpetOfAdhesion;