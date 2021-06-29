const Spell = require('../Spell');

class FoolSGold extends Spell {
    constructor() {
        super();
        this.name = `Fool's Gold`;
        this.group = 'Invocation';
        this.level = 'Four';
        this.range = `5 feet (1.5 m).`;
        this.duration = `20 melees per level of the spell caster.`;
        this.cost = `10 P.P.E.`;
        this.savingThrow = `Standard.`;
        this.description = `    This Elemental magic enables the magician to cause any object to appear to be made of gold. After the mage leaves, the object will still retain its gold appearance until the spell elapses. The effect is temporary, and upon close examination by those who can recognize precious metals it is seen not to be gold. Those who save recognize it as worthless fool's gold.`;
    }
}

module.exports = FoolSGold;