const Spell = require('../Spell');

class Concealment extends Spell {
    constructor() {
        super();
        this.name = 'Concealment';
        this.group = 'Invocation';
        this.level = 'Two';
        this.range = `Small objects up to 40 feet (12.2 m) away.`;
        this.duration = `Five minutes (20 melees) per level of experience.`;
        this.cost = `6 P.P.E.`;
        this.savingThrow = `Standard.`;
        this.description = `    This magic makes any small object sort of invisible. Actually, it affects the perception of anybody who looks at it. Unless a character makes a successful saving throw, the item can not be seen. This can be applied to an item on one's person or out in the open. Each character who looks at the place where the enchanted object is resting must roll a saving throw versus magic. A failed roll means that particular individual will not see it until the magic lapses. 
    Only one object is affected each time the magic is invoked. The recipient of this magic can not be living and the object must be smaller than 14 inches (35.5 cm) in length and height, six inches (15.2 cm) or less in width, and weigh 14 pounds (6 3 kg) or less.`;
        this.note = `If the object is used as a weapon or picked up by the mage or anyone who does see it, the enchantment is broken and it becomes clearly visible to all.`;
    }
}

module.exports = Concealment;