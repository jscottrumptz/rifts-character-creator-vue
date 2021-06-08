const Skill = require('../Skill');

class RecogniseWeaponQuality extends Skill {
    constructor() {
        super();
        this.name = `Recognise Weapon Quality`;
        this.group = `Military`;
        this.isSecondary = true;
        this.note = `Half the skill ability if the weapon is only visually examined (not physically handled).`;
        this.description = `The ability to accurately determine a weapon's durability, reliability, and quality by physically examining it. This includes knowing which manufacturers are reputed to make the best weapons, the ability to recognize damage and signs of wear or misuse, modifications/customization,whether the weapon can be made as good as new with a little repair work and/or cleaning, whether it is a cheap (or quality) 'knock-off' (copy, imitation), and so on. The character can also recognize if the weapon is stolen (serial numbers filed away, etc.). old, new, and if it has any other special features or properties, as well as what a fair price should be.`;
        this.perLvl = 5;
        this.base = 25;
    }
}

module.exports = RecogniseWeaponQuality;